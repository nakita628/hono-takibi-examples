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

const OptionalRoomIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'roomId',
      in: 'query',
      description: 'The room ID. It is required if the `roomName` is not provided.',
      schema: { type: 'string' },
      example: 'dlp',
      required: false,
    },
  })

const OptionalRoomNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'roomName',
      in: 'query',
      description: 'The room name.  It is required if the `roomId` is not provided.',
      required: false,
      schema: { type: 'string' },
      example: 'WDuJLFkjwk6L7LdFC',
    },
  })

const RoomIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'roomId',
      in: 'query',
      description: 'The room ID.',
      required: true,
      schema: { type: 'string' },
      example: '6GFJ3tbmHiyHbahmC',
    },
  })

const OptionalUsernameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'username',
      in: 'query',
      description:
        'The username of the user in the DM. It is required if `roomId` is not provided.',
      required: false,
      schema: { type: 'string' },
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
        'Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
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
        'The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
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
        'List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: {},
    },
  })

const FilterNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'name',
      in: 'query',
      description: 'The name of the file to search for.',
      schema: { type: 'string' },
      example: 'logo',
      required: false,
    },
  })

const FilterTypeGroupParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'typeGroup',
      in: 'query',
      description:
        'Filter results by the type of file. Available options:\n- `all`: Return all file types.\n- `image`: Filter by image files.\n- `video`: Filter by video files.\n- `audio`: Filter by audio files.\n- `text`: Filter by text documents.\n- `application`: Filter by other file types.',
      schema: { type: 'string' },
      example: 'images',
      required: false,
    },
  })

export const postApiV1ChatDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.delete',
  tags: ['Chat'],
  summary: 'Delete Chat Message',
  description:
    "Delete a chat message. Users can delete messages only in the following cases:\n  * The **Allow Message Deleting** setting is enabled in the workspace's **Message** settings.\n  * If the **Block Message Deleting After (n) Minutes** message setting has a non-zero value, the `bypass-time-limit-edit-and-delete` permission is required to delete messages after the defined time limit.\n  * In read-only rooms, the `post-readonly` permission is required to delete messages, or the user must be unmuted.\n  * The `delete-own-message` permission is required to delete users' own messages.\n  * The `delete-message` permission is required for users to delete messages from other users.\n\nYou can delete a message by its `roomId` and `msgId`, or delete a message by its `fileId` to remove the message that holds an uploaded file.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n| 8.6.0            | Added `fileId` to delete a message by the file it contains. |\n| 0.48.0           | Added       |\n",
  operationId: 'post-api-v1-chat.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The room ID. Required when deleting by `msgId`.' }),
              msgId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of the message to delete. Required together with `roomId`.',
                }),
              fileId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the uploaded file whose message you want to delete. Use this instead of `roomId` and `msgId` to delete the message that contains the file.',
                }),
              asUser: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Should the message be deleted as the user who sent it? It is `false` by default.',
                }),
            })
            .openapi({
              description: 'Provide either `roomId` and `msgId` together, or `fileId` on its own.',
              required: [],
            }),
          examples: {
            'Delete by message': {
              value: { roomId: 'ByehQjC44FwMeiLbX', msgId: '7aDSXtjMA3KPLxLjt', asUser: false },
            },
            'Delete by file': { value: { fileId: '9aFcj4XmgQ7eYpLbT' } },
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
              _id: z.string().exactOptional(),
              ts: z.string().exactOptional(),
              message: z
                .object({
                  _id: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                _id: 'jEnjsxuoDJamGjbH2',
                ts: '1696533809813',
                message: {
                  _id: 'jEnjsxuoDJamGjbH2',
                  rid: '6GFJ3tbmHiyHbahmC',
                  u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.test', name: 'Testtest' },
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
            'Invalid Message ID': {
              value: {
                success: false,
                error: 'No message found with the id of \\"MvHcX2WKSrmdArmktz\\".',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatReactRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.react',
  tags: ['Chat'],
  summary: 'React to Message',
  description:
    'React or unreact to a chat message.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|0.64.0            | Added parameter "shouldReact" to make endpoint work like a setter|\n|0.63.0            | Emoji has to exist                                               |\n|0.62.2            |Added                                                             |',
  operationId: 'post-api-v1-chat.react',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description:
        "The emoji doesn't have to contain `:`. However, the emoji must exist. Using either the `emoji` or `reaction` parameter is required.",
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z.string().openapi({ description: 'The message ID to react to.' }),
              emoji: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The emoji to react with. It's required if you aren't using the `reaction` parameter.",
                }),
              reaction: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The reaction to use. It's required if you aren't using the `emoji` parameter.",
                }),
              shouldReact: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Boolean to specify if the reaction should be added or removed.',
                }),
            })
            .openapi({ required: ['messageId'] }),
          examples: {
            'Example 1': {
              value: { messageId: '7aDSXtjMA3KPLxLjt', emoji: 'smile', shouldReact: true },
            },
          },
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
                error:
                  'The required "messageId" param is missing. [error-messageid-param-not-provided]',
                errorType: 'error-messageid-param-not-provided',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The provided "messageId" does not match any existing message. [error-message-not-found]',
                errorType: 'error-message-not-found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.update',
  tags: ['Chat'],
  summary: 'Update Message',
  description:
    'Update a specific message.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 6.12.0           | Fixed `customFields` not updating if `text` was unchanged |\n| 6.4.0            | Add previewUrls param       |        \n| 0.49.0           | Added       |',
  operationId: 'post-api-v1-chat.update',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The room ID where the message is.' }),
              msgId: z.string().openapi({ description: 'The message ID to update.' }),
              text: z.string().openapi({ description: 'Updated text for the message.' }),
              previewUrls: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array to define which URL previews should be retrieved from each message.',
                }),
              customFields: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    "You can add custom fields for messages. For example, set priorities for messages.\n\nYou must enable this option and define the validation in the workspace settings. See the <a href='https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/message' target='_blank'>Message</a> settings for further information.",
                  example: { priority: 'high' },
                }),
            })
            .openapi({ required: ['roomId', 'msgId', 'text'] }),
          examples: {
            Example: {
              value: {
                roomId: '64f0f82c2c26843a68c1f7ba',
                msgId: 'vzGBzSwy6jJQDwtZe',
                text: 'Updated list of links! https://google.com https://hola.org/ https://www.usepayday.com/ https://www.getbumpa.com/ https://www.atlassian.com/software/jira http://localhost:3000/',
                previewUrls: ['https://google.com', 'http://localhost:3000/'],
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
              message: z
                .object({
                  _id: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  urls: z
                    .array(
                      z
                        .object({
                          url: z.string().exactOptional(),
                          meta: z.looseObject({}).exactOptional(),
                          ignoreParse: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  mentions: z.array(z.looseObject({})).exactOptional(),
                  channels: z.array(z.looseObject({})).exactOptional(),
                  md: z
                    .array(
                      z
                        .object({
                          type: z.string().exactOptional(),
                          value: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  value: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  editedAt: z.string().exactOptional(),
                  editedBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                message: {
                  _id: 'vzGBzSwy6jJQDwtZe',
                  rid: '64f0f82c2c26843a68c1f7ba',
                  msg: 'Updated list of links! https://google.com https://hola.org/ https://www.usepayday.com/ https://www.getbumpa.com/ https://www.atlassian.com/software/jira http://localhost:3000/',
                  ts: '2023-09-20T17:27:59.945Z',
                  u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                  _updatedAt: '2023-09-20T22:22:45.793Z',
                  urls: [
                    { url: 'https://google.com', meta: {} },
                    { url: 'https://hola.org/', meta: {}, ignoreParse: true },
                    { url: 'https://www.atlassian.com/software/jira', meta: {}, ignoreParse: true },
                    { url: 'http://localhost:3000/', meta: {} },
                  ],
                  mentions: [],
                  channels: [],
                  md: [
                    {
                      type: 'PARAGRAPH',
                      value: [
                        { type: 'PLAIN_TEXT', value: 'Updated list of links! ' },
                        {
                          type: 'LINK',
                          value: {
                            src: { type: 'PLAIN_TEXT', value: 'https://google.com' },
                            label: [{ type: 'PLAIN_TEXT', value: 'https://google.com' }],
                          },
                        },
                        { type: 'PLAIN_TEXT', value: ' ' },
                        {
                          type: 'LINK',
                          value: {
                            src: { type: 'PLAIN_TEXT', value: 'https://hola.org/' },
                            label: [{ type: 'PLAIN_TEXT', value: 'https://hola.org/' }],
                          },
                        },
                        { type: 'PLAIN_TEXT', value: ' ' },
                        {
                          type: 'LINK',
                          value: {
                            src: {
                              type: 'PLAIN_TEXT',
                              value: 'https://www.atlassian.com/software/jira',
                            },
                            label: [
                              {
                                type: 'PLAIN_TEXT',
                                value: 'https://www.atlassian.com/software/jira',
                              },
                            ],
                          },
                        },
                        { type: 'PLAIN_TEXT', value: ' ' },
                        {
                          type: 'LINK',
                          value: {
                            src: { type: 'PLAIN_TEXT', value: 'http://localhost:3000/' },
                            label: [{ type: 'PLAIN_TEXT', value: 'http://localhost:3000/' }],
                          },
                        },
                      ],
                    },
                  ],
                  editedAt: '2023-09-20T22:22:45.737Z',
                  editedBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  'The required "messageId" param is missing. [error-messageid-param-not-provided]',
                errorType: 'error-messageid-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatReportMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.reportMessage',
  tags: ['Chat'],
  summary: 'Report Message',
  description:
    "<a href='https://docs.rocket.chat/docs/message-actions#report-a-message-or-user' target='_blank'>Report</a> a specific message.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 0.64.0           | Added       |",
  operationId: 'post-api-v1-chat.reportMessage',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z.string().openapi({ description: 'The message ID to report.' }),
              description: z.string().openapi({ description: 'The description of report.' }),
            })
            .openapi({ required: ['messageId', 'description'] }),
          examples: {
            'Example 1': { value: { messageId: '7aDSXtjMA3KPLxLjt', description: 'test' } },
          },
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
                error: "must have required property 'messageId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'description' [error-invalid-params]",
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

export const postApiV1ChatFollowMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.followMessage',
  tags: ['Chat'],
  summary: 'Follow Message',
  description:
    'Follow a message to receive notifications.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 8.9.0            | Changed the rate limit to 5 requests every 5 seconds per client IP address. |\n| 1.0.0            | Added       |',
  operationId: 'post-api-v1-chat.followMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              mid: z.string().openapi({ description: 'The `id` of the message to follow.' }),
            })
            .openapi({ required: ['mid'] }),
          examples: { 'Example 1': { value: { mid: '7aDSXtjMA3KPLxLjt' } } },
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
                error: '[The required "mid" body param is missing.]',
                errorType: 'The required "mid" body param is missing.',
              },
            },
            'Invalid message ID': {
              value: {
                success: false,
                error: 'Invalid message [error-invalid-message]',
                errorType: 'error-invalid-message',
                details: { method: 'followMessage' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatUnfollowMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.unfollowMessage',
  tags: ['Chat'],
  summary: 'Unfollow Message',
  description:
    'Unfollow a message.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 8.9.0            | Changed the rate limit to 5 requests every 5 seconds per client IP address. |\n| 1.0.0            | Added       |',
  operationId: 'post-api-v1-chat.unfollowMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ mid: z.string().openapi({ description: 'The message ID to unfollow.' }) })
            .openapi({ required: ['mid'] }),
          examples: { 'Example 1': { value: { mid: '7aDSXtjMA3KPLxLjt' } } },
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
                error: '[The required "mid" body param is missing.]',
                errorType: 'The required "mid" body param is missing.',
              },
            },
            'Invalid message ID': {
              value: {
                success: false,
                error: 'Invalid message [error-invalid-message]',
                errorType: 'error-invalid-message',
                details: { method: 'unfollowMessage' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatGetMessageRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getMessage',
  tags: ['Chat'],
  summary: 'Get Message',
  description:
    'Get a single chat message. You must have permission to access the room where the message resides.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n| 0.47.0       | Added       |',
  operationId: 'get-api-v1-chat.getMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      msgId: z
        .string()
        .openapi({
          param: {
            name: 'msgId',
            in: 'query',
            description: 'The message ID.',
            required: true,
            schema: { type: 'string' },
            example: '7aDSXtjMA3KPLxLjt',
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
              message: z
                .object({
                  _id: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  alias: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  reactions: z
                    .object({
                      ':frowning2:': z
                        .object({ usernames: z.array(z.string()).exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  mentions: z.array(z.looseObject({})).exactOptional(),
                  channels: z.array(z.looseObject({})).exactOptional(),
                  starred: z
                    .object({ _id: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  t: z.string().exactOptional(),
                  groupable: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                message: {
                  _id: 'CeXwh5eBbdrtvnqG6',
                  rid: 'agh2Sucgb54RQ8dDo',
                  msg: 's',
                  ts: '2018-10-05T13:48:21.616Z',
                  u: { _id: 'KPkEYwKKBKZnEEPpt', username: 'marc.pow', name: 'Marc Pow' },
                  _updatedAt: '2018-10-05T13:48:49.535Z',
                  reactions: { ':frowning2:': { usernames: ['marcos.defendi'] } },
                  mentions: [],
                  channels: [],
                  starred: { _id: 'KPkEYwKKBKZnEEPpt' },
                },
                count: 2,
                offset: 0,
                total: 2,
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
            'Example 1': {
              value: { success: false, error: 'The "msgId" query parameter must be provided.' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatGetThreadsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getThreadsList',
  tags: ['Chat'],
  summary: 'List Threads',
  description:
    "Get a list of the <a href='https://docs.rocket.chat/docs/threads' target='_blank'>thread</a> conversations in a room.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n|1.0.0             | Added       |",
  operationId: 'get-chat.getThreadsList',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'query',
            description: 'The room ID.',
            schema: { type: 'string' },
            example: '7aDSXtjMA3KPLxLjt',
            required: true,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string' },
            description:
              'Filter the thread by type. It can either be: \n- `unread`: returns the threads you follow which has unread messages. \n- `following`: returns all the thread you follow.',
            required: false,
          },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter the thread list by search term.',
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
              threads: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      md: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      reactions: z
                        .object({
                          ':smile:': z
                            .object({ usernames: z.array(z.string()).exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      starred: z.array(z.looseObject({})).exactOptional(),
                      pinned: z.boolean().exactOptional(),
                      pinnedAt: z.string().exactOptional(),
                      pinnedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      replies: z.array(z.string()).exactOptional(),
                      tcount: z.int().exactOptional(),
                      tlm: z.string().exactOptional(),
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
            'Example 1': {
              value: {
                threads: [
                  {
                    _id: 'NZieMNQDEdMDmLLip',
                    rid: '6GFJ3tbmHiyHbahmC',
                    msg: 'hola',
                    ts: '2023-10-05T20:30:51.052Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-10-16T22:57:27.362Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hola' }] }],
                    reactions: { ':smile:': { usernames: ['test.test'] } },
                    starred: [],
                    pinned: true,
                    pinnedAt: '2023-10-05T20:59:44.433Z',
                    pinnedBy: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.test' },
                    replies: ['rbAXPnMktTFbNpwtJ'],
                    tcount: 2,
                    tlm: '2023-10-16T22:57:27.158Z',
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

export const getApiV1ChatGetDeletedMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getDeletedMessages',
  tags: ['Chat'],
  summary: 'Get Deleted Messages',
  description:
    'Get deleted messages from a specific date.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 0.73.0           | Added       |',
  operationId: 'get-api-v1-chat.getDeletedMessages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      since: z
        .string()
        .openapi({
          param: {
            name: 'since',
            in: 'query',
            description:
              'A valid ISO date format from which you want to search the deleted messages.',
            required: true,
            schema: { type: 'string' },
            example: '2018-12-12T00:11:22.345Z',
          },
        }),
      roomId: RoomIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z
                .array(z.object({ _id: z.string().exactOptional() }).openapi({ required: [] }))
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                messages: [
                  { _id: 'wKBW2YwrPahpag4zA' },
                  { _id: 'SJXYBbageAo8bo7rX' },
                  { _id: 'jEnjsxuoDJamGjbH2' },
                ],
                count: 3,
                offset: 0,
                total: 3,
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: '[The required "roomId" query param is missing.]',
                errorType: 'The required "roomId" query param is missing.',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: '[The required "since" query param is missing.]',
                errorType: 'The required "since" query param is missing.',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatGetDiscussionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getDiscussions',
  tags: ['Chat'],
  summary: 'Get Discussions of A Room',
  description:
    "Gets the <a href='https://docs.rocket.chat/docs/discussions' target='_blank'>discussions</a> in a room. \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 2.4.0            | Added       |",
  operationId: 'get-api-v1-chat.getDiscussions',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter the thread list by search term.',
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
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      groupable: z.boolean().exactOptional(),
                      drid: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      dcount: z.int().exactOptional(),
                      dlm: z.string().exactOptional(),
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
            'Example 1': {
              value: {
                messages: [
                  {
                    _id: '652dc4dda2f73c7460e18df8',
                    t: 'discussion-created',
                    rid: '6GFJ3tbmHiyHbahmC',
                    ts: '2023-10-16T23:18:53.926Z',
                    msg: 'test discuss',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    groupable: false,
                    drid: '652dc4dda2f73c7460e18df6',
                    _updatedAt: '2023-10-16T23:19:18.992Z',
                    dcount: 2,
                    dlm: '2023-10-16T23:19:18.748Z',
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
                error: 'The required "roomId" query param is missing. [error-invalid-params]',
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
            'Incorrect room ID': {
              value: { success: false, error: 'error-not-allowed', errorType: 'error-forbidden' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1ChatGetMentionedMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getMentionedMessages',
  tags: ['Chat'],
  summary: 'Get Mentioned Messages',
  description:
    'Get the messages in which you are mentioned (users are mentioned with the `@` symbol). Visit the [Messages](https://docs.rocket.chat/docs/messages#mention-users) user guide to learn more.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 2.2.0        | Added       |',
  operationId: 'get-api-v1-chat.getMentionedMessages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z
                        .array(
                          z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                              type: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      md: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
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
            'Example 1': {
              value: {
                messages: [
                  {
                    _id: 'p93m92bPRudzoJ7oW',
                    rid: '6GFJ3tbmHiyHbahmC',
                    msg: '@test.john hello',
                    ts: '2023-10-16T23:27:02.945Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-10-16T23:27:03.071Z',
                    urls: [],
                    mentions: [
                      {
                        _id: '5fRTXMt7DMJbpPJfh',
                        username: 'test.john',
                        name: 'Test John',
                        type: 'user',
                      },
                    ],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [
                          {
                            type: 'MENTION_USER',
                            value: { type: 'PLAIN_TEXT', value: 'test.john' },
                          },
                          { type: 'PLAIN_TEXT', value: ' hello' },
                        ],
                      },
                    ],
                  },
                  {
                    _id: '4Q8nmha5doDHus5YR',
                    rid: '6GFJ3tbmHiyHbahmC',
                    msg: '@test.john',
                    ts: '2023-10-16T23:26:38.611Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-10-16T23:26:38.728Z',
                    urls: [],
                    mentions: [
                      {
                        _id: '5fRTXMt7DMJbpPJfh',
                        username: 'test.john',
                        name: 'Test John',
                        type: 'user',
                      },
                    ],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [
                          {
                            type: 'MENTION_USER',
                            value: { type: 'PLAIN_TEXT', value: 'test.john' },
                          },
                        ],
                      },
                    ],
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'The required "roomId" query param is missing. [error-invalid-params]',
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
            'Incorrect room ID': {
              value: { success: false, error: 'error-not-allowed', errorType: 'error-forbidden' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1ChatGetMessageReadReceiptsRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getMessageReadReceipts',
  tags: ['Chat'],
  summary: 'Get Message Read Receipts',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nGet the <a href=\'https://docs.rocket.chat/docs/message-actions#read-receipts\' target=\'_blank\'>read receipts</a> of messages.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n| 0.63.0          | Added       |',
  operationId: 'get-api-v1-chat.getMessageReadReceipts',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'query',
            description: 'The message id',
            required: true,
            schema: { type: 'string' },
            example: 'ByehQjC44FwMeiLbX',
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
              receipts: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      roomId: z.string().exactOptional(),
                      userId: z.string().exactOptional(),
                      messageId: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      user: z
                        .object({
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          _id: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                receipts: [
                  {
                    _id: 'HksCYdTpCiM9DZ7Sa',
                    roomId: 'GENERAL',
                    userId: 'nvw6PBrXTejp4sfQt',
                    messageId: 'WyDsZzjk2wHogtWK2',
                    ts: '2018-02-26T20:34:03.907Z',
                    user: { username: 'rocket.cat', name: 'Rocket cat', _id: 'nvw6PBrXTejp4sfQt' },
                  },
                ],
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
            .object({ error: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: { error: "The required 'messageId' param is missing.", success: false },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatGetPinnedMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getPinnedMessages',
  tags: ['Chat'],
  summary: 'Get Pinned Messages',
  description:
    "Get the <a href='https://docs.rocket.chat/docs/message-actions#pin-messages' target='_blank'>pinned messages</a> of a room. \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 2.0.0           | Added       |",
  operationId: 'get-api-v1-chat.getPinnedMessages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      md: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      pinned: z.boolean().exactOptional(),
                      pinnedAt: z.string().exactOptional(),
                      pinnedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      reactions: z
                        .object({
                          ':smile:': z
                            .object({ usernames: z.array(z.string()).exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      starred: z.array(z.looseObject({})).exactOptional(),
                      replies: z.array(z.string()).exactOptional(),
                      tcount: z.int().exactOptional(),
                      tlm: z.string().exactOptional(),
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
            'Example 1': {
              value: {
                messages: [
                  {
                    _id: 'ycHhPqyoN2BZHt3Ag',
                    rid: '6GFJ3tbmHiyHbahmC',
                    msg: 'ekaara',
                    ts: '2023-02-25T16:08:30.000Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-10-16T23:30:58.917Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'ekaara' }] }],
                    pinned: true,
                    pinnedAt: '2023-10-16T23:30:58.917Z',
                    pinnedBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  },
                  {
                    _id: 'Ay9jYg48gzjfpy7pk',
                    rid: '6GFJ3tbmHiyHbahmC',
                    msg: 'wassup',
                    ts: '2023-10-05T19:10:10.055Z',
                    u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.john', name: 'Testtest' },
                    _updatedAt: '2023-10-16T23:30:42.393Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'wassup' }] }],
                    pinned: true,
                    pinnedAt: '2023-10-16T23:30:42.393Z',
                    pinnedBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  },
                  {
                    _id: 'NZieMNQDEdMDmLLip',
                    rid: '6GFJ3tbmHiyHbahmC',
                    msg: 'hola',
                    ts: '2023-10-05T20:30:51.052Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-10-16T22:57:27.362Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hola' }] }],
                    reactions: { ':smile:': { usernames: ['test.test'] } },
                    starred: [],
                    pinned: true,
                    pinnedAt: '2023-10-05T20:59:44.433Z',
                    pinnedBy: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.test' },
                    replies: ['rbAXPnMktTFbNpwtJ'],
                    tcount: 2,
                    tlm: '2023-10-16T22:57:27.158Z',
                  },
                ],
                count: 3,
                offset: 0,
                total: 3,
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  'The required "roomId" query param is missing. [error-roomId-param-not-provided]',
                errorType: 'error-roomId-param-not-provided',
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
            'Incorrect room ID': {
              value: {
                success: false,
                error: 'Not allowed [error-not-allowed]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1ChatGetMessagesRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.getMessages',
  tags: ['Chat'],
  summary: 'Get Multiple Messages From Different Rooms',
  description:
    'Fetches up to 100 messages by ID in a single request. The messages can belong to different rooms. IDs that do not match a visible message are skipped. You must have access to every room containing the requested messages.\n\nThis endpoint replaces the `getMessages` Realtime API method, which was removed in 9.0.0.\n\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |',
  operationId: 'post-api-v1-chat.getMessages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              messageIds: z
                .array(z.string().min(1))
                .min(1)
                .max(100)
                .openapi({
                  description: 'The IDs of the messages to fetch.',
                  example: ['Xq8sLpW3nZr2TmKeA', 'Bv5nTq7RkWz3YpLcD'],
                }),
            })
            .openapi({ required: ['messageIds'] }),
          examples: {
            Example: { value: { messageIds: ['Xq8sLpW3nZr2TmKeA', 'Bv5nTq7RkWz3YpLcD'] } },
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
          schema: z
            .object({
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                messages: [
                  {
                    _id: 'Xq8sLpW3nZr2TmKeA',
                    rid: '6GFJ3tbmHiyHbahmC',
                    msg: 'The release checklist is ready for review.',
                    ts: '2026-09-23T10:05:00.000Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'dana.reyes', name: 'Dana Reyes' },
                    _updatedAt: '2026-09-23T10:05:00.000Z',
                    mentions: [],
                    channels: [],
                  },
                  {
                    _id: 'Bv5nTq7RkWz3YpLcD',
                    rid: 'GENERAL',
                    msg: 'Standup moved to 10:30 today.',
                    ts: '2026-09-22T08:15:00.000Z',
                    u: { _id: 'kP3wQz8LmNvT5rXyB', username: 'sam.okafor', name: 'Sam Okafor' },
                    _updatedAt: '2026-09-22T08:15:00.000Z',
                    mentions: [],
                    channels: [],
                  },
                ],
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
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'messageIds' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden. At least one of the messages belongs to a room you cannot access.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Permission Error': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
    404: {
      description: 'Not Found. None of the IDs match a visible message.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const getApiV1ChatGetStarredMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getStarredMessages',
  tags: ['Chat'],
  summary: 'Get Starred Messages',
  description:
    "Get the <a href='https://docs.rocket.chat/docs/message-actions#star-messages' target='_blank'>starred messages</a> of the authenticated user in a room. \n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 2.2.0        | Added       |",
  operationId: 'get-api-v1-chat.getStarredMessages',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      groupable: z.boolean().exactOptional(),
                      drid: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      dcount: z.int().exactOptional(),
                      dlm: z.string().exactOptional(),
                      starred: z
                        .array(
                          z.object({ _id: z.string().exactOptional() }).openapi({ required: [] }),
                        )
                        .exactOptional(),
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
            'Example 1': {
              value: {
                messages: [
                  {
                    _id: '652dc4dda2f73c7460e18df8',
                    t: 'discussion-created',
                    rid: '6GFJ3tbmHiyHbahmC',
                    ts: '2023-10-16T23:18:53.926Z',
                    msg: 'test discuss',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    groupable: false,
                    drid: '652dc4dda2f73c7460e18df6',
                    _updatedAt: '2023-10-17T12:51:07.826Z',
                    dcount: 3,
                    dlm: '2023-10-16T23:25:58.375Z',
                    starred: [{ _id: '5fRTXMt7DMJbpPJfh' }],
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
                error: 'The required "roomId" query param is missing. [error-invalid-params]',
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
            'Incorrect room ID': {
              value: { success: false, error: 'error-not-allowed', errorType: 'error-forbidden' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1ChatGetThreadMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getThreadMessages',
  tags: ['Chat'],
  summary: 'Get Thread Messages',
  description:
    "Get <a href='https://docs.rocket.chat/docs/threads' target='_blank'>thread</a> messages.\n\nUse `aroundId` to load the replies surrounding a specific message. When you provide `aroundId`, the server calculates the page offset around that message instead of using the requested `offset`, and returns the calculated value in the response. Hidden message-history records are excluded from the returned messages and pagination totals.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 8.8.0        | Added the `aroundId` parameter and excluded hidden message-history records from results and pagination totals |\n| 1.2.0        | Remove `tlm` field which is not supported |\n| 1.1.0        | Update example results - original message in thread is not returned |\n| 1.0.0        | Added       |",
  operationId: 'get-api-v1-chat.getThreadMessages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      tmid: z
        .string()
        .openapi({
          param: {
            name: 'tmid',
            in: 'query',
            description: 'The thread message ID.',
            required: true,
            schema: { type: 'string' },
            example: '7aDSXtjMA3KPLxLjt',
          },
        }),
      aroundId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'aroundId',
            in: 'query',
            description:
              "The ID of the thread's main message or one of its replies. The endpoint returns a page of replies surrounding this message. When you provide this parameter, the server calculates the page offset and ignores the requested `offset` value. The message must belong to the thread specified by `tmid`.",
            required: false,
            schema: { type: 'string' },
            example: 'GfhiiJjcjKFyYMuMY',
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
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      replies: z.array(z.string()).exactOptional(),
                      tcount: z.int().exactOptional(),
                      tlm: z.string().exactOptional(),
                      tmid: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The number of visible replies returned in this response.',
                }),
              offset: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The starting offset of the returned page. When you provide `aroundId`, this is the offset calculated by the server.',
                }),
              total: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The total number of visible replies in the thread. Hidden message-history records are excluded.',
                }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                messages: [
                  {
                    _id: 'gcGai9bRREqokjyPc',
                    rid: 'GENERAL',
                    msg: 'Test',
                    ts: '2019-04-08T13:15:52.017Z',
                    u: { _id: 'p4a8YxvLQEHmiBKTS', username: 'marc.dev', name: 'Marc Dev' },
                    _updatedAt: '2019-04-08T14:40:27.789Z',
                    mentions: [],
                    channels: [],
                    replies: ['p4a8YxvLQEHmiBKTS'],
                    tcount: 5,
                    tlm: '2019-04-08T14:40:27.724Z',
                  },
                  {
                    _id: 'GfhiiJjcjKFyYMuMY',
                    rid: 'GENERAL',
                    tmid: 'gcGai9bRREqokjyPc',
                    msg: 'This is a test!',
                    ts: '2019-04-08T13:20:22.238Z',
                    u: { _id: 'p4a8YxvLQEHmiBKTS', username: 'marc.dev', name: 'Marc Dev' },
                    _updatedAt: '2019-04-08T13:20:22.265Z',
                    mentions: [],
                    channels: [],
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
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
            })
            .openapi({ required: [] }),
          examples: {
            'Missing parameter': {
              value: {
                success: false,
                error: 'The required "tmid" query param is missing. [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
            'Invalid Message': {
              value: {
                success: false,
                error: 'Invalid Message [error-invalid-message]',
                errorType: 'error-invalid-message',
              },
            },
            'Invalid aroundId': {
              value: {
                success: false,
                error:
                  'The provided "aroundId" does not belong to the thread [error-invalid-message]',
                errorType: 'error-invalid-message',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatReadThreadRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.readThread',
  tags: ['Chat'],
  summary: 'Mark Thread as Read',
  description:
    "Marks a single thread as read for the authenticated user and removes it from the unread thread list in the user's subscription.\n\nUse this endpoint when you need to mark one thread as read. The `subscriptions.read` endpoint operates on an entire room and cannot identify a single thread.\n\nThis endpoint replaces the `readThreads` realtime method, which was removed in 9.0.0.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n|8.8.0            | Added       |",
  operationId: 'post-api-v1-chat.readThread',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              tmid: z
                .string()
                .min(1)
                .openapi({ description: "The ID of the thread's main message." }),
            })
            .openapi({ required: ['tmid'] }),
          examples: { Example: { value: { tmid: '7aDSXtjMA3KPLxLjt' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'The request is invalid, or the message or room does not exist.',
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
            'Invalid message': {
              value: {
                success: false,
                error: 'Invalid Message [error-invalid-message]',
                errorType: 'error-invalid-message',
              },
            },
            'Room not found': {
              value: {
                success: false,
                error: 'This room does not exist [error-room-does-not-exist]',
                errorType: 'error-room-does-not-exist',
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
            'Threads disabled': {
              value: {
                success: false,
                error: 'Threads Disabled [error-not-allowed]',
                errorType: 'error-forbidden',
              },
            },
            'Room access denied': {
              value: {
                success: false,
                error: 'Not Allowed [error-not-allowed]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1ChatIgnoreUserRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.ignoreUser',
  tags: ['Chat'],
  summary: 'Ignore User',
  description:
    'Ignore or unignore a user in chat.\n\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n| 0.64.0       | Added       |',
  operationId: 'get-api-v1-chat.ignoreUser',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'query',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description: 'The user ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ignore: z
        .stringbool()
        .openapi({
          param: {
            name: 'ignore',
            in: 'query',
            description: 'If the user is to be ignored or not, default is true.',
            schema: { type: 'boolean' },
            required: true,
          },
        }),
    }),
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
            'Missing RoomId': {
              value: {
                success: false,
                error: 'The required "rid" param is missing. [error-room-id-param-not-provided]',
                errorType: 'error-room-id-param-not-provided',
              },
            },
            'Missing UserId': {
              value: {
                success: false,
                error: 'The required "userId" param is missing. [error-user-id-param-not-provided]',
                errorType: 'error-user-id-param-not-provided',
              },
            },
            'Invalid room or user ID': {
              value: {
                success: false,
                error: 'Invalid subscription [error-invalid-subscription]',
                errorType: 'error-invalid-subscription',
                details: { method: 'ignoreUser' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatPinMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.pinMessage',
  tags: ['Chat'],
  summary: 'Pin Message',
  description:
    "<a href='https://docs.rocket.chat/docs/message-actions#pin-messages' target='_blank'>Pin</a> a chat message to the channel.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n| 0.59.0       | Added       |",
  operationId: 'post-api-v1-chat.pinMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z
                .string()
                .openapi({ description: 'The message ID that you want to pin.' }),
            })
            .openapi({ required: ['messageId'] }),
          examples: { Example: { value: { messageId: '7aDSXtjMA3KPLxLjt' } } },
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
              message: z
                .object({
                  _id: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  groupable: z.boolean().exactOptional(),
                  attachments: z
                    .array(
                      z
                        .object({
                          text: z.string().exactOptional(),
                          author_name: z.string().exactOptional(),
                          author_icon: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          attachments: z.array(z.looseObject({})).exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                message: {
                  _id: '651f23c0a2f73c7460e18d1a',
                  t: 'message_pinned',
                  rid: '6GFJ3tbmHiyHbahmC',
                  ts: '2023-10-05T20:59:44.503Z',
                  msg: '',
                  u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.test', name: 'Testtest' },
                  groupable: false,
                  attachments: [
                    {
                      text: 'hola',
                      author_name: 'roxie',
                      author_icon: '/avatar/roxie',
                      ts: '2023-10-05T20:30:51.052Z',
                      attachments: [],
                    },
                  ],
                  _updatedAt: '2023-10-05T20:59:44.521Z',
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  'The required "messageId" param is missing. [error-messageid-param-not-provided]',
                errorType: 'error-messageid-param-not-provided',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The provided "messageId" does not match any existing message. [error-message-not-found]',
                errorType: 'error-message-not-found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatUnPinMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.unPinMessage',
  tags: ['Chat'],
  summary: 'Unpin a message',
  description:
    'Remove a pinned message from the channel.\n\n### Changelog\n| Version      | Description | \n| -------------| ------------|\n| 0.59.0       | Added       |',
  operationId: 'post-api-v1-chat.unPinMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z
                .string()
                .openapi({ description: 'The message ID you want to to unpin.' }),
            })
            .openapi({ required: ['messageId'] }),
          examples: { Example: { value: { messageId: '7aDSXtjMA3KPLxLjt' } } },
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
            'Missing Parameter': {
              value: {
                success: false,
                error:
                  'The required "messageId" param is missing. [error-messageid-param-not-provided]',
                errorType: 'error-messageid-param-not-provided',
              },
            },
            'Invalid Parameter': {
              value: {
                success: false,
                error:
                  'The provided "messageId" does not match any existing message. [error-message-not-found]',
                errorType: 'error-message-not-found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatPostMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.postMessage',
  tags: ['Chat'],
  summary: 'Post Message',
  description:
    "Send messages to channels or users on your workspace.\n\n**Note**: You can only send the `alias` and `avatar` properties if your user has the `message-impersonate` (**Impersonate other users**) permission. By default, only the `bot` and `app` roles have this permission.\n\nThe server removes markdown trees (`md` and `descriptionMd`) from `attachments` before it saves the message. It does not generate a new `md` for the attachment.\n\nThe request body accepts only the top-level properties listed here. Any other property, such as `blocks` or a message field that only the server sets (for example `pinned`, `u`, or `ts`), fails. To send blocks, use `chat.sendMessage`.\n\n### Change Log\n| Version | Description |\n| ------- |---------------------------------------------------------------------------- |\n| 9.0.0   | Stripped `md` and `descriptionMd` from `attachments` before saving the message. |\n| 6.8.0   | Added custom fields to messages.                                             |\n| 6.2.0   | Rejected request body properties that are not listed.                        |\n| 2.4.0   | Added validation on user's identity                                          |\n| 0.49.0  | The `channel` can now be a room's id.                                        |\n| 0.48.0  | Information about the sent message is now returned.                          |\n| 0.17.0  | Messages aren't always processed as from BOT and urls are parsed by default. |\n| 0.14.0  | Internally using `processWebhookMessage` which enabled more features.        |\n| 0.13.0  | Added                                                                        |",
  operationId: 'post-api-v1-chat.postMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                alias: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The name to display on the message instead of your name. Your username is still displayed.',
                  }),
                avatar: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The URL of an image to display as the message avatar.',
                  }),
                emoji: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'An emoji to display as the message avatar.',
                    example: ':smile:',
                  }),
                roomId: z
                  .xor([z.string(), z.array(z.string())])
                  .openapi({
                    description:
                      'The room ID or an array of room IDs where the message is to be sent. You can also use a room name, with or without the `#` prefix, or a username with the `@` prefix. Cannot be combined with `channel`. With an array, the message is posted to each room, and the response describes only the first one.',
                    example: '#general',
                  }),
                text: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The message text to send.' }),
                parseUrls: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Set to `false` to stop the server from extracting URLs from `text`. The message is saved with no `urls` and no link preview. When the message has `attachments`, the default is `false`, and no link preview is generated even with `true`.',
                  }),
                attachments: z
                  .array(
                    z
                      .object({
                        audio_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "Audio file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'>HTML audio element</a> for information.",
                          }),
                        author_icon: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "Displays a tiny icon to the left of the author's name.",
                          }),
                        author_link: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "Providing this makes the author's name clickable and points to the provided link.",
                          }),
                        author_name: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the author.' }),
                        collapsed: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'Causes the image, audio, and video sections to be displayed as collapsed when set to true.',
                          }),
                        color: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "See <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-color'>background-css</a> for the supported colors.",
                          }),
                        fields: z
                          .array(
                            z
                              .object({
                                short: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Whether this field should be a short field.',
                                  }),
                                title: z
                                  .string()
                                  .openapi({ description: 'The title of this field.' }),
                                value: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The value of this field, displayed underneath the title value.',
                                  }),
                              })
                              .openapi({ required: ['title', 'value'] }),
                          )
                          .exactOptional(),
                        image_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The URL of the image to display in the attachment.',
                          }),
                        message_link: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Only applicable if the `ts` field is provided, as it makes the time clickable to this link.',
                          }),
                        text: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The text to display in the attachment.' }),
                        thumb_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The URL of a thumbnail image to display to the left of the attachment text.',
                          }),
                        title: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Title to display for this attachment, displays under the author.',
                          }),
                        title_link: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Providing this makes the title clickable, pointing to this link.',
                          }),
                        title_link_download: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'When this is true, a download icon appears and clicking this saves the link to file.',
                          }),
                        ts: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Displays the time next to the text portion.' }),
                        video_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "Video file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video'>HTML video element</a> for information.",
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                tmid: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The message ID of the original message to reply to or to create a thread on. Only available with `roomId`.',
                  }),
                customFields: z
                  .looseObject({})
                  .exactOptional()
                  .openapi({
                    description:
                      "Custom fields for the message, such as a priority. Custom fields must be enabled, and the value must match the validation defined in the <a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a> settings.",
                    example: { priority: 'high' },
                  }),
              })
              .openapi({ required: ['roomId'] }),
            z
              .object({
                alias: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The name to display on the message instead of your name. Your username is still displayed.',
                  }),
                avatar: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The URL of an image to display as the message avatar.',
                  }),
                channel: z
                  .xor([z.string(), z.array(z.string())])
                  .openapi({
                    description:
                      'The room ID or an array of room IDs where the message is to be sent. You can also use a room name, with or without the `#` prefix, or a username with the `@` prefix. Cannot be combined with `roomId`. With an array, the message is posted to each room, and the response describes only the first one.',
                    example: '#test-room',
                  }),
                emoji: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'An emoji to display as the message avatar.',
                    example: ':smile:',
                  }),
                text: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The message text to send.' }),
                parseUrls: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Set to `false` to stop the server from extracting URLs from `text`. The message is saved with no `urls` and no link preview. When the message has `attachments`, the default is `false`, and no link preview is generated even with `true`.',
                  }),
                attachments: z
                  .array(
                    z
                      .object({
                        audio_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "Audio file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'>HTML audio element</a> for information.",
                          }),
                        author_icon: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "Displays a tiny icon to the left of the author's name.",
                          }),
                        author_link: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "Providing this makes the author's name clickable and points to the provided link.",
                          }),
                        author_name: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Name of the author.' }),
                        collapsed: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'Causes the image, audio, and video sections to be displayed as collapsed when set to true.',
                          }),
                        color: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "See <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-color'>background-css</a> for the supported colors.",
                          }),
                        fields: z
                          .array(
                            z
                              .object({
                                short: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Whether this field should be a short field.',
                                  }),
                                title: z
                                  .string()
                                  .openapi({ description: 'The title of this field.' }),
                                value: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The value of this field, displayed underneath the title value.',
                                  }),
                              })
                              .openapi({ required: ['title', 'value'] }),
                          )
                          .exactOptional(),
                        image_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The URL of the image to display in the attachment.',
                          }),
                        message_link: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Only applicable if the `ts` field is provided, as it makes the time clickable to this link.',
                          }),
                        text: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The text to display in the attachment.' }),
                        thumb_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The URL of a thumbnail image to display to the left of the attachment text.',
                          }),
                        title: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Title to display for this attachment, displays under the author.',
                          }),
                        title_link: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Providing this makes the title clickable, pointing to this link.',
                          }),
                        title_link_download: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'When this is true, a download icon appears and clicking this saves the link to file.',
                          }),
                        ts: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Displays the time next to the text portion.' }),
                        video_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "Video file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video'>HTML video element</a> for information.",
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                customFields: z
                  .looseObject({})
                  .exactOptional()
                  .openapi({
                    description:
                      "Custom fields for the message, such as a priority. Custom fields must be enabled, and the value must match the validation defined in the <a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a> settings.",
                    example: { priority: 'high' },
                  }),
              })
              .openapi({ required: ['channel'] }),
          ]),
          examples: {
            Example: {
              value: {
                channel: '#general',
                emoji: ':smirk:',
                text: 'Sample message',
                attachments: [
                  {
                    audio_url: 'http://www.w3schools.com/tags/horse.mp3',
                    author_icon: 'https://avatars.githubusercontent.com/u/850391?v=3',
                    author_link: 'https://rocket.chat/',
                    author_name: 'Bradley Hilton',
                    collapsed: false,
                    color: '#ff0000',
                    fields: [
                      { short: true, title: 'Test', value: 'Testing out something or other' },
                      {
                        short: true,
                        title: 'Another Test',
                        value: '[Link](https://google.com/) something and this and that.',
                      },
                    ],
                    image_url: 'http://res.guggy.com/logo_128.png',
                    message_link: 'https://google.com',
                    text: 'Yay for gruggy!',
                    thumb_url: 'http://res.guggy.com/logo_128.png',
                    title: 'Attachment Example',
                    title_link: 'https://youtube.com',
                    title_link_download: true,
                    ts: '2016-12-09T16:53:06.761Z',
                    video_url: 'http://www.w3schools.com/tags/movie.mp4',
                  },
                ],
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
              ts: z.int().exactOptional(),
              channel: z.string().exactOptional(),
              message: z
                .object({
                  alias: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  attachments: z.array(z.looseObject({})).exactOptional(),
                  parseUrls: z.boolean().exactOptional(),
                  groupable: z.boolean().exactOptional(),
                  emoji: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  rid: z.string().exactOptional(),
                  _id: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  md: z.array(z.looseObject({})).exactOptional(),
                  mentions: z.array(z.looseObject({})).exactOptional(),
                  channels: z.array(z.looseObject({})).exactOptional(),
                  urls: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                ts: 1793706003432,
                channel: '#general',
                message: {
                  alias: '',
                  msg: 'This is a test!',
                  attachments: [],
                  parseUrls: true,
                  groupable: false,
                  ts: '2026-11-03T11:40:03.388Z',
                  u: { _id: 'y65tAmHs93aDChMWu', username: 'graywolf336', name: 'Gray Wolf' },
                  rid: 'GENERAL',
                  _id: 'jC9chsFddTvsbFQG7',
                  _updatedAt: '2026-11-03T11:40:03.392Z',
                  md: [
                    {
                      type: 'PARAGRAPH',
                      value: [{ type: 'PLAIN_TEXT', value: 'This is a test!' }],
                    },
                  ],
                  mentions: [],
                  channels: [],
                  urls: [],
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
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Room': {
              value: { success: false, error: '[invalid-channel]', errorType: 'invalid-channel' },
            },
            'Missing Room ID and Channel': {
              value: {
                success: false,
                error:
                  "must have required property 'roomId'\n must have required property 'channel'\n must match exactly one schema in oneOf",
                errorType: 'error-invalid-params',
              },
            },
            'Unsupported Properties': {
              value: {
                success: false,
                error:
                  "must NOT have additional properties\n must have required property 'channel'\n must match exactly one schema in oneOf",
                errorType: 'error-invalid-params',
              },
            },
            'Room ID and Channel Combined': {
              value: {
                success: false,
                error:
                  'must NOT have additional properties\n must NOT have additional properties\n must match exactly one schema in oneOf',
                errorType: 'error-invalid-params',
              },
            },
            'Missing Permission for Alias or Avatar': {
              value: { success: false, error: 'Not enough permission' },
            },
            'Invalid Attachment Field': {
              value: {
                success: false,
                error: 'Invalid attachment field, title and value is required',
              },
            },
            'Custom Fields Not Enabled': {
              value: { success: false, error: 'Custom fields not enabled' },
            },
            'Invalid Custom Fields': { value: { success: false, error: 'Invalid custom fields' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatSearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.search',
  tags: ['Chat'],
  summary: 'Search Message',
  description:
    'Search for messages by room ID and text message. \n\n### Changelog\n| Version      | Description | \n| -------------| ------------|\n| 0.67.0       | Changed limit query parameter to count|\n| 0.60.0       | Added       |\n',
  operationId: 'get-api-v1-chat.search',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      searchText: z
        .string()
        .openapi({
          param: {
            name: 'searchText',
            in: 'query',
            description: 'The text to search for in messages.',
            required: true,
            schema: { type: 'string' },
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
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      score: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                messages: [
                  {
                    _id: 'px9KLW9G2SfD5DKFt',
                    rid: 'GENERAL',
                    msg: 'this is a test',
                    ts: '2018-03-27T14:44:00.549Z',
                    u: { _id: 'RtMDEYc28fQ5aHpf4', username: 'marc.dev', name: 'Marc Dev' },
                    mentions: [],
                    channels: [],
                    _updatedAt: '2018-03-27T14:44:00.550Z',
                    score: 0.5833333333333334,
                  },
                ],
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
            })
            .openapi({ required: [] }),
          examples: {
            'Missing roomId': {
              value: {
                success: false,
                error:
                  'The required "roomId" query param is missing. [error-roomId-param-not-provided]',
                errorType: 'error-roomId-param-not-provided',
              },
            },
            'Missing searchText': {
              value: {
                success: false,
                error:
                  'The required "searchText" query param is missing. [error-searchText-param-not-provided]',
                errorType: 'error-searchText-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatSendMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.sendMessage',
  tags: ['Chat'],
  summary: 'Send Message',
  description:
    "Send a message to one room. Unlike `chat.postMessage`, this endpoint accepts `_id`, `blocks`, and `tshow`, but it can't send to more than one room.\n\n**Note**: You can only send the `alias` and `avatar` properties if your user has the `message-impersonate` (**Impersonate other users**) permission. By default, only the `bot` and `app` roles have this permission.\n\nThe server removes markdown trees (`md` and `descriptionMd`) from `attachments` before it saves the message. It does not generate a new `md` for the attachment.\n\n### Change Log\n| Version | Description                         |\n| ------- | ----------------------------------- |\n| 9.0.0   | Rejected `message` fields that are not part of the request body, such as fields that only the server sets, and `blocks` with an invalid structure. Stripped `md` and `descriptionMd` from `attachments` before saving the message. |\n| 6.8.0   | Added custom fields to messages.    |\n| 6.4.0   | Added the `previewUrls` parameter.  |\n| 2.4.0   | Added validation on user's identity |\n| 0.60.0  | Added                               |",
  operationId: 'post-api-v1-chat.sendMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description:
        "**Some important things to note about the `previewUrls` parameter include:**\n* If you don't send `previewUrls`, all external URLs in the message are previewed.\n* If you list URLs, only those URLs are previewed.\n* If `previewUrls` is empty, no URL is previewed.\n* If the message contains attachments or quotes, no URL is previewed.\n* Internal URLs are never previewed, even if you list them.\n* A message can have at most five external URL previews. If it contains more than five external URLs, no URL is previewed.\n> URLs that include the same text as the <a href='https://docs.rocket.chat/docs/general' target='_blank'>**Site URL**</a> are referred to as Internal URLs.",
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .object({
                  t: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The message type, for example `e2e`. A system message type, such as `uj`, fails.',
                    }),
                  rid: z
                    .string()
                    .openapi({ description: 'The room ID where the message is to be sent.' }),
                  msg: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The message text to send.' }),
                  alias: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name to display on the message instead of your name. Your username is still displayed. Requires the `message-impersonate` permission.',
                    }),
                  emoji: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'An emoji to display as the message avatar.' }),
                  avatar: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The URL of an image to display as the message avatar. Requires the `message-impersonate` permission.',
                    }),
                  attachments: z
                    .array(
                      z
                        .object({
                          audio_url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                "Audio file to attach. See <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio' target='_blank'>HTML audio element</a> for information.",
                            }),
                          author_icon: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: "Displays a tiny icon to the left of the author's name.",
                            }),
                          author_link: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Providing this makes the author name clickable and points to this link.',
                            }),
                          author_name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Name of the author.' }),
                          collapsed: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Causes the image, audio, and video sections to be displayed as collapsed when set to true.',
                            }),
                          color: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                "See <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-color' target='_blank'>background-css</a> for the supported format.",
                            }),
                          fields: z
                            .array(
                              z
                                .object({
                                  short: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Whether this field should be a short field.',
                                    }),
                                  title: z
                                    .string()
                                    .openapi({ description: 'The title of this field.' }),
                                  value: z
                                    .string()
                                    .openapi({
                                      description:
                                        'The value of this field, displayed underneath the title value.',
                                    }),
                                })
                                .openapi({ required: ['title', 'value'] }),
                            )
                            .exactOptional(),
                          image_url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The URL of the image to display in the attachment.',
                            }),
                          message_link: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Only applicable if the `ts` parameter is provided, as it makes the time clickable to this link.',
                            }),
                          text: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The text to display in the attachment.' }),
                          thumb_url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL of a thumbnail image to display to the left of the attachment text.',
                            }),
                          title: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Title to display for this attachment, displays under the author.',
                            }),
                          title_link: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Providing this makes the title clickable, pointing to this link.',
                            }),
                          title_link_download: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'When this is true, a download icon appears and clicking this saves the link to file.',
                            }),
                          ts: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Displays the time next to the text portion.',
                            }),
                          video_url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                "Video file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video' target='_blank'>HTML video element</a> for information.",
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'An array of attachment objects with the following properties.',
                    }),
                  tmid: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The ID of the message to reply to in a thread.' }),
                  tshow: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set to `true` to also show the thread reply in the room. Requires `tmid`.',
                    }),
                  blocks: z
                    .array(
                      z
                        .object({
                          type: z.string().exactOptional(),
                          text: z
                            .object({
                              type: z.string().exactOptional(),
                              text: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          fields: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  text: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        "An array of UI Kit blocks to display in the message. See the **Message with Blocks** example and the <a href='https://developer.rocket.chat/docs/blocks' target='_blank'>Apps-Engine UI Blocks documentation</a>.\n\nThe request fails if:\n* `blocks` is not an array of objects.\n* The `elements` of an `actions` or `context` block is missing or is not an array of objects.\n* The `fields` of a `section` block is not an array of objects.\n* An `input` block has no `element` object.\n* A `linear_scale` element has a non-numeric `minValue` or `maxValue`, or more than 100 points.\n* An `appId` contains characters other than letters, digits, `-`, and `_`.\n* A block is nested more than 10 levels deep.\n\nBlocks with an unknown `type` or an unexpected `text` shape are saved as sent.",
                    }),
                  customFields: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      description:
                        "Custom fields for the message, such as a priority. Custom fields must be enabled, and the value must match the validation defined in the <a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a> settings.",
                      example: { priority: 'high' },
                    }),
                  _id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "The ID to give the new message. It must not match the ID of an existing message. If you don't send it, the server generates one.",
                      example: 'Kx7Pq2LmZr4TnB9vW',
                    }),
                  location: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      description:
                        "A GeoJSON geometry to attach to the message, such as a `Point` with `coordinates` as `[longitude, latitude]`. Invalid GeoJSON, or a longitude or latitude out of range, fails. The server doesn't check the coordinate order, so swapped coordinates that are still in range are saved without an error. The web client shows a `Point` as a **Shared location** link to a map.",
                      example: { type: 'Point', coordinates: [-46.6333, -23.5505] },
                    }),
                  groupable: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "Set to `false` to show the message with its own header instead of grouping it with the sender's previous message.",
                      example: false,
                    }),
                  parseUrls: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set to `false` to stop the server from extracting URLs from the message text. The message is saved with no `urls` entries and no link preview. Links in the message markdown (`md`) are still parsed.',
                      example: true,
                    }),
                  text: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'A separate text field that the server saves as sent. It is not an alias of `msg`: the server does not generate `md` from it, and the web client does not display it. Use `msg` for the message text.',
                      example: 'Hello from the API',
                    }),
                  e2e: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The encryption state of an end-to-end encrypted message: `pending` or `done`.',
                      example: 'pending',
                    }),
                  e2eMentions: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Mentions in an end-to-end encrypted message, as `e2eUserMentions` and `e2eChannelMentions` arrays.',
                      example: { e2eUserMentions: ['@john.doe'], e2eChannelMentions: [] },
                    }),
                  content: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      description:
                        'The encrypted content of an end-to-end encrypted message. Set `algorithm` to `rc.v1.aes-sha2` or `rc.v2.aes-sha2`, and `ciphertext` to the encrypted text. With `rc.v2.aes-sha2`, also send `iv` and `kid`. The server saves the object as sent and does not validate its properties.',
                      example: {
                        algorithm: 'rc.v2.aes-sha2',
                        ciphertext: 'kTnW8xZq0r2YbPpL3sVd',
                        iv: 'c2FtcGxlLWl2LXZhbHVl',
                        kid: 'a1b2c3d4-kid',
                      },
                    }),
                })
                .openapi({
                  description:
                    'Accepts only the properties listed here. Any other property, such as an unknown property or one that only the server sets (for example `u`, `ts`, `md`, `urls`, or `pinned`), fails.',
                  required: ['rid'],
                }),
              previewUrls: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The URLs in `msg` to preview.' }),
            })
            .openapi({ required: ['message'] }),
          examples: {
            'Message with Attachments': {
              value: {
                message: {
                  rid: 'Xnb2kLD2Pnhdwe3RH',
                  msg: 'Sample message',
                  emoji: ':smirk:',
                  attachments: [
                    {
                      color: '#ff0000',
                      text: 'Yay for gruggy!',
                      ts: '2016-12-09T16:53:06.761Z',
                      thumb_url: 'http://res.guggy.com/logo_128.png',
                      message_link: 'https://google.com',
                      collapsed: false,
                      author_name: 'Bradley Hilton',
                      author_link: 'https://rocket.chat/',
                      author_icon: 'https://avatars.githubusercontent.com/u/850391?v=3',
                      title: 'Attachment Example',
                      title_link: 'https://youtube.com',
                      title_link_download: true,
                      image_url: 'http://res.guggy.com/logo_128.png',
                      audio_url: 'http://www.w3schools.com/tags/horse.mp3',
                      video_url: 'http://www.w3schools.com/tags/movie.mp4',
                      fields: [
                        { short: true, title: 'Test', value: 'Testing out something or other' },
                        {
                          short: true,
                          title: 'Another Test',
                          value: '[Link](https://google.com/) something and this and that.',
                        },
                      ],
                    },
                  ],
                },
              },
            },
            'Message with Blocks': {
              value: {
                message: {
                  rid: 'GENERAL',
                  blocks: [
                    {
                      type: 'section',
                      text: { type: 'mrkdwn', text: '*Text example* Normal message `code` here' },
                    },
                    { type: 'divider' },
                    {
                      type: 'section',
                      fields: [
                        { type: 'mrkdwn', text: '*Field 1*' },
                        { type: 'mrkdwn', text: 'Field 2' },
                      ],
                    },
                  ],
                },
              },
            },
            'Message with PreviewURLs': {
              value: {
                message: {
                  rid: '64f0f82c2c26843a68c1f7ba',
                  msg: 'This is a list of links! https://google.com https://hola.org/ https://www.usepayday.com/ https://www.getbumpa.com/ https://www.atlassian.com/software/jira http://localhost:3000/',
                },
                previewUrls: [
                  'https://google.com',
                  'http://localhost:3000/',
                  'https://hola.org/',
                  'https://www.usepayday.com/',
                  'https://www.getbumpa.com/',
                  'https://www.atlassian.com/software/jira',
                ],
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
              message: z
                .object({
                  rid: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  md: z.array(z.looseObject({})).exactOptional(),
                  mentions: z.array(z.looseObject({})).exactOptional(),
                  channels: z.array(z.looseObject({})).exactOptional(),
                  urls: z.array(z.looseObject({})).exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  _id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                message: {
                  rid: 'GENERAL',
                  msg: 'Hello from the API',
                  ts: '2026-11-03T13:57:54.003Z',
                  u: { _id: 'i5FdM4ssFgAcQP62k', username: 'rocket.cat', name: 'Rocket.Cat' },
                  _id: 'dy8Qx3XXH9wKR9AMP',
                  _updatedAt: '2026-11-03T13:57:54.056Z',
                  md: [
                    {
                      type: 'PARAGRAPH',
                      value: [{ type: 'PLAIN_TEXT', value: 'Hello from the API' }],
                    },
                  ],
                  mentions: [],
                  channels: [],
                  urls: [],
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
            'Missing Message': {
              value: {
                success: false,
                error: "must have required property 'message'",
                errorType: 'error-invalid-params',
              },
            },
            'Thread Show Without Thread ID': {
              value: {
                success: false,
                error: 'tshow provided but missing tmid [invalid-params]',
                errorType: 'invalid-params',
                details: { method: 'sendMessage' },
              },
            },
            'Missing Room ID': {
              value: {
                success: false,
                error: "The 'rid' property on the message object is missing.",
              },
            },
            'Invalid Room': { value: { success: false, error: 'error-invalid-room' } },
            'Unsupported Message Fields': {
              value: {
                success: false,
                error: "The message fields cannot be set through 'chat.sendMessage': ts, u",
              },
            },
            'System Message Type': {
              value: {
                success: false,
                error: "Cannot send system messages using 'chat.sendMessage'",
              },
            },
            'Invalid Blocks': {
              value: { success: false, error: 'must be array', errorType: 'error-invalid-params' },
            },
            'Invalid Block Item': {
              value: { success: false, error: 'must be object', errorType: 'error-invalid-params' },
            },
            'Missing Input Element': {
              value: {
                success: false,
                error: "must have required property 'element'",
                errorType: 'error-invalid-params',
              },
            },
            'Linear Scale Not Numeric': {
              value: {
                success: false,
                error:
                  'Invalid blocks: blocks[0].elements[0] must have numeric minValue and maxValue',
              },
            },
            'Linear Scale Too Large': {
              value: {
                success: false,
                error: 'Invalid blocks: blocks[0].elements[0] cannot have more than 100 points',
              },
            },
            'Invalid App ID': {
              value: {
                success: false,
                error:
                  'Invalid blocks: blocks[0].appId must contain only letters, digits, "-" and "_"',
              },
            },
            'Blocks Nested Too Deeply': {
              value: {
                success: false,
                error: 'Invalid blocks: blocks[0].d.a.a.a.a.a.a.a.a.a.a is nested too deeply',
              },
            },
            'Message Not an Object': {
              value: { success: false, error: 'must be object', errorType: 'error-invalid-params' },
            },
            'Missing Permission for Alias or Avatar': {
              value: { success: false, error: 'Not enough permission' },
            },
            'Invalid Attachment Field': {
              value: {
                success: false,
                error: 'Invalid attachment field, title and value is required',
              },
            },
            'Custom Fields Not Enabled': {
              value: { success: false, error: 'Custom fields not enabled' },
            },
            'Invalid Custom Fields': { value: { success: false, error: 'Invalid custom fields' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatStarMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.starMessage',
  tags: ['Chat'],
  summary: 'Star Message',
  description:
    "<a href='https://docs.rocket.chat/docs/message-actions#star-messages' target='_blank'>Star</a> a message.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n| 0.59.0       | Added       |",
  operationId: 'post-api-v1-chat.starMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ messageId: z.string().openapi({ description: 'The message ID to star.' }) })
            .openapi({ required: ['messageId'] }),
          examples: { Example: { value: { messageId: '7aDSXtjMA3KPLxLjt' } } },
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
                error:
                  'The required "messageId" param is required. [error-messageid-param-not-provided]',
                errorType: 'error-messageid-param-not-provided',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The provided "messageId" does not match any existing message. [error-message-not-found]',
                errorType: 'error-message-not-found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChatUnStarMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/chat.unStarMessage',
  tags: ['Chat'],
  summary: 'Unstar Message',
  description:
    'Unstar a message.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 0.59.0           | Added       |',
  operationId: 'post-api-v1-chat.unStarMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ messageId: z.string().openapi({ description: 'The message ID to unstar.' }) })
            .openapi({ required: ['messageId'] }),
          examples: { Example: { value: { messageId: '7aDSXtjMA3KPLxLjt' } } },
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
                error:
                  'The required "messageId" param is required. [error-messageid-param-not-provided]',
                errorType: 'error-messageid-param-not-provided',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The provided "messageId" does not match any existing message. [error-message-not-found]',
                errorType: 'error-message-not-found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatSyncThreadsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.syncThreadsList',
  tags: ['Chat'],
  summary: 'Sync Thread List',
  description:
    'List the threads of a room along with any data updates from a specified date.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 1.0.0        | Added       |',
  operationId: 'get-api-v1-chat.syncThreadsList',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      sort: SortParamsSchema,
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'query',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string', example: 'J8Sqi5zPw62WgE4Md' },
          },
          example: 'J8Sqi5zPw62WgE4Md',
        }),
      updatedSince: z
        .string()
        .openapi({
          param: {
            name: 'updatedSince',
            in: 'query',
            description:
              'Date as an ISO string. When you provide the `updatedSince` query parameter, then the `update` and `remove` parameters in the response will contain only those updated and removed since this date and time.',
            schema: { type: 'string', example: '2026-01-01T00:00:00Z' },
            required: true,
          },
          example: '2026-01-01T00:00:00Z',
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
              threads: z
                .object({
                  update: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          _updatedAt: z.string().exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                          replies: z.array(z.string()).exactOptional(),
                          tcount: z.int().exactOptional(),
                          tlm: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  remove: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          _updatedAt: z.string().exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                          replies: z.array(z.string()).exactOptional(),
                          tcount: z.int().exactOptional(),
                          tlm: z.string().exactOptional(),
                          _deletedAt: z.string().exactOptional(),
                          __collection__: z.string().exactOptional(),
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
            Example: {
              value: {
                threads: {
                  update: [
                    {
                      _id: 'J8Sqi5zPw62WgE4Md',
                      rid: 'GENERAL',
                      msg: 'test1',
                      ts: '2019-04-16T18:16:00.614Z',
                      u: {
                        _id: 'rocketchat.internal.admin.test',
                        username: 'rocketchat.internal.admin.test',
                        name: 'RocketChat Internal Admin Test',
                      },
                      _updatedAt: '2019-04-16T18:17:09.749Z',
                      mentions: [],
                      channels: [],
                      replies: ['rocketchat.internal.admin.test'],
                      tcount: 1,
                      tlm: '2019-04-16T18:17:09.672Z',
                    },
                    {
                      _id: 'hbs2ZAjHH2JXrP7C7',
                      rid: 'GENERAL',
                      msg: 'another test',
                      ts: '2019-04-16T18:13:20.403Z',
                      u: {
                        _id: 'rocketchat.internal.admin.test',
                        username: 'rocketchat.internal.admin.test',
                        name: 'RocketChat Internal Admin Test',
                      },
                      _updatedAt: '2019-04-16T18:30:46.722Z',
                      mentions: [],
                      channels: [],
                      replies: ['rocketchat.internal.admin.test'],
                      tcount: 1,
                      tlm: '2019-04-16T18:30:46.615Z',
                    },
                  ],
                  remove: [
                    {
                      _id: 'GXwCSs4cx6456WBJk',
                      rid: 'GENERAL',
                      msg: 'test',
                      ts: '2019-04-16T18:13:39.217Z',
                      u: {
                        _id: 'rocketchat.internal.admin.test',
                        username: 'rocketchat.internal.admin.test',
                        name: 'RocketChat Internal Admin Test',
                      },
                      _updatedAt: '2019-04-16T18:16:00.696Z',
                      mentions: [],
                      channels: [],
                      replies: ['rocketchat.internal.admin.test'],
                      tcount: 1,
                      tlm: '2019-04-16T18:16:00.614Z',
                      _deletedAt: '2019-04-16T18:16:13.508Z',
                      __collection__: 'message',
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
            'Missing rid': {
              value: {
                success: false,
                error:
                  'The required "rid" query param is missing. [error-room-id-param-not-provided]',
                errorType: 'error-room-id-param-not-provided',
              },
            },
            'Missing updatedSince': {
              value: {
                success: false,
                error:
                  'The required param "updatedSince" is missing. [error-updatedSince-param-invalid]',
                errorType: 'error-updatedSince-param-invalid',
              },
            },
            'Invalid Date': {
              value: {
                success: false,
                error:
                  'The "updatedSince" query parameter must be a valid date. [error-updatedSince-param-invalid]',
                errorType: 'error-updatedSince-param-invalid',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatSyncThreadMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.syncThreadMessages',
  tags: ['Chat'],
  summary: 'Sync Thread Messages',
  description:
    'List the messages in a thread along with any data updates from a specified date.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 1.0.0        | Added       |',
  operationId: 'get-api-v1-chat.syncThreadMessages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      updatedSince: z
        .string()
        .openapi({
          param: {
            name: 'updatedSince',
            in: 'query',
            description:
              'Date as an ISO string. When you provide the `updatedSince` query parameter, the `update` and `remove` parameters in the response will contain only those updated and removed since this date and time.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tmid: z
        .string()
        .openapi({
          param: {
            name: 'tmid',
            in: 'query',
            description: "Thread's message ID.",
            required: true,
            schema: { type: 'string' },
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
              messages: z
                .object({
                  update: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          tmid: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          _updatedAt: z.string().exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  remove: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                messages: {
                  update: [
                    {
                      _id: '8BciMkvotHLpmpDEG',
                      rid: 'GENERAL',
                      tmid: 'hbs2ZAjHH2JXrP7C7',
                      msg: 'test',
                      ts: '2019-04-16T18:30:46.615Z',
                      u: {
                        _id: 'rocketchat.internal.admin.test',
                        username: 'rocketchat.internal.admin.test',
                        name: 'RocketChat Internal Admin Test',
                      },
                      _updatedAt: '2019-04-16T18:30:46.669Z',
                      mentions: [],
                      channels: [],
                    },
                  ],
                  remove: [],
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'The required "tmid" query param is missing. [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The required param "updatedSince" is missing. [error-updatedSince-param-invalid]',
                errorType: 'error-updatedSince-param-invalid',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatSyncMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.syncMessages',
  tags: ['Chat'],
  summary: 'Sync Messages',
  description:
    'List updated and deleted messages in a room. Use `lastUpdate` to retrieve changes made after a specific date. To limit the results to messages originally sent at or after a specific date, use `fromTs` together with `lastUpdate`.\n\nYou can also paginate updated or deleted messages with the `next`, `previous`, and `type` parameters. This endpoint replaces the `loadMissedMessages` method, which was removed in 9.0.0.\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n| 8.8.0        | Added the `fromTs` parameter. |\n| 1.0.0        | Added       |',
  operationId: 'get-api-v1-chat.syncMessages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      count: CountParamsSchema,
      lastUpdate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'lastUpdate',
            in: 'query',
            description:
              'The date and time after which message updates and deletions should be returned.',
            schema: { type: 'string', format: 'date-time' },
            example: '2019-04-16T18:30:46.669Z',
            required: false,
          },
        }),
      fromTs: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'fromTs',
            in: 'query',
            description:
              'The inclusive date and time boundary for the original message timestamp. Only messages originally sent at or after this date are considered. You must use this parameter together with `lastUpdate`.',
            schema: { type: 'string', format: 'date-time' },
            example: '2019-04-01T00:00:00.000Z',
            required: false,
          },
        }),
      next: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next',
            in: 'query',
            description:
              'The cursor returned in `result.cursor.next` to retrieve the next page. Use either `next` or `previous`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      previous: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'previous',
            in: 'query',
            description:
              'The cursor returned in `result.cursor.previous` to retrieve the previous page. Use either `next` or `previous`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['UPDATED', 'DELETED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'The message change type to retrieve when using cursor pagination. This parameter is required with `next` or `previous`.',
            schema: { type: 'string', enum: ['UPDATED', 'DELETED'] },
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
              result: z
                .object({
                  updated: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          msg: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          _updatedAt: z.string().exactOptional(),
                          alias: z.string().exactOptional(),
                          token: z.string().exactOptional(),
                          unread: z.boolean().exactOptional(),
                          urls: z.array(z.looseObject({})).exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                          md: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  value: z
                                    .array(
                                      z
                                        .object({
                                          type: z.string().exactOptional(),
                                          value: z.string().exactOptional(),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          t: z.string().exactOptional(),
                          groupable: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  deleted: z
                    .array(
                      z
                        .object({ _id: z.string(), _deletedAt: z.iso.datetime({ offset: true }) })
                        .openapi({ required: ['_id', '_deletedAt'] }),
                    )
                    .exactOptional(),
                  cursor: z
                    .object({
                      next: z.string().nullable().exactOptional(),
                      previous: z.string().nullable().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                result: {
                  updated: [
                    {
                      _id: 'ak3WdaLbf4P7ZW3wQ',
                      rid: '5qW6ssMFyzWjJev69',
                      u: {
                        _id: 'FWfHnJmcudrCagGDX',
                        username: '555192857993',
                        name: '555192857993',
                      },
                      msg: 'teste',
                      ts: '2021-09-24T19:19:47.911Z',
                      _updatedAt: '2021-09-24T19:19:48.048Z',
                      alias: 'mauricio pretto',
                      token: 'do554ryecscmfrrxyxpvm',
                      unread: true,
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'teste' }] }],
                    },
                    {
                      _id: '2ttrNPABcCKbsbEtB',
                      t: 'livechat-started',
                      msg: '',
                      groupable: false,
                      ts: '2021-09-24T19:19:46.523Z',
                      u: {
                        _id: 'FWfHnJmcudrCagGDX',
                        username: '555192857993',
                        name: '555192857993',
                      },
                      rid: '5qW6ssMFyzWjJev69',
                      unread: true,
                      _updatedAt: '2021-09-24T19:19:46.691Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                    },
                  ],
                  deleted: [],
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'The required "roomId" query param is missing [error-param-required]',
                errorType: 'error-param-required',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The "type" or "lastUpdate" parameters must be provided [error-param-required]',
                errorType: 'error-param-required',
              },
            },
            'Example 3': {
              value: {
                success: false,
                error:
                  'The "lastUpdate" query parameter must be a valid date [error-lastUpdate-param-invalid]',
                errorType: 'error-lastUpdate-param-invalid',
              },
            },
            'Example 4': {
              value: {
                success: false,
                error:
                  'The "fromTs" parameter can only be used together with "lastUpdate" [error-fromTs-requires-lastUpdate]',
                errorType: 'error-fromTs-requires-lastUpdate',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChatGetURLPreviewRoute = createRoute({
  method: 'get',
  path: '/api/v1/chat.getURLPreview',
  tags: ['Chat'],
  summary: 'Get URL Preview',
  description:
    'Use this endpoint to get a URL preview that can be used in the send and update message endpoints.',
  operationId: 'get-api-v1-chat.getURLPreview',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'Xnb2kLD2Pnhdwe3RH' },
            in: 'query',
            name: 'roomId',
            description: 'Enter the room ID where you want to send or update the message.',
            required: true,
          },
          example: 'Xnb2kLD2Pnhdwe3RH',
        }),
      url: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'http://www.w3schools.com/tags/movie.mp4' },
            in: 'query',
            name: 'url',
            description: 'Enter the URL that you want to preview.',
            required: true,
          },
          example: 'http://www.w3schools.com/tags/movie.mp4',
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
              urlPreview: z
                .object({
                  url: z.string().exactOptional(),
                  meta: z.looseObject({}).exactOptional(),
                  headers: z
                    .object({
                      contentLength: z.string().exactOptional(),
                      contentType: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ignoreParse: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                urlPreview: {
                  url: 'http://www.w3schools.com/tags/movie.mp4',
                  meta: {},
                  headers: { contentLength: '318465', contentType: 'video/mp4' },
                  ignoreParse: true,
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'url' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'roomId' [error-invalid-params]",
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

export const postApiV1ImBlockUserRoute = createRoute({
  method: 'post',
  path: '/api/v1/im.blockUser',
  tags: ['Direct Messages'],
  summary: 'Block User in DM',
  description:
    'Blocks or unblocks the other user in a direct message room. This endpoint replaces the `blockUser` and `unblockUser` DDP methods, which were removed in 9.0.0.\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n| 8.6.0        | Added       |',
  operationId: 'post-api-v1-im.blockUser',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The direct message room ID.' }),
              block: z
                .boolean()
                .openapi({
                  description: 'Set to `true` to block the other user, or `false` to unblock them.',
                }),
            })
            .openapi({ required: ['roomId', 'block'] }),
          examples: {
            'Block User': { value: { roomId: 'ByehQjC44FwMeiLbX', block: true } },
            'Unblock User': { value: { roomId: 'ByehQjC44FwMeiLbX', block: false } },
          },
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
            'Invalid room': {
              value: { success: false, error: '[invalid-channel]', errorType: 'invalid-channel' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1DmCloseRoute = createRoute({
  method: 'post',
  path: '/api/v1/dm.close',
  tags: ['Direct Messages'],
  summary: 'Close DM',
  description:
    "Removes the direct message from the user's list of direct messages.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n| 0.48.0       | Added       |",
  operationId: 'post-api-v1-im.close',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ roomId: z.string().openapi({ description: 'The room ID.' }) })
            .openapi({ required: ['roomId'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMeiLbX' } } },
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
            'RoomId is required': {
              value: {
                success: false,
                error: 'Body param "roomId" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
              },
            },
            'Invalid room ID or user is not member of room': {
              value: { success: false, error: 'The user is not subscribed to the room' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1DmCountersRoute = createRoute({
  method: 'get',
  path: '/api/v1/dm.counters',
  tags: ['Direct Messages'],
  summary: 'Get DM Counters',
  description:
    'Gets counters and information of direct messages. Permission required: `view-room-administration`.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 0.65.0           | Added       |',
  operationId: 'get-api-v1-im.counters',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The DM room ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description: 'The user ID to provide counters for.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK\n\n**Note**\n- `joined`: Boolean flag that shows that user has joined the room or not.\n- `members`: Count of current room members.\n- `unreads`: Count of unread messages for specified user (calling user or provided user ID).\n- `unreadsFrom`: Start date-time of unread interval for specified user.\n- `msgs`: Count of messages in the room.\n- `latest`: End date-time of unread interval for specified user (or date-time of last posted message).\n- `userMentions` - Count of user mentions in messages.',
      content: {
        'application/json': {
          schema: z
            .object({
              joined: z.boolean().exactOptional(),
              members: z.int().exactOptional(),
              unreads: z.int().exactOptional(),
              unreadsFrom: z.string().exactOptional(),
              msgs: z.int().exactOptional(),
              latest: z.string().exactOptional(),
              userMentions: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                joined: true,
                members: 2,
                unreads: 4,
                unreadsFrom: '2023-10-30T20:30:47.975Z',
                msgs: 10,
                latest: '2023-10-30T20:37:17.160Z',
                userMentions: 0,
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'Query param "roomId" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1DmCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/dm.create',
  tags: ['Direct Messages'],
  summary: 'Create DM',
  description:
    'Create a direct message session with another user or more than one user.\n\nThe username must belong to a user in the workspace, unless it is a federated username and federation is enabled. \n\n### Changelog\n| Version | Description              |\n| ------- | ------------------------ |\n| 9.0.0   | Required the `create-d-other-users` permission instead of `view-room-administration` to use `excludeSelf`. Limited the response `room` object to `_id`, `rid`, `t`, and `usernames`. Rejected usernames that do not exist instead of creating the room without them. |\n| 3.18.0  | Added excludeSelf option |\n| 3.1.0   | Added usernames fields   |\n| 0.59.0  | Added                    |',
  operationId: 'post-api-v1-dm.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                username: z
                  .string()
                  .openapi({
                    description: 'The username of the user to open a direct message session.',
                    example: 'kim.dok',
                  }),
                excludeSelf: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Creates the direct message session excluding the current authenticated user. Requires the `create-d-other-users` permission. Without it, the request fails with `error-not-allowed`. With a single `username`, the request fails with `error-invalid-user`. Use `usernames` with at least two usernames instead.',
                    example: false,
                  }),
              })
              .openapi({ required: ['username'] }),
            z
              .object({
                usernames: z
                  .string()
                  .openapi({
                    description:
                      'Comma-separated list of usernames to open a multiple direct message session.',
                    example: 'kim.dok,g1',
                  }),
                excludeSelf: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Creates the direct message session excluding the current authenticated user. Requires the `create-d-other-users` permission. Without it, the request fails with `error-not-allowed`. Include at least two usernames. A single username, in `username` or `usernames`, fails with `error-invalid-user`. An empty `usernames` value fails with `invalid username`.',
                    example: true,
                  }),
              })
              .openapi({ required: ['usernames'] }),
          ]),
          examples: {
            Example: { value: { username: 'kim.dok' } },
            'Exclude Self': { value: { usernames: 'kim.dok,g1', excludeSelf: true } },
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
              room: z
                .object({
                  _id: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                room: {
                  _id: '6a1f0c9e2b7d4e8f9a3c5b21',
                  t: 'd',
                  rid: '6a1f0c9e2b7d4e8f9a3c5b21',
                  usernames: ['g1', 'rocket.cat'],
                },
                success: true,
              },
            },
            'Exclude Self': {
              value: {
                room: {
                  _id: '64f1a2b3c4d5e6f708192a3b',
                  rid: '64f1a2b3c4d5e6f708192a3b',
                  t: 'd',
                  usernames: ['kim.dok', 'g1'],
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
            'Empty Usernames': { value: { success: false, error: 'invalid username' } },
            'Missing parameter': {
              value: {
                success: false,
                error:
                  "must have required property 'usernames'\n must have required property 'username'\n must match exactly one schema in oneOf",
                errorType: 'error-invalid-params',
              },
            },
            'Invalid User': {
              value: {
                success: false,
                error: 'Invalid user [error-invalid-user]',
                errorType: 'error-invalid-user',
                details: { method: 'createDirectMessage' },
              },
            },
            'Permission Error': {
              value: {
                success: false,
                error: 'Not allowed [error-not-allowed]',
                errorType: 'error-not-allowed',
                details: { method: 'createDirectMessage' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1DmDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/dm.delete',
  tags: ['Direct Messages'],
  summary: 'Delete DM',
  description:
    'Delete a DM. Permission required: `view-room-administration`.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n|3.18.0        | Added       |',
  operationId: 'post-api-v1-im.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                roomId: z
                  .string()
                  .openapi({
                    description:
                      "The room ID of the DM. This parameter is required if you don't enter the `username` parameter.",
                  }),
              })
              .openapi({ required: ['roomId'] }),
            z
              .object({
                username: z
                  .string()
                  .openapi({ description: 'The username of the user in the DM.' }),
              })
              .openapi({ required: ['username'] }),
          ]),
          examples: { Example: { value: { roomId: 'hdy9972092873h8s7s0' } } },
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
                error:
                  "must have required property 'roomId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Invalid room ID or username': {
              value: { success: false, error: '[invalid-channel]', errorType: 'invalid-channel' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1DmFilesRoute = createRoute({
  method: 'get',
  path: '/api/v1/dm.files',
  tags: ['Direct Messages'],
  summary: 'Get DM Files',
  description:
    'Get all files in a DM. \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n|0.64.0            | Change `userId` to `user` object in response|\n|0.59.0            | Added       |',
  operationId: 'get-api-v1-im.files',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      typeGroup: FilterTypeGroupParamsSchema,
      name: FilterNameParamsSchema,
      roomId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The roomId of the DM. It is required if `username` is not provided.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username: OptionalUsernameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              files: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      size: z.int().exactOptional(),
                      type: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      userId: z.string().exactOptional(),
                      store: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      complete: z.boolean().exactOptional(),
                      etag: z.string().exactOptional(),
                      path: z.string().exactOptional(),
                      progress: z.int().exactOptional(),
                      token: z.string().exactOptional(),
                      uploadedAt: z.string().exactOptional(),
                      uploading: z.boolean().exactOptional(),
                      url: z.string().exactOptional(),
                      typeGroup: z.string().exactOptional(),
                      user: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
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
            'Example 1': {
              value: {
                files: [
                  {
                    _id: '6542e355a2f73c7460e18ef6',
                    name: '2023-11-01_21-13-38.snagx',
                    size: 652277,
                    type: 'application/octet-stream',
                    rid: '5fRTXMt7DMJbpPJfhgzvcvpov9G4TxbGFS',
                    userId: '5fRTXMt7DMJbpPJfh',
                    store: 'GridFS:Uploads',
                    _updatedAt: '2023-11-01T23:46:29.216Z',
                    complete: true,
                    etag: '7qDc9jBurptfmrAxr',
                    path: '/file-upload/6542e355a2f73c7460e18ef6/2023-11-01_21-13-38.snagx',
                    progress: 1,
                    token: 'eAD959d9A8',
                    uploadedAt: '2023-11-01T23:46:29.196Z',
                    uploading: false,
                    url: 'http://localhost:3000/file-upload/6542e355a2f73c7460e18ef6/2023-11-01_21-13-38.snagx',
                    typeGroup: 'application',
                    user: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.john', name: 'Test John' },
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

export const getApiV1DmHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/dm.history',
  tags: ['Direct Messages'],
  summary: 'DM History',
  description:
    'Retrieves the message history from a direct message.\n### Change Log\n| Version | Description             |\n| ------- | ----------------------- |\n| 0.75.0  | Added `offset` property |\n| 0.48.0  | Added                   |',
  operationId: 'get-api-v1-im.history',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      latest: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'latest',
            in: 'query',
            description: 'The end of time range of messages to retrieve.',
            schema: { type: 'string' },
            example: '2016-09-30T13:42:25.304Z',
            required: false,
          },
        }),
      oldest: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'oldest',
            in: 'query',
            description: 'The start of the time range of messages to retrieve.',
            schema: { type: 'string' },
            example: '2016-05-30T13:42:25.304Z',
            required: false,
          },
        }),
      inclusive: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'inclusive',
            in: 'query',
            description:
              'Whether messages which land on the `latest` and `oldest` dates should be included.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showThreadMessages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'showThreadMessages',
            in: 'query',
            description: 'Choose to display thread message in the message history.',
            schema: { type: 'boolean' },
            example: 'true',
            required: false,
          },
        }),
      unreads: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'unreads',
            in: 'query',
            description: 'Whether the number of unread messages should be included.',
            schema: { type: 'boolean' },
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
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      groupable: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                messages: [
                  {
                    _id: 'AkzpHAvZpdnuchw2a',
                    rid: 'ByehQjC44FwMeiLbX',
                    msg: 'hi',
                    ts: '2016-12-09T12:50:51.555Z',
                    u: { _id: 'y65tAmHs93aDChMWu', username: 'testing' },
                    _updatedAt: '2016-12-09T12:50:51.562Z',
                  },
                  {
                    _id: 'vkLMxcctR4MuTxreF',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2016-12-08T15:41:37.730Z',
                    msg: 'testing2',
                    u: { _id: 'bRtgdhzM6PD9F8pSx', username: 'testing2' },
                    groupable: false,
                    _updatedAt: '2016-12-08T16:03:25.235Z',
                  },
                  {
                    _id: 'bfRW658nEyEBg75rc',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2016-12-07T15:47:49.099Z',
                    msg: 'testing',
                    u: { _id: 'nSYqWzZ4GsKTX4dyK', username: 'testing1' },
                    groupable: false,
                    _updatedAt: '2016-12-07T15:47:49.099Z',
                  },
                  {
                    _id: 'pbuFiGadhRZTKouhB',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2016-12-06T17:57:38.635Z',
                    msg: 'testing',
                    u: { _id: 'y65tAmHs93aDChMWu', username: 'testing' },
                    groupable: false,
                    _updatedAt: '2016-12-06T17:57:38.635Z',
                  },
                ],
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'roomId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: { success: false, error: '[invalid-channel]', errorType: 'invalid-channel' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1DmListEveryoneRoute = createRoute({
  method: 'get',
  path: '/api/v1/dm.list.everyone',
  tags: ['Direct Messages'],
  summary: 'List All DMs',
  description:
    'List all DMs in the workspace.  \n\nPermission required:`view-room-administration`.\n\n### Changelog\n| Version      | Description | \n| ------------ | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n|0.49.0        | Added       |',
  operationId: 'get-api-v1-im.list.everyone',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ims: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      usernames: z.array(z.string()).exactOptional(),
                      usersCount: z.int().exactOptional(),
                      msgs: z.int().exactOptional(),
                      ts: z.string().exactOptional(),
                      uids: z.array(z.string()).exactOptional(),
                      default: z.boolean().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      _USERNAMES: z.array(z.string()).exactOptional(),
                      lastMessage: z
                        .object({
                          rid: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          _id: z.string().exactOptional(),
                          _updatedAt: z.string().exactOptional(),
                          urls: z
                            .array(
                              z
                                .object({
                                  url: z.string().exactOptional(),
                                  meta: z.looseObject({}).exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                          md: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  value: z
                                    .array(
                                      z
                                        .object({
                                          type: z.string().exactOptional(),
                                          value: z
                                            .array(
                                              z
                                                .object({
                                                  type: z.string().exactOptional(),
                                                  value: z.string().exactOptional(),
                                                  src: z
                                                    .object({
                                                      type: z.string().exactOptional(),
                                                      value: z.string().exactOptional(),
                                                    })
                                                    .exactOptional()
                                                    .openapi({ required: [] }),
                                                  label: z
                                                    .array(
                                                      z
                                                        .object({
                                                          type: z.string().exactOptional(),
                                                          value: z.string().exactOptional(),
                                                        })
                                                        .openapi({ required: [] }),
                                                    )
                                                    .exactOptional(),
                                                })
                                                .openapi({ required: [] }),
                                            )
                                            .exactOptional(),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      lm: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                ims: [
                  {
                    _id: 'rYhzFRd2QZjNwAAXXrocket.cat',
                    t: 'd',
                    usernames: ['rocket.cat', 'rodriq'],
                    usersCount: 2,
                    msgs: 20,
                    ts: '2023-01-25T02:00:18.095Z',
                    uids: ['rYhzFRd2QZjNwAAXX', 'rocket.cat'],
                    default: false,
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2023-06-22T02:00:10.474Z',
                    _USERNAMES: ['rocket.cat', 'rodriq'],
                    lastMessage: {
                      rid: 'rYhzFRd2QZjNwAAXXrocket.cat',
                      msg: '*Update your Rocket.Chat*\nNew version available (6.2.8)\nhttps://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8',
                      ts: '2023-06-22T02:00:10.367Z',
                      u: { _id: 'rocket.cat', username: 'rocket.cat', name: 'Rocket.Cat' },
                      _id: 'T2KoWNeAgJM4zvTvt',
                      _updatedAt: '2023-06-22T02:00:10.453Z',
                      urls: [
                        {
                          url: 'https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8',
                          meta: {},
                        },
                      ],
                      mentions: [],
                      channels: [],
                      md: [
                        {
                          type: 'PARAGRAPH',
                          value: [
                            {
                              type: 'BOLD',
                              value: [{ type: 'PLAIN_TEXT', value: 'Update your Rocket.Chat' }],
                            },
                          ],
                        },
                        {
                          type: 'PARAGRAPH',
                          value: [{ type: 'PLAIN_TEXT', value: 'New version available (6.2.8)' }],
                        },
                        {
                          type: 'PARAGRAPH',
                          value: [
                            {
                              type: 'LINK',
                              value: {
                                src: {
                                  type: 'PLAIN_TEXT',
                                  value:
                                    'https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8',
                                },
                                label: [
                                  {
                                    type: 'PLAIN_TEXT',
                                    value:
                                      'https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8',
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      ],
                    },
                    lm: '2023-06-22T02:00:10.367Z',
                  },
                  {
                    _id: '6xia7f5JEYM4Fjxzt',
                    t: 'd',
                    usernames: ['rodriq'],
                    usersCount: 2,
                    msgs: 0,
                    ts: '2023-01-30T11:43:22.047Z',
                    uids: ['rYhzFRd2QZjNwAAXX'],
                    default: false,
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2023-01-31T14:40:37.483Z',
                    _USERNAMES: ['rodriq'],
                    lm: '2023-01-30T11:43:30.046Z',
                  },
                ],
                offset: 0,
                count: 2,
                total: 2,
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

export const getApiV1DmListRoute = createRoute({
  method: 'get',
  path: '/api/v1/dm.list',
  tags: ['Direct Messages'],
  summary: 'List DMs',
  description:
    'List all the DMs of the authenticated user. \n\n### Change Log\n\n| Version | Description                                  |\n| ------- | -------------------------------------------- |\n|9.0.0   | Removed the `fields` parameter.       |\n| 0.67.0  | Remove `query` parameter support.            |\n| 0.62.0  | Add `query` parameter support.               |\n| 0.49.0  | Count and offset query parameters supported. |\n| 0.48.0  | Added                                        |',
  operationId: 'get-api-v1-im.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ims: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      usernames: z.array(z.string()).exactOptional(),
                      usersCount: z.int().exactOptional(),
                      msgs: z.int().exactOptional(),
                      ts: z.string().exactOptional(),
                      uids: z.array(z.string()).exactOptional(),
                      encrypted: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      _USERNAMES: z.array(z.string()).exactOptional(),
                      e2eKeyId: z.string().exactOptional(),
                      lastMessage: z
                        .object({
                          _id: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          _updatedAt: z.string().exactOptional(),
                          urls: z.array(z.looseObject({})).exactOptional(),
                          mentions: z
                            .array(
                              z
                                .object({
                                  _id: z.string().exactOptional(),
                                  username: z.string().exactOptional(),
                                  name: z.string().exactOptional(),
                                  type: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                          md: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  value: z
                                    .array(
                                      z
                                        .object({
                                          type: z.string().exactOptional(),
                                          value: z.string().exactOptional(),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      lm: z.string().exactOptional(),
                      topic: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                ims: [
                  {
                    _id: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ',
                    t: 'd',
                    usernames: ['roxie', 'test.john'],
                    usersCount: 2,
                    msgs: 10,
                    ts: '2023-07-11T01:37:04.552Z',
                    uids: ['5fRTXMt7DMJbpPJfh', 'rbAXPnMktTFbNpwtJ'],
                    encrypted: true,
                    default: false,
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2023-10-30T20:37:17.317Z',
                    _USERNAMES: ['test.test', 'test.test'],
                    e2eKeyId: 'eyJhbGciOiJB',
                    lastMessage: {
                      _id: 'qpx24HcNoTZCoj7jZ',
                      rid: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ',
                      msg: 'gvjkbvjjgi',
                      ts: '2023-10-30T20:37:17.160Z',
                      u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                      _updatedAt: '2023-10-30T20:37:17.267Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [
                        { type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'gvjkbvjjgi' }] },
                      ],
                    },
                    lm: '2023-10-30T20:37:17.160Z',
                    topic: 'Discuss all of the testing',
                  },
                  {
                    _id: '65400fc3a2f73c7460e18e9f',
                    t: 'd',
                    usernames: ['roxie', 'hookdeck.write', 'test.john'],
                    usersCount: 3,
                    msgs: 8,
                    ts: '2023-10-30T20:19:15.092Z',
                    uids: ['5fRTXMt7DMJbpPJfh', 'hFDuCPam7sWziWFYa', 'rbAXPnMktTFbNpwtJ'],
                    encrypted: true,
                    default: false,
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2023-10-30T20:36:41.696Z',
                    _USERNAMES: ['roxie', 'hookdeck.write', 'test.john'],
                    topic: 'Discuss all of the testing',
                    lastMessage: {
                      _id: 'dgDTvDAXN4eCLptr8',
                      rid: '65400fc3a2f73c7460e18e9f',
                      msg: '@test.john',
                      ts: '2023-10-30T20:36:41.494Z',
                      u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                      _updatedAt: '2023-10-30T20:36:41.613Z',
                      urls: [],
                      mentions: [
                        {
                          _id: '5fRTXMt7DMJbpPJfh',
                          username: 'test.john',
                          name: 'Test John',
                          type: 'user',
                        },
                      ],
                      channels: [],
                      md: [
                        {
                          type: 'PARAGRAPH',
                          value: [
                            {
                              type: 'MENTION_USER',
                              value: { type: 'PLAIN_TEXT', value: 'test.john' },
                            },
                          ],
                        },
                      ],
                    },
                    lm: '2023-10-30T20:36:41.494Z',
                  },
                ],
                offset: 0,
                count: 2,
                total: 2,
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

export const getApiV1DmMembersRoute = createRoute({
  method: 'get',
  path: '/api/v1/dm.members',
  tags: ['Direct Messages'],
  summary: 'List DM Members',
  description:
    'List all the members of a DM. \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed the `query` parameter.       |\n|0.59.0             | Added       |',
  operationId: 'get-api-v1-im.members',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      roomId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The room ID of the DM. It is required if `username` is not provided.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username: OptionalUsernameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              members: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      utcOffset: z.int().exactOptional(),
                      statusText: z.string().exactOptional(),
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
            'Example 1': {
              value: {
                members: [
                  {
                    _id: '5fRTXMt7DMJbpPJfh',
                    username: 'test.john',
                    status: 'online',
                    name: 'Test John',
                    utcOffset: 1,
                    statusText: '',
                  },
                  {
                    _id: 'rbAXPnMktTFbNpwtJ',
                    username: 'roxie',
                    status: 'offline',
                    name: 'test test',
                    utcOffset: 1,
                    statusText: 'On a vacation',
                  },
                  {
                    _id: 'hFDuCPam7sWziWFYa',
                    status: 'offline',
                    name: 'Hookdeck Write',
                    utcOffset: 1,
                    username: 'hookdeck.write',
                  },
                ],
                count: 3,
                offset: 0,
                total: 3,
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
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  "must have required property 'roomId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: { success: false, error: '[invalid-channel]', errorType: 'invalid-channel' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1DmMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/dm.messages',
  tags: ['Direct Messages'],
  summary: 'List DM Messages',
  description:
    'List all the messages in a DM. \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 7.0.0  | Added `mentionIds`, `starredIds`, `pinned` query parameters.|         \n|0.59.0            | Added       |',
  operationId: 'get-api-v1-im.messages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      roomId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The room ID of the DM. It is required if `username` is not provided.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username: OptionalUsernameParamsSchema,
      mentionIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'mentionIds',
            in: 'query',
            description:
              'Filter the messages where a user has been mentioned by the userId. For a set of userIds, use an array (`["838ndhd79w", "dud0wu900"]`).',
            schema: { type: 'string' },
            example: '838ndhd79w',
            required: false,
          },
        }),
      starredIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'starredIds',
            in: 'query',
            description:
              'Filter the messages a user have starred by userId. For a set of userIds, use an array (`["838ndhd79w", "dud0wu900"]`).',
            schema: { type: 'string' },
            example: 'dud0wu900',
            required: false,
          },
        }),
      pinned: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pinned',
            in: 'query',
            description: 'Filter pinned messages.',
            schema: { type: 'string' },
            example: 'true',
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
              'Sort the order in which messages are returned, ascending (`1`) or descending (`-1`). The options are:\n * `ts`: Sort by message timestamp. For example, `{"ts": -1}`, this is the default sorting mechanism.\n * `u.username`: Sort by username. For example, `{"u.username": 1}`.\n * `msg`: Sort by message content. For example, `{"msg": 1}`.\n * `_id`: Sort by message ID. For example, `{"_id": -1}`.\n * `mentions._id`: Sort by mentioned user IDs. For example, `{"mentions._id": 1}`.',
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
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      md: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
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
                messages: [
                  {
                    _id: 'dGNzxH29pFm4Qhufh',
                    rid: '5fRTXMt7DMJbpPJfhgzvcvpov9G4TxbGFS',
                    msg: 'DO we have any updates today?',
                    ts: '2023-11-01T23:20:57.357Z',
                    u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.john', name: 'Test John' },
                    _updatedAt: '2023-11-01T23:20:57.406Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [{ type: 'PLAIN_TEXT', value: 'DO we have any updates today?' }],
                      },
                    ],
                  },
                  {
                    _id: 'aiaCSRkxPcNGHqvtC',
                    rid: '5fRTXMt7DMJbpPJfhgzvcvpov9G4TxbGFS',
                    msg: 'Hows it going?',
                    ts: '2023-11-01T23:20:51.504Z',
                    u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.john', name: 'Test John' },
                    _updatedAt: '2023-11-01T23:20:51.549Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [{ type: 'PLAIN_TEXT', value: 'Hows it going?' }],
                      },
                    ],
                  },
                  {
                    _id: 'dLjcNr8ovyeCqqJW5',
                    rid: '5fRTXMt7DMJbpPJfhgzvcvpov9G4TxbGFS',
                    msg: 'Hi buddy',
                    ts: '2023-11-01T23:20:47.991Z',
                    u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.john', name: 'Test John' },
                    _updatedAt: '2023-11-01T23:20:48.085Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'Hi buddy' }] }],
                  },
                ],
                count: 3,
                offset: 0,
                total: 3,
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
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error:
                  "must have required property 'roomId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Invalid Channel': {
              value: { success: false, error: '[invalid-channel]', errorType: 'invalid-channel' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1DmMessagesOthersRoute = createRoute({
  method: 'get',
  path: '/api/v1/dm.messages.others',
  tags: ['Direct Messages'],
  summary: 'Message Others',
  description:
    'Retrieves the messages from any direct message in the server.  For this method to work, navigate to  **Manage > Workspace > Settings > General > REST API > Enable Direct Message History Endpoint** and enable it. \n\nPermission required: `view-room-administration`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n|0.50.0  | Added                   |',
  operationId: 'get-api-v1-im.messages.others',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      groupable: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                messages: [
                  {
                    _id: 'AkzpHAvZpdnuchw2a',
                    rid: 'ByehQjC44FwMeiLbX',
                    msg: 'hi',
                    ts: '2016-12-09T12:50:51.555Z',
                    u: { _id: 'y65tAmHs93aDChMWu', username: 'testing' },
                    _updatedAt: '2016-12-09T12:50:51.562Z',
                  },
                  {
                    _id: 'vkLMxcctR4MuTxreF',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2016-12-08T15:41:37.730Z',
                    msg: 'testing2',
                    u: { _id: 'bRtgdhzM6PD9F8pSx', username: 'testing2' },
                    groupable: false,
                    _updatedAt: '2016-12-08T16:03:25.235Z',
                  },
                  {
                    _id: 'bfRW658nEyEBg75rc',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2016-12-07T15:47:49.099Z',
                    msg: 'testing',
                    u: { _id: 'nSYqWzZ4GsKTX4dyK', username: 'testing1' },
                    groupable: false,
                    _updatedAt: '2016-12-07T15:47:49.099Z',
                  },
                  {
                    _id: 'pbuFiGadhRZTKouhB',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2016-12-06T17:57:38.635Z',
                    msg: 'testing',
                    u: { _id: 'y65tAmHs93aDChMWu', username: 'testing' },
                    groupable: false,
                    _updatedAt: '2016-12-06T17:57:38.635Z',
                  },
                ],
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
                .object({ route: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'This endpoint is disabled [error-endpoint-disabled]',
                errorType: 'error-endpoint-disabled',
                details: { route: '/api/v1/dm.messages.others' },
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: 'The parameter "roomId" is required [error-roomid-param-not-provided]',
                errorType: 'error-roomid-param-not-provided',
              },
            },
            'Example 3': {
              value: {
                success: false,
                error: 'No direct message room found by the id of: john [error-room-not-found]',
                errorType: 'error-room-not-found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1DmOpenRoute = createRoute({
  method: 'post',
  path: '/api/v1/dm.open',
  tags: ['Direct Messages'],
  summary: 'Open DM',
  description:
    "Adds a DM back to the user's list of direct messages.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 0.48.0           | Added       |",
  operationId: 'post-api-v1-im.open',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ roomId: z.string().openapi({ description: 'The room ID.' }) })
            .openapi({ required: ['roomId'] }),
          examples: { Example: { value: { roomId: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ' } } },
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
            'Missing Parameter': {
              value: {
                success: false,
                error: 'Body param "roomId" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1DmSetTopicRoute = createRoute({
  method: 'post',
  path: '/api/v1/dm.setTopic',
  tags: ['Direct Messages'],
  summary: 'Set DM Topic',
  description:
    'Set the topic of a DM.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n| 0.48.0           | Added       |',
  operationId: 'post-api-v1-im.setTopic',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The room ID of the direct message.' }),
              topic: z.string().openapi({ description: 'The topic of the DM.' }),
            })
            .openapi({ required: ['roomId', 'topic'] }),
          examples: {
            Example: {
              value: { roomId: 'ByehQjC44FwMeiLbX', topic: 'Discuss all of the testing' },
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
            .object({ topic: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { Example: { value: { topic: 'Discuss all of the testing', success: true } } },
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
            Example: {
              value: {
                success: false,
                error: 'Body param "roomId" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1AutotranslateGetProviderUiMetadataRoute = createRoute({
  method: 'get',
  path: '/api/v1/autotranslate.getProviderUiMetadata',
  tags: ['Auto-Translate'],
  summary: 'Get Translation Providers',
  description:
    'Lists the auto-translate providers registered in the workspace.\n\nThis endpoint replaces the `autoTranslate.getProviderUiMetadata` Realtime API method, which was removed in 9.0.0.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |',
  operationId: 'get-api-v1-autotranslate.getProviderUiMetadata',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              providers: z
                .record(
                  z.string(),
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The provider name.' }),
                      displayName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The provider name to display in the UI.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'The registered providers, keyed by provider name.' }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                providers: {
                  'google-translate': { name: 'google-translate', displayName: 'Google' },
                  'deepl-translate': { name: 'deepl-translate', displayName: 'DeepL' },
                  'microsoft-translate': { name: 'microsoft-translate', displayName: 'Microsoft' },
                  'libre-translate': { name: 'libre-translate', displayName: 'LibreTranslate' },
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

export const getApiV1AutotranslateGetSupportedLanguagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/autotranslate.getSupportedLanguages',
  tags: ['Auto-Translate'],
  summary: 'Get Supported Languages',
  description:
    'Get the list of languages supported by the translation service provider.\nMake sure that the auto-translate feature is configured in your workspace. For details, see the <a href="https://docs.rocket.chat/v1/docs/auto-translate-messages" target="_blank">Auto-Translate</a> user guide.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.3.0          | Added       |',
  operationId: 'get-api-v1-autotranslate.getSupportedLanguages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      targetLanguage: z
        .string()
        .openapi({
          param: {
            name: 'targetLanguage',
            in: 'query',
            description: 'Language in which the language names will be returned.',
            required: true,
            schema: { type: 'string' },
            example: 'en',
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
              languages: z
                .array(
                  z
                    .object({
                      name: z.string().exactOptional(),
                      supports_formality: z.boolean().exactOptional(),
                      language: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                languages: [
                  { name: 'Arabic', supports_formality: false, language: 'ar' },
                  { name: 'Bulgarian', supports_formality: false, language: 'bg' },
                  { name: 'Czech', supports_formality: false, language: 'cs' },
                  { name: 'German', supports_formality: true, language: 'de' },
                  {
                    name: 'Spanish (Latin American)',
                    supports_formality: true,
                    language: 'es-419',
                  },
                  { name: 'Estonian', supports_formality: false, language: 'et' },
                  { name: 'Indonesian', supports_formality: false, language: 'id' },
                  { name: 'Korean', supports_formality: false, language: 'ko' },
                  { name: 'Lithuanian', supports_formality: false, language: 'lt' },
                  { name: 'Portuguese (Brazilian)', supports_formality: true, language: 'pt-BR' },
                  { name: 'Thai', supports_formality: false, language: 'th' },
                  { name: 'Vietnamese', supports_formality: false, language: 'vi' },
                  { name: 'Chinese (simplified)', supports_formality: false, language: 'zh' },
                ],
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
            })
            .openapi({ required: [] }),
          examples: {
            'Target Language Required': {
              value: {
                success: false,
                error: "must have required property 'targetLanguage' [error-invalid-params]",
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

export const postApiV1AutotranslateSaveSettingsRoute = createRoute({
  method: 'post',
  path: '/api/v1/autotranslate.saveSettings',
  tags: ['Auto-Translate'],
  summary: 'Save Auto-Translate  Settings',
  description:
    'Saves autotranslate settings for a room.\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.3.0          | Added       |',
  operationId: 'post-api-v1-autotranslate.saveSettings',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The room's id to apply setting." }),
              field: z
                .string()
                .openapi({ description: "The setting to apply to user's subscription." }),
              value: z
                .boolean()
                .openapi({
                  description:
                    'Boolean if the setting is autoTranslate and a string (the language) if the setting is autoTranslateLanguage.',
                }),
              defaultLanguage: z
                .string()
                .exactOptional()
                .openapi({ description: 'The default language.' }),
            })
            .openapi({ required: ['roomId', 'field', 'value'] }),
          examples: {
            Example: {
              value: {
                roomId: '7aDSXtjMA3KPLxLjt',
                field: 'autoTranslate',
                value: true,
                defaultLanguage: 'en',
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1AutotranslateTranslateMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/autotranslate.translateMessage',
  tags: ['Auto-Translate'],
  summary: 'Translate Message',
  description:
    'Auto-translates the provided message.\n\nThe caller must have access to the room that contains the message.\nIf the caller is not a room member (or otherwise cannot access it), the endpoint returns `403 Forbidden` and no translation is performed.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.3.0          | Added       |\n|8.5.0          | Added room-access check. |',
  operationId: 'post-api-v1-autotranslate.translateMessage',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z.string().openapi({ description: "The message's id to be translated." }),
              targetLanguage: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The target language that the message will be translated.',
                }),
            })
            .openapi({ required: ['messageId'] }),
          examples: {
            Example: { value: { messageId: 'Fq7sQNSnDEfzj8qoS', targetLanguage: 'en' } },
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
              message: z
                .object({
                  _id: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  mentions: z.array(z.looseObject({})).exactOptional(),
                  channels: z.array(z.looseObject({})).exactOptional(),
                  translations: z
                    .object({ en: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                message: {
                  _id: 'Fq7sQNSnDEfzj8qoS',
                  rid: 'GENERAL',
                  msg: 'Isso é um teste',
                  ts: '2019-06-27T15:35:20.753Z',
                  u: { _id: 'pC6Z2N2ijivxdsYSu', username: 'marcos', name: 'marcos' },
                  _updatedAt: '2019-06-27T15:47:01.486Z',
                  mentions: [],
                  channels: [],
                  translations: { en: 'This is a test' },
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
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: 'Invalid request body. [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
            'Message Not Found': { value: { success: false, error: 'Message not found.' } },
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
            .object({ success: z.literal(false), error: z.string() })
            .openapi({ required: ['success', 'error'] }),
          examples: { 'Permission Error': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})
