import { createRoute, z } from '@hono/zod-openapi'

const AttachmentSchema = z
  .object({
    ts: z.string().exactOptional().openapi({ example: '1970-01-01T00:00:00.000Z' }),
    title: z.string().exactOptional(),
    title_link: z.string().exactOptional(),
    title_link_download: z.boolean().exactOptional(),
    image_dimensions: z
      .object({
        width: z.int().exactOptional().openapi({ example: 444 }),
        height: z.int().exactOptional().openapi({ example: 360 }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    image_preview: z.string().exactOptional().openapi({ example: '/9j/2wBDAAYEBQ...' }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({ example: '/file-upload/PNTaE9SBQasdpAwk2/img_1.jpg' }),
    image_type: z.string().exactOptional().openapi({ example: 'image/jpeg' }),
    image_size: z.int().exactOptional().openapi({ example: 26674 }),
    type: z.string().exactOptional().openapi({ example: 'file' }),
    description: z.string().exactOptional().openapi({ example: '' }),
  })
  .openapi({ required: [] })
  .openapi('Attachment')

const SubscriptionSchema = z
  .object({
    _id: z.string().exactOptional(),
    open: z.boolean().exactOptional(),
    alert: z.boolean().exactOptional(),
    unread: z.int().exactOptional(),
    userMentions: z.int().exactOptional(),
    groupMentions: z.int().exactOptional(),
    ts: z.string().exactOptional(),
    rid: z.string().exactOptional(),
    name: z.string().exactOptional(),
    fname: z.string().nullable().exactOptional(),
    t: z.string().exactOptional(),
    u: z
      .object({
        _id: z.string().exactOptional(),
        username: z.string().exactOptional(),
        name: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _updatedAt: z.string().exactOptional(),
    ls: z.string().exactOptional(),
    E2EKey: z.string().exactOptional(),
    draft: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unfinished message draft for the room.' }),
    threadDrafts: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "The unfinished thread reply drafts, keyed by the ID of each thread's main message.",
      }),
  })
  .openapi({ required: [] })
  .openapi('Subscription')

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

const ForbiddenErrorResponse = {
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
      example: 'dlpfuijw7ej',
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
      example: 'general',
    },
  })

const RoomIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'roomId',
      in: 'query',
      description: 'The room id.',
      required: true,
      schema: { type: 'string' },
      example: 'jdiue8TGkodp',
    },
  })

const OptionalTeamIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'teamId',
      in: 'query',
      description: 'The team id.  It is required if the `teamName` is not provided.',
      schema: { type: 'string' },
      example: '63f3efc4b000b6b6d86704b2',
      required: false,
    },
  })

const OptionalTeamNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'teamName',
      in: 'query',
      description: 'The team name.  It is required if the `teamId` is not provided.',
      required: false,
      schema: { type: 'string' },
      example: 'livestream',
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

export const postApiV1ChannelsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.create',
  tags: ['Channels'],
  summary: 'Create Channel',
  description:
    'Create a public channel. Optionally, include specified users. The channel creator is included as a member by default. Permission required: `create-c`.\nChannel naming has restraints following the regex filter `[0-9a-zA-Z-_.]+` by default. See <a href="https://docs.rocket.chat/docs/general#utf8" target="_blank">UTF8 Settings</a> to modify regex filter for channel names. Channel names must not allow for any whitespaces.\n\n### Changelog\n\n| Version | Description               |\n| ------- | ------------------------- |\n| 6.4.1   | Added `excludeSelf` param |\n| 0.13.0  | Added                     |',
  operationId: 'post-api-v1-channels.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the channel.' }),
              members: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of the users to be added to the channel when it is created.',
                }),
              readOnly: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Set if the channel is read only or not. It is `false` by default.',
                }),
              excludeSelf: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to true, the user calling the endpoint is not automatically added as a member of the channel. The default `value` is false.',
                }),
              customFields: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    "If you have defined custom fields for your workspace, you can provide them in this object parameter. For details, see the <a href='https://docs.rocket.chat/docs/custom-fields' target='_blank'>Custom Fields</a> document.",
                }),
              extraData: z
                .strictObject({
                  broadcast: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether the channel should be a broadcast room.' }),
                  encrypted: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether the channel should be encrypted.' }),
                  teamId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'An existing team ID to associate with this channel. Requires the `create-team-channel` permission.',
                    }),
                  topic: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The topic of the channel.' }),
                  federated: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Whether the channel should be federated (Matrix federation).',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Additional channel settings applied at creation.\nFor more information, see <a href='https://docs.rocket.chat/use-rocket.chat/user-guides/rooms/channels#channel-privacy-and-encryption' target='_blank'>Channels</a>.",
                  required: [],
                }),
            })
            .openapi({ required: ['name'] }),
          examples: {
            Example: {
              value: {
                name: 'channelname',
                members: ['rocket.cat'],
                readOnly: true,
                excludeSelf: true,
                customFields: { type: 'default' },
                extraData: {
                  broadcast: true,
                  encrypted: false,
                  teamId: '658441562dd9f928ad9951aa',
                },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'channelname',
                  t: 'c',
                  usernames: ['example'],
                  msgs: 0,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'example' },
                  ts: '2016-05-30T13:42:25.304Z',
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

export const postApiV1ChannelsAddAllRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.addAll',
  tags: ['Channels'],
  summary: 'Add all Users to a Channel',
  description:
    "Adds all users in the workspace to a public room. Permission required: `add-all-to-room`.\nThe maximum number of users you can add at once depends on your workspace's REST API settings. To access this setting, go to **Manage** > **Workspace** > **Settings** > **General** > **REST API** > **User Limit for Adding All Users to Channel**.\n\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n|0.55.0   | Added `activeUsersOnly` param |\n|0.48.0   | Renamed to `channels.addAll` from `channel.addAll`|",
  operationId: 'post-api-v1-channels.addAll',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's ID." }),
              activeUsersOnly: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Add only active users. It is `false` by default.' }),
            })
            .openapi({ required: ['roomId'] }),
          examples: { Example: { value: { roomId: 'WDuJLFkjwk6L7LdFC', activeUsersOnly: true } } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  topic: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
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
                    .exactOptional()
                    .openapi({ required: [] }),
                  lm: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'channelname',
                  t: 'c',
                  usernames: ['example', 'rocket.cat'],
                  msgs: 0,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'example' },
                  ts: '2016-05-30T13:42:25.304Z',
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

export const postApiV1ChannelsAddLeaderRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.addLeader',
  tags: ['Channels'],
  summary: 'Add Channel Leader',
  description:
    "Assign the role of `leader` to a channel member. See <a href='https://docs.rocket.chat/docs/room-roles' target='_blank'>Room Roles</a> for details about the roles.\n\nPermission required: `set-leader`\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.75.0   | Added                    |",
  operationId: 'post-api-v1-channels.addLeader',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The channel ID.' }),
              userId: z.string().openapi({ description: 'The ID of the user to be made leader.' }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'WDuJLFkjwk6L7LdFC', userId: 'b66oZ8i9pkeSko33v' } },
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
            'User is a leader': {
              value: {
                success: false,
                error: 'User is already a leader [error-user-already-leader]',
                errorType: 'error-user-already-leader',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsAddModeratorRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.addModerator',
  tags: ['Channels'],
  summary: 'Add Channel Moderator',
  description:
    "Assign the `moderator` role to a channel member. See <a href='https://docs.rocket.chat/docs/room-roles' target='_blank'>Room Roles</a> for details about the roles.\n\nPermission required: `set-moderator`\n\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.49.4  | Added                     |",
  operationId: 'post-api-v1-channels.addModerator',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The channel ID.' }),
              userId: z
                .string()
                .openapi({ description: 'The user ID that you want to set as the moderator.' }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'WDuJLFkjwk6L7LdFC', userId: 'b66oZ8i9pkeSko33v' } },
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
            'User is already a moderator': {
              value: {
                success: false,
                error: 'User is already a moderator [error-user-already-moderator]',
                errorType: 'error-user-already-moderator',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsAddOwnerRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.addOwner',
  tags: ['Channels'],
  summary: 'Add Channel Owner',
  description:
    "Assign the `owner` role to a channel member. See <a href='https://docs.rocket.chat/docs/room-roles' target='_blank'>Room Roles</a> for details about the roles.\n\nPermission required:  `set-owner`\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.49.4   | Added                    |",
  operationId: 'post-api-v1-channels.addOwner',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The channel ID.' }),
              userId: z
                .string()
                .openapi({ description: 'The user ID that you want to set as the channel owner.' }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'WDuJLFkjwk6L7LdFC', userId: 'b66oZ8i9pkeSko33v' } },
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
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'User is alrready an owner': {
              value: {
                success: false,
                error: 'User is already an owner [error-user-already-owner]',
                errorType: 'error-user-already-owner',
                details: { method: 'addRoomOwner' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChannelsAnonymousreadRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.anonymousread',
  tags: ['Channels'],
  summary: 'Read Channel Messages Anonymously',
  description:
    'Fetch the messages in a public channel to an anonymous user. You must enable `Accounts_AllowAnonymousRead` <a href="https://docs.rocket.chat/docs/accounts" target="_blank">setting</a> in the workspace.\n\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 1.2.0   | Added                     |',
  operationId: 'get-api-v1-channels.anonymousread',
  request: {
    query: z.object({
      roomId: OptionalRoomIdParamsSchema,
      roomName: OptionalRoomNameParamsSchema,
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
                      msg: z.string().exactOptional(),
                      groupable: z.boolean().exactOptional(),
                      blocks: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              blockId: z.string().exactOptional(),
                              callId: z.string().exactOptional(),
                              appId: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
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
                      attachments: z.array(AttachmentSchema).exactOptional(),
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
                messages: [
                  {
                    _id: 'xadufzmxzYQp4H9py',
                    alias: 'test',
                    msg: 'Example message',
                    attachments: [],
                    parseUrls: true,
                    bot: { i: 'MnQyfhWt5LqZotyfc' },
                    groupable: false,
                    ts: '2018-10-05T01:10:47.524Z',
                    u: { _id: 'rocket.cat', username: 'rocket.cat', name: 'Rocket.Cat' },
                    rid: 'GENERAL',
                    _updatedAt: '2018-10-05T13:42:51.163Z',
                    reactions: { ':grin:': { usernames: ['marco.zoo'] } },
                    mentions: [],
                    channels: [],
                    starred: { _id: 'KPkEYwKKBKZnEEPpt' },
                  },
                  {
                    _id: 'id-1538701845987',
                    rid: 'GENERAL',
                    msg: 'This message was edited via API',
                    alias: 'Gruggy',
                    emoji: ':smirk:',
                    avatar: 'http://res.guggy.com/logo_128.png',
                    attachments: [
                      {
                        collapsed: false,
                        color: '#ff0000',
                        text: 'Yay for gruggy!',
                        ts: '2016-12-09T16:53:06.761Z',
                        message_link: 'https://google.com',
                        thumb_url: 'http://res.guggy.com/logo_128.png',
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
                            value:
                              '<a href="https://google.com" target="_blank">Link</a> something and this and that.',
                          },
                        ],
                      },
                    ],
                    ts: '2018-10-05T01:10:45.994Z',
                    u: {
                      _id: 'rocketchat.internal.admin.test',
                      username: 'rocketchat.internal.admin.test',
                      name: 'RocketChat Internal Admin Test',
                    },
                    _updatedAt: '2018-10-05T01:10:47.064Z',
                    editedBy: {
                      _id: 'rocketchat.internal.admin.test',
                      username: 'rocketchat.internal.admin.test',
                    },
                    editedAt: '2018-10-05T01:10:46.384Z',
                    reactions: {
                      ':smile:': { usernames: ['rocketchat.internal.admin.test'] },
                      ':squid:': { usernames: ['rocketchat.internal.admin.test'] },
                      ':bee:': { usernames: ['rocketchat.internal.admin.test'] },
                      ':ant:': { usernames: ['rocketchat.internal.admin.test'] },
                    },
                    mentions: [],
                    channels: [],
                    urls: [],
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
                error:
                  'The required "roomId" or "roomName" param provided does not match any channel [error-room-not-found]',
                errorType: 'error-room-not-found',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1ChannelsArchiveRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.archive',
  tags: ['Channels'],
  summary: 'Archive Channel',
  description:
    'Archive a channel. Permission required: `archive-room`\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.48.0  | Added                    |',
  operationId: 'post-api-v1-channels.archive',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({ description: 'The channel ID that you want to archive.' }),
            })
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
            'Channel is already archived': {
              value: {
                success: false,
                error: 'The channel, add-room-websocket, is archived [error-room-archived]',
                errorType: 'error-room-archived',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsCloseRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.close',
  tags: ['Channels'],
  summary: 'Close Channel',
  description:
    "Remove a channel from the user's list of channels in the workspace sidebar. You can access it again from the **Directory**.\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.48.0  | Added                     |",
  operationId: 'post-api-v1-channels.close',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({ description: 'The channel ID that you want to close from your list.' }),
            })
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Channel is already closed': {
              value: { success: false, error: 'The channel, dlp, is already closed to the sender' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChannelsCountersRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.counters',
  tags: ['Channels'],
  summary: 'Get Channel Counters',
  description:
    'Gets channel counter for the authenticated user.\n\nPermission required: `view-room-administration`\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.65.0  | Added                     |',
  operationId: 'get-api-v1-channels.counters',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: OptionalRoomIdParamsSchema,
      roomName: OptionalRoomNameParamsSchema,
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description: 'The user ID.',
            schema: { type: 'string', example: 'RtycPC29hqLJfT9xj' },
            required: false,
          },
          example: 'RtycPC29hqLJfT9xj',
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK\n\n**Note** \n- `joined` boolean flag whether the user has joined the room or not.\n- `members` is the count of current room members.\n- `unreads` is the count of unread messages for the specified user (for the calling user or the provided user ID).\n- `unreadsFrom` is the start date-time of unread interval for the specified user.\n- `msgs` is the count of messages in the room.\n- `latest` is the end date-time of unread interval for the specified user (or date-time of last posted message).\n- `userMentions` is the count of user mentions in messages.',
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
            Example: {
              value: {
                joined: true,
                members: 23,
                unreads: 2,
                unreadsFrom: '2023-09-12T16:33:11.644Z',
                msgs: 7345,
                latest: '2023-09-25T22:50:07.979Z',
                userMentions: 0,
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

export const postApiV1ChannelsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.delete',
  tags: ['Channels'],
  summary: 'Delete Channel',
  description:
    'Delete a channel. Any of the permssions are required:\n* `delete-c`: Delete a public channel.\n* `delete-team-channel`: Delete a channel part of a team. You also need the `delete-c` permission.\n\n### Changelog\n\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.71.0  | Removed `channel` property|\n| 0.49.0  | Added                     |',
  operationId: 'post-api-v1-channels.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description:
                    'Enter the room ID. This parameter is required if no `roomName` is provided.',
                }),
              roomName: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'general',
                  description:
                    'Enter the room name. This parameter is required if no `roomId` is provided.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const getApiV1ChannelsFilesRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.files',
  tags: ['Channels'],
  summary: 'Get Channel Files',
  description:
    'Retrieves all the media files from a channel.\n\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 0.64.0 | Change userId to user object in response                    |\n| 0.59.0  | Added                  |',
  operationId: 'get-api-v1-channels.files',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({
      roomId: OptionalRoomIdParamsSchema,
      roomName: OptionalRoomNameParamsSchema,
      sort: SortParamsSchema,
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      typeGroup: FilterTypeGroupParamsSchema,
      name: FilterNameParamsSchema,
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
                      identify: z
                        .object({
                          format: z.string().exactOptional(),
                          size: z
                            .object({
                              width: z.int().exactOptional(),
                              height: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
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
            Example: {
              value: {
                files: [
                  {
                    _id: '651227bea2f73c7460e18c63',
                    name: 'Screenshot (317).png',
                    size: 288727,
                    type: 'image/png',
                    rid: 'siyr2oWQJBjQjhLwr',
                    userId: 'rbAXPnMktTFbNpwtJ',
                    store: 'GridFS:Uploads',
                    _updatedAt: '2023-09-26T00:37:19.598Z',
                    identify: { format: 'png', size: { width: 1920, height: 1080 } },
                    complete: true,
                    etag: '2Q2D8hSxCdhQLzcpx',
                    path: '/file-upload/651227bea2f73c7460e18c63/Screenshot%20(317).png',
                    progress: 1,
                    token: 'da2aCAf88a',
                    uploadedAt: '2023-09-26T00:37:18.168Z',
                    uploading: false,
                    url: 'http://localhost:3000/file-upload/651227bea2f73c7460e18c63/Screenshot%20(317).png',
                    typeGroup: 'image',
                    user: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                  },
                  {
                    _id: '64b589e6aa5ad4273bfc4db6',
                    name: 'eicar.zip',
                    size: 266,
                    type: 'application/x-zip-compressed',
                    rid: 'siyr2oWQJBjQjhLwr',
                    userId: 'rbAXPnMktTFbNpwtJ',
                    store: 'GridFS:Uploads',
                    _updatedAt: '2023-07-17T18:35:18.242Z',
                    complete: true,
                    etag: 'JYaAzzFQSnxYQ7rWW',
                    path: '/file-upload/64b589e6aa5ad4273bfc4db6/eicar.zip',
                    progress: 1,
                    token: '7a1A38Cb5a',
                    uploadedAt: '2023-07-17T18:35:18.216Z',
                    uploading: false,
                    url: 'http://localhost:3000/file-upload/64b589e6aa5ad4273bfc4db6/eicar.zip',
                    typeGroup: 'application',
                    user: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
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
  },
})

export const getApiV1ChannelsHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.history',
  tags: ['Channels'],
  summary: 'Get Channel History',
  description:
    'Retrieves the history of a channel. You must be a member of the channel or have the `preview-c-room` permission.\n\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.75.0 | Added offset property      |\n| 0.47.0  | Added                     |',
  operationId: 'get-api-v1-channels.history',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: OptionalRoomIdParamsSchema,
      roomName: OptionalRoomNameParamsSchema,
      sort: SortParamsSchema,
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      latest: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'latest',
            in: 'query',
            description:
              'The end of time range of messages to retrieve. The default value is the current date and time.',
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
            description: 'The start of the time range of messages to retrieve',
            schema: { type: 'string' },
            example: '2016-05-30T13:42:25.304Z',
            required: false,
          },
        }),
      inclusive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'inclusive',
            in: 'query',
            description:
              'Whether messages which land on the latest and oldest dates should be included. The default value is false.',
            schema: { type: 'boolean' },
            example: true,
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
            description: 'Whether thread messages should be included in the response',
            schema: { type: 'boolean' },
            example: true,
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
            description:
              'Whether the number of unread messages should be included. The default value is false.',
            schema: { type: 'boolean' },
            example: false,
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
                      identify: z
                        .object({
                          format: z.string().exactOptional(),
                          size: z
                            .object({
                              width: z.int().exactOptional(),
                              height: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
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
            Example: {
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
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChannelsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.info',
  tags: ['Channels'],
  summary: 'Get Channel Information',
  description:
    'Retrieves the information about the channel. This does not include archived channels. You must be a member of the channel.\n\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.48.0  | Added                  |',
  operationId: 'get-api-v1-channels.info',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ roomId: OptionalRoomIdParamsSchema, roomName: OptionalRoomNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  topic: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
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
                    .exactOptional()
                    .openapi({ required: [] }),
                  lm: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'testing',
                  fname: 'testing',
                  t: 'c',
                  msgs: 0,
                  usersCount: 2,
                  u: { _id: 'HKKPmF8rZh45GMHWH', username: 'marcos.defendi' },
                  customFields: {},
                  broadcast: false,
                  encrypted: false,
                  ts: '2020-05-21T13:14:07.070Z',
                  ro: false,
                  default: false,
                  sysMes: true,
                  _updatedAt: '2020-05-21T13:14:07.096Z',
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

export const postApiV1ChannelsInviteRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.invite',
  tags: ['Channels'],
  summary: 'Add Users to Channel',
  description:
    'Add a user or bulk users to a channel.\n\nFor a user to invite other users, they must match at least one of the following premises:\n- The user is a member of the channel and has the `add-user-to-joined-room` (Add user to any joined channel) permission.\n- The user has the `add-user-to-any-c-room` (Add user to any public channel) permission.\n\nYou can identify the channel by `roomId` or `roomName`, and the users either by ID (`userId`, `userIds`) or by username (`username`, `user`, `usernames`). You cannot mix IDs and usernames in the same request.\n\nUsers that do not exist are skipped and the valid users are invited. If none of the users you provide exist, the request fails with `invalid-user-invite-list`. Users who are already members of the channel are ignored, and the request still succeeds.\n\n### Changelog\n\n| Version | Description               |\n| ------- | ------------------------- |\n| 9.0.0   | Added the `userIds` and `usernames` parameters to invite multiple users in one request. |\n| 0.48.0  | Added                  |',
  operationId: 'post-api-v1-channels.invite',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The channel's ID. This parameter is required if no `roomName` is provided.",
                  example: 'nSYqWzZ4GsKTX4dyK',
                }),
              roomName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The channel's name. This parameter is required if no `roomId` is provided.",
                  example: 'general',
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user to invite. Cannot be combined with `username`, `user`, or `usernames`.',
                  example: 'ByehQjC44FwMeiLbX',
                }),
              userIds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of IDs of the users to invite. Cannot be combined with `username`, `user`, or `usernames`.',
                  example: ['ByehQjC44FwMeiLbX', 'Wq3kLm8TzR2vNpX5d'],
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The username of the user to invite. Cannot be combined with `userId` or `userIds`.',
                  example: 'john.doe',
                }),
              user: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The username of the user to invite. Alternative to `username`. Cannot be combined with `userId` or `userIds`.',
                  example: 'john.doe',
                }),
              usernames: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of usernames of the users to invite. Cannot be combined with `userId` or `userIds`.',
                  example: ['john.doe', 'jane.doe'],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invite by ID': { value: { roomId: 'nSYqWzZ4GsKTX4dyK', userId: 'ByehQjC44FwMeiLbX' } },
            'Invite multiple users by ID': {
              value: {
                roomId: 'nSYqWzZ4GsKTX4dyK',
                userIds: ['ByehQjC44FwMeiLbX', 'Wq3kLm8TzR2vNpX5d'],
              },
            },
            'Invite multiple users by username': {
              value: { roomName: 'general', usernames: ['john.doe', 'jane.doe'] },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  description: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  federated: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  lm: z.string().exactOptional(),
                  lastMessage: z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      groupable: z.boolean().exactOptional(),
                      blocks: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              blockId: z.string().exactOptional(),
                              callId: z.string().exactOptional(),
                              appId: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
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
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
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
            'Add bulk users': {
              value: {
                channel: {
                  _id: 'nSYqWzZ4GsKTX4dyK',
                  fname: 'testing',
                  _updatedAt: '2026-11-02T20:32:22.790Z',
                  name: 'testing',
                  t: 'c',
                  msgs: 2,
                  usersCount: 3,
                  u: { _id: 'uXquEbv7EkGHfBLa3', username: 'admin', name: 'Admin' },
                  ts: '2026-11-02T20:32:22.614Z',
                  ro: false,
                  default: false,
                  sysMes: true,
                },
                success: true,
              },
            },
            'Add a user': {
              value: {
                channel: {
                  _id: 'nSYqWzZ4GsKTX4dyK',
                  fname: 'testing',
                  _updatedAt: '2026-11-02T20:32:22.790Z',
                  name: 'testing',
                  t: 'c',
                  msgs: 1,
                  usersCount: 2,
                  u: { _id: 'uXquEbv7EkGHfBLa3', username: 'admin', name: 'Admin' },
                  ts: '2026-11-02T20:32:22.614Z',
                  ro: false,
                  default: false,
                  sysMes: true,
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
            'IDs and Usernames Combined': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: 'must NOT be valid',
              },
            },
            'User parameter required': {
              value: {
                success: false,
                error:
                  'Please provide "userId" or "username" or "userIds" or "usernames" as param [error-users-params-not-provided]',
                errorType: 'error-users-params-not-provided',
              },
            },
            'Not allowed': {
              value: {
                success: false,
                error: 'Not allowed [error-not-allowed]',
                errorType: 'error-not-allowed',
                details: { method: 'addUsersToRoom' },
              },
            },
            'No users to invite': {
              value: {
                success: false,
                error: 'invalid-user-invite-list',
                errorType: 'Cannot invite if no users are provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsJoinRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.join',
  tags: ['Channels'],
  summary: 'Join a Channel',
  description:
    'Join a public channel.\n\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.49.0  | Added                  |',
  operationId: 'post-api-v1-channels.join',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The channel ID.' }),
              joinCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The join code of the room. Channels can be password-protected. In that case, users must enter the password for access. See <a href='https://docs.rocket.chat/docs/channels#channel-information' target='_blank'>Channel information</a> for details.\nThe join code isn't needed if the user has the `join-without-join-code` permission.",
                }),
            })
            .openapi({ required: ['roomId'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMeiLbX', joinCode: '1234' } } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  topic: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
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
                    .exactOptional()
                    .openapi({ required: [] }),
                  lm: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                channel: {
                  _id: 'nxXKHF2o2nzKYtFMM',
                  name: 'test',
                  fname: 'test',
                  t: 'c',
                  msgs: 8,
                  usersCount: 2,
                  u: {
                    _id: 'rocketchat.internal.admin.test',
                    username: 'rocketchat.internal.admin.test',
                  },
                  customFields: {},
                  broadcast: false,
                  encrypted: false,
                  ts: '2019-01-16T12:00:04.783Z',
                  ro: false,
                  sysMes: true,
                  default: false,
                  _updatedAt: '2019-01-16T12:06:30.426Z',
                  joinCodeRequired: true,
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

export const postApiV1ChannelsKickRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.kick',
  tags: ['Channels'],
  summary: 'Remove User from Channel',
  description:
    'Remove a user from the channel.\n\nPermissions required:\n* `remove-user`: To remove a user from any room.\n* `kick-user-from-any-c-room`: To remove a user from a public channel. You also need the `remove-user` permission.\n\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.48.0  | Added                     |',
  operationId: 'post-api-v1-channels.kick',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's id" }),
              userId: z.string().openapi({ description: 'The id of the user to be removed.' }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'WDuJLFkjwk6L7LdFC', userId: 'rYhzFRd2QZjNwAAXX' } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  topic: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
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
                    .exactOptional()
                    .openapi({ required: [] }),
                  lm: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'invite-me',
                  t: 'c',
                  usernames: ['testing1'],
                  msgs: 0,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                  ts: '2016-12-09T15:08:58.042Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2016-12-09T15:22:40.656Z',
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

export const postApiV1ChannelsLeaveRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.leave',
  tags: ['Channels'],
  summary: 'Leave  Channel',
  description:
    'Leave a public channel. Permission required: `leave-c`\n### Changelog\n| Version | Description               |\n| ------- | ------------------------- |\n| 0.48.0  | Added                  |',
  operationId: 'post-api-v1-channels.leave',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description: 'The channel ID that you want to leave.',
                }),
            })
            .openapi({ required: [] }),
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'invite-me',
                  t: 'c',
                  usernames: ['testing2'],
                  msgs: 0,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                  ts: '2016-12-09T15:08:58.042Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2016-12-09T15:22:40.656Z',
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

export const getApiV1ChannelsListJoinedRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.list.joined',
  tags: ['Channels'],
  summary: 'Get List of Joined Channels',
  description:
    'Lists all the channels the authenticated user has joined. \n### Changelog\n| Version | Description                                  |\n| ------- | -------------------------------------------- |\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 0.62.0  | Add `query` parameter support.               |\n| 0.49.0  | Count and offset query parameters supported. |\n| 0.48.0  | Added                                        |',
  operationId: 'get-api-v1-channels.list.joined',
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
              channels: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      customFields: z.looseObject({}).exactOptional(),
                      description: z.string().exactOptional(),
                      broadcast: z.boolean().exactOptional(),
                      encrypted: z.boolean().exactOptional(),
                      federated: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      lm: z.string().exactOptional(),
                      lastMessage: z
                        .object({
                          _id: z.string().exactOptional(),
                          t: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          groupable: z.boolean().exactOptional(),
                          blocks: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  blockId: z.string().exactOptional(),
                                  callId: z.string().exactOptional(),
                                  appId: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
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
                        .exactOptional()
                        .openapi({ required: [] }),
                      topic: z.string().exactOptional(),
                      muted: z.array(z.looseObject({})).exactOptional(),
                      unmuted: z.array(z.string()).exactOptional(),
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
            Example: {
              value: {
                channels: [
                  {
                    _id: 'ByehQjC44FwMeiLbX',
                    name: 'invite-me',
                    t: 'c',
                    usernames: ['testing1'],
                    msgs: 0,
                    u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                    ts: '2016-12-09T15:08:58.042Z',
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2016-12-09T15:22:40.656Z',
                  },
                ],
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

export const getApiV1ChannelsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.list',
  tags: ['Channels'],
  summary: 'Get Channel List',
  description:
    'Lists all the channels in the workspace. Any of the following permissions are required:\n* `view-c-room`\n* `view-joined-room`\n\n### Changelog\n| Version | Description                                  |\n| ------- | -------------------------------------------- |\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 0.49.0  | Count and offset query parameters supported. |\n| 0.48.0  | Added                                        |',
  operationId: 'get-api-v1-channels.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'sort',
            description:
              'Sort the channels in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON object. The options are as follows:\n * `name`: Sort by the channel name. For example, `sort={"name":1}` (this is the default sorting mechanism).\n * `ts`: Sort by channel creation timestamp. For example, `sort={"ts":-1}`\n * `usersCount`: Sort by the number of users in the channel. For example, `sort={"usersCount":1}`',
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
              channels: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      customFields: z.looseObject({}).exactOptional(),
                      topic: z.string().exactOptional(),
                      broadcast: z.boolean().exactOptional(),
                      encrypted: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
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
                          groupable: z.boolean().exactOptional(),
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
                                  blockId: z.string().exactOptional(),
                                  appId: z.string().exactOptional(),
                                  elements: z
                                    .array(
                                      z
                                        .object({
                                          type: z.string().exactOptional(),
                                          text: z.string().exactOptional(),
                                          emoji: z.boolean().exactOptional(),
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
                      lm: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      federated: z.boolean().exactOptional(),
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
                channels: [
                  {
                    _id: 'GENERAL',
                    ts: '2024-02-14T14:34:49.365Z',
                    t: 'c',
                    name: 'general',
                    usernames: [],
                    msgs: 6,
                    usersCount: 6,
                    _updatedAt: '2024-03-26T17:40:18.321Z',
                    u: { _id: 'rocket.cat', username: 'rocket.cat', name: 'Rocket.Cat' },
                    default: true,
                  },
                  {
                    _id: '65fd8a6bf581e473b56471ba',
                    fname: 'test-channel',
                    _updatedAt: '2024-03-22T13:40:59.620Z',
                    customFields: {},
                    topic: '',
                    broadcast: false,
                    encrypted: false,
                    name: 'test-channel',
                    t: 'c',
                    msgs: 0,
                    usersCount: 1,
                    u: { _id: 'GdEsNbLxzoBgG8XoQ', username: 'apiadmin', name: 'apiadmin' },
                    ts: '2024-03-22T13:40:59.577Z',
                    ro: false,
                    default: false,
                    sysMes: true,
                  },
                ],
                count: 2,
                offset: 0,
                total: 3,
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

export const getApiV1ChannelsMembersRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.members',
  tags: ['Channels'],
  summary: 'Get Members of a Channel',
  description:
    'Lists all channel users. The list of elements a user can use to sort the list is limited. The current sortable element is: `username`.\n\nIf the channel is a broadcast channel, you need the `view-broadcast-member-list` permission.\n\n### Changelog\n| Version | Description                                  |\n| ------- | -------------------------------------------- |\n| 0.59.0  | Added                                        |',
  operationId: 'get-api-v1-channels.members',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: OptionalRoomIdParamsSchema,
      roomName: OptionalRoomNameParamsSchema,
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: "The user's status (search filter).",
            schema: { type: 'array', items: { type: 'string' }, example: "['online', 'away']" },
            required: false,
          },
          example: "['online', 'away']",
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Extra search filters to be applied to the fields defined in the `Accounts_SearchFields`setting.',
            schema: { type: 'string', example: 'my-nickname' },
            required: false,
          },
          example: 'my-nickname',
        }),
      sort: SortParamsSchema,
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
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
                      _updatedAt: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      nickname: z.string().exactOptional(),
                      avatarETag: z.string().exactOptional(),
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
                members: [
                  {
                    _id: 'rbAXPnMktTFbNpwtJ',
                    username: 'roxie',
                    status: 'offline',
                    _updatedAt: '2023-09-24T22:27:33.610Z',
                    name: 'test test',
                    nickname: 'baby girl',
                  },
                  {
                    _id: '5fRTXMt7DMJbpPJfh',
                    username: 'test.test',
                    status: 'offline',
                    _updatedAt: '2023-09-16T08:33:38.123Z',
                    name: 'Testtest',
                    avatarETag: 'GFoEi6wv3uAxnzDcD',
                    nickname: 'test.test',
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
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChannelsMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.messages',
  tags: ['Channels'],
  summary: 'Get Channel Messages',
  description:
    "Lists all the channel's messages. Permissions required: `view-c-room`, `view-joined-room`\n\n### Changelog\n\n| Version | Description                                  |\n| ------- | -------------------------------------------- |\n|9.0.0   | Removed the `query` parameter.       |\n| 7.0.0  | Added `mentionIds`, `starredIds`, `pinned` query parameters.|        \n| 0.59.0  | Added                                        |",
  operationId: 'get-api-v1-channels.messages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      offset: OffsetParamsSchema,
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
                      replies: z.array(z.string()).exactOptional(),
                      tcount: z.int().exactOptional(),
                      tlm: z.string().exactOptional(),
                      attachments: z.array(AttachmentSchema).exactOptional(),
                      editedAt: z.string().exactOptional(),
                      editedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      reactions: z.looseObject({}).exactOptional(),
                      t: z.string().exactOptional(),
                      _hidden: z.boolean().exactOptional(),
                      parent: z.string().exactOptional(),
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
                messages: [
                  {
                    _id: 'uASTuwBEu7SBDAxxh',
                    rid: '6513afeda2f73c7460e18c86',
                    msg: 'threaads produced links',
                    ts: '2023-09-27T04:36:47.522Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-09-27T04:36:47.698Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [{ type: 'PLAIN_TEXT', value: 'threaads produced links' }],
                      },
                    ],
                  },
                  {
                    _id: 'B7Yms4bCvgJsitrBq',
                    rid: '6513afeda2f73c7460e18c86',
                    msg: 'always do',
                    ts: '2023-09-27T04:34:38.818Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-09-27T04:34:38.900Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [
                      { type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'always do' }] },
                    ],
                  },
                  {
                    _id: '3rfQYmS8MzCKnQbcu',
                    rid: '6513afeda2f73c7460e18c86',
                    msg: '',
                    ts: '2023-09-27T04:34:34.259Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-09-27T04:36:38.258Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    replies: ['rbAXPnMktTFbNpwtJ'],
                    tcount: 0,
                    tlm: '2023-09-27T04:34:50.746Z',
                    attachments: [],
                    editedAt: '2023-09-27T04:36:19.494Z',
                    editedBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                    reactions: {},
                    t: 'rm',
                  },
                  {
                    _id: '6513b143a2f73c7460e18c88',
                    rid: '6513afeda2f73c7460e18c86',
                    msg: 'test messages',
                    ts: '2023-09-27T04:34:34.259Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-09-27T04:36:19.486Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [{ type: 'PLAIN_TEXT', value: 'test messages' }],
                      },
                    ],
                    replies: ['rbAXPnMktTFbNpwtJ'],
                    tcount: 1,
                    tlm: '2023-09-27T04:34:50.746Z',
                    _hidden: true,
                    parent: '3rfQYmS8MzCKnQbcu',
                    editedAt: '2023-09-27T04:36:19.485Z',
                    editedBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  },
                ],
                count: 4,
                offset: 0,
                total: 4,
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

export const getApiV1ChannelsModeratorsRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.moderators',
  tags: ['Channels'],
  summary: 'Get Channel Moderators',
  description:
    '\nList all the moderators in a channel.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.70.0 | Added        |',
  operationId: 'get-api-v1-channels.moderators',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ roomId: OptionalRoomIdParamsSchema, roomName: OptionalRoomNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              moderators: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                moderators: [{ _id: 'rocket.cat', username: 'rocket.cat', name: 'Rocket.Cat' }],
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

export const getApiV1ChannelsOnlineRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.online',
  tags: ['Channels'],
  summary: 'List Online Users in a Channel',
  description:
    'List all online users in a particular channel. \n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Made the `_id` parameter required.       |\n|0.52.0   | Added       |\n|7.0.0   | Replaced `query` parameter with `_id` parameter       |',
  operationId: 'get-api-v1-channels.online',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'query',
            description: "The channel's id.",
            required: true,
            schema: { type: 'string', example: '5HmCfpoB7jp2uibTC' },
          },
          example: '5HmCfpoB7jp2uibTC',
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
              online: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                online: [
                  { _id: '47cRd58HnWwpqxhaZ', username: 'test' },
                  { _id: 'BsxzC22xQ43taWdff', username: 'uniqueusername' },
                ],
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

export const postApiV1ChannelsOpenRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.open',
  tags: ['Channels'],
  summary: 'Add Channel to User List',
  description:
    "Add a channel back to the user's list of channels in the workspace's sidebar.\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `query` parameter.       |\n|0.48.0   | Added       |",
  operationId: 'post-api-v1-channels.open',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ roomId: z.string().openapi({ description: "The channel's ID." }) })
            .openapi({ required: ['roomId'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMeiLbX' } } },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1ChannelsRemoveLeaderRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.removeLeader',
  tags: ['Channels'],
  summary: 'Remove Channel  Leader',
  description:
    'Remove the `leader` role from a user in a channel. \n\nPermission required: `set-leader` .\n\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n|0.75.0  | Added       |\n',
  operationId: 'post-api-v1-channels.removeLeader',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's id" }),
              userId: z.string().openapi({ description: "The user's id" }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'oCHkav5Zf6vmpu2W2' } },
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
            'User is not a leader': {
              value: {
                success: false,
                error: 'User is not a leader [error-user-not-leader]',
                errorType: 'error-user-not-leader',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsRemoveModeratorRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.removeModerator',
  tags: ['Channels'],
  summary: 'Remove Channel Moderator',
  description:
    'Remove the `moderator` role from a user in a channel.\n\nPermission required: `set-moderator`.\n\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n|0.49.4  | Added       |\n',
  operationId: 'post-api-v1-channels.removeModerator',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's id" }),
              userId: z.string().openapi({ description: "The user's id" }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'oCHkav5Zf6vmpu2W2' } },
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
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'User is not a moderator': {
              value: {
                success: false,
                error: 'User is not a moderator [error-user-not-moderator]',
                errorType: 'error-user-not-moderator',
                details: { method: 'removeRoomModerator' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsRemoveOwnerRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.removeOwner',
  tags: ['Channels'],
  summary: 'Remove Channel Owner',
  description:
    'Remove the `owner` role from a user in a channel. \n\nPermission required:`set-owner`.\n\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n|0.49.4  | Added       |\n',
  operationId: 'post-api-v1-channels.removeOwner',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's id" }),
              userId: z.string().openapi({ description: "The user's id" }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'oCHkav5Zf6vmpu2W2' } },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1ChannelsRenameRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.rename',
  tags: ['Channels'],
  summary: 'Rename a Channel',
  description:
    'Change the name of a channel. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.48.0  | Added        | ',
  operationId: 'pos-api-v1-channels.rename',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's ID." }),
              name: z
                .string()
                .openapi({
                  description:
                    'The new name of the channel. It can not be the same as the current name.',
                }),
            })
            .openapi({ required: ['roomId', 'name'] }),
          examples: { Example: { value: { roomId: 'WDuJLFkjwk6L7LdFC', name: 'newName' } } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'new-name',
                  t: 'c',
                  usernames: ['testing1'],
                  msgs: 4,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                  ts: '2016-12-09T15:08:58.042Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2016-12-09T15:57:44.686Z',
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
                .object({ method: z.string().exactOptional(), action: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'No permission': {
              value: {
                success: false,
                error: 'Editing room is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
                details: { method: 'saveRoomSettings', action: 'Editing_room' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ChannelsRolesRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.roles',
  tags: ['Channels'],
  summary: 'Get Channel Roles',
  description:
    "Lists all user's roles in the channel.\n\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n|0.65.0  | Added        |",
  operationId: 'get-api-v1-channels.roles',
  request: {
    query: z.object({ roomId: OptionalRoomIdParamsSchema, roomName: OptionalRoomNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              roles: z
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
                      roles: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                roles: [
                  {
                    _id: 'rGNoXwYuZshq9FENQ',
                    rid: 'WDuJLFkjwk6L7LdFC',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                    roles: ['owner'],
                  },
                  {
                    _id: '64ef8a982c26843a68c1f7ae',
                    rid: 'WDuJLFkjwk6L7LdFC',
                    u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.test', name: 'Testtest' },
                    roles: ['leader'],
                  },
                ],
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

export const postApiV1ChannelsSetAnnouncementRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setAnnouncement',
  tags: ['Channels'],
  summary: 'Set Channel Announcement',
  description:
    'Set an announcement for the channel. Permission required: `edit-room`\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n|0.63.0  | Added        |',
  operationId: 'post-api-v1-channels.setAnnouncement',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's id" }),
              announcement: z
                .string()
                .openapi({ description: 'The announcement to set for the channel.' }),
            })
            .openapi({ required: ['roomId', 'announcement'] }),
          examples: {
            Success: {
              value: { roomId: 'WDuJLFkjwk6L7LdFC', announcement: 'Test out everything' },
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
              announcement: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { Example: { value: { announcement: 'Test out everything', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsSetCustomFieldsRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setCustomFields',
  tags: ['Channels'],
  summary: 'Set Channel Custom Fields',
  description:
    "Sets the custom fields for a channel. Permission required: `edit-room`.\n\nSee the <a href='https://docs.rocket.chat/docs/custom-fields' target='_blank'>Configure Custom Fields for Users</a> document for configuration information.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.62.0  | Added        |",
  operationId: 'post-api-v1-channels.setCustomFields',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The channel's ID. Alternatively, enter the `roomName` parameter and provide the room's name as the value.",
                }),
              customFields: z
                .object({ organization: z.string().exactOptional() })
                .openapi({
                  description: 'The custom fields to set for the channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['roomId', 'customFields', 'organization'] }),
          examples: {
            Example: { value: { roomId: 'GENERAL', customFields: { organization: 'tra-la-la' } } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  customFields: z
                    .object({ organization: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  topic: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
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
                    .exactOptional()
                    .openapi({ required: [] }),
                  lm: z.string().exactOptional(),
                  announcement: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                channel: {
                  _id: 'WDuJLFkjwk6L7LdFC',
                  fname: 'new',
                  customFields: { organization: 'tra-la-la' },
                  topic: '',
                  broadcast: false,
                  encrypted: false,
                  name: 'new',
                  t: 'c',
                  msgs: 72,
                  usersCount: 45,
                  u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  ts: '2023-04-05T22:34:38.936Z',
                  ro: false,
                  default: false,
                  sysMes: true,
                  _updatedAt: '2023-09-27T05:24:34.363Z',
                  lastMessage: {
                    _id: 'mBfC3sbNhfwcL4AQu',
                    rid: 'WDuJLFkjwk6L7LdFC',
                    msg: 'It should be good',
                    ts: '2023-09-16T07:37:59.691Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test', name: 'test test' },
                    _updatedAt: '2023-09-16T07:37:59.815Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [{ type: 'PLAIN_TEXT', value: 'It should be good' }],
                      },
                    ],
                  },
                  lm: '2023-09-16T07:37:59.691Z',
                  announcement: 'Test out everything',
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

export const postApiV1ChannelsSetDefaultRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setDefault',
  tags: ['Channels'],
  summary: 'Set Default Channel',
  description:
    'Set whether the channel is a default channel or not. All new users will automatically join this channel. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.66.0  | Added        |',
  operationId: 'post-api-v1-channels.setDefault',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The channel ID.' }),
              default: z
                .boolean()
                .openapi({ description: 'Boolean of whether the room is default or not.' }),
            })
            .openapi({ required: ['roomId', 'default'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMeiLbX', default: true } } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  joinCodeRequired: z.boolean().exactOptional(),
                  muted: z.array(z.looseObject({})).exactOptional(),
                  default: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'testing0',
                  t: 'c',
                  msgs: 0,
                  u: { _id: 'aiPqNoGkjpNDiRx6d', username: 'goose160' },
                  ts: '2017-01-05T18:02:50.754Z',
                  ro: true,
                  sysMes: true,
                  _updatedAt: '2017-01-05T19:02:24.429Z',
                  usernames: ['goose160', 'graywolf336'],
                  joinCodeRequired: true,
                  muted: [],
                  default: true,
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

export const postApiV1ChannelsSetDescriptionRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setDescription',
  tags: ['Channels'],
  summary: 'Set Channel Description',
  description:
    'Set the description for a channel. Permission required: `edit-room`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.48.4  | Added        |',
  operationId: 'post-api-v1-channels.setDescription',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The channel ID.' }),
              description: z
                .string()
                .openapi({ description: 'The description to set for the channel.' }),
            })
            .openapi({ required: ['roomId', 'description'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', description: 'Test out everything' } },
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
              description: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { Success: { value: { description: 'Testing the room', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsSetJoinCodeRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setJoinCode',
  tags: ['Channels'],
  summary: 'Set Channel Join Code',
  description:
    'Set the code required to join the channel. If it is set, users must use the join code to successfully join the channel. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.49.0  | Added        |',
  operationId: 'post-api-v1-channels.setJoinCode',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's ID." }),
              joinCode: z
                .string()
                .openapi({
                  description:
                    'The join code that will be required for any user to join this channel.',
                }),
            })
            .openapi({ required: ['roomId', 'joinCode'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMeiLbX', joinCode: '87hsyi9' } } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  customFields: z
                    .object({ organization: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  topic: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
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
                    .exactOptional()
                    .openapi({ required: [] }),
                  lm: z.string().exactOptional(),
                  announcement: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  joinCodeRequired: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                channel: {
                  _id: 'WDuJLFkjwk6L7LdFC',
                  fname: 'new',
                  customFields: { organization: 'tra-la-la' },
                  topic: '',
                  broadcast: false,
                  encrypted: false,
                  name: 'new',
                  t: 'c',
                  msgs: 73,
                  usersCount: 45,
                  u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  ts: '2023-04-05T22:34:38.936Z',
                  ro: false,
                  default: true,
                  sysMes: true,
                  _updatedAt: '2023-09-27T05:40:39.687Z',
                  lastMessage: {
                    _id: 'mBfC3sbNhfwcL4AQu',
                    rid: 'WDuJLFkjwk6L7LdFC',
                    msg: 'It should be good',
                    ts: '2023-09-16T07:37:59.691Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test', name: 'test test' },
                    _updatedAt: '2023-09-16T07:37:59.815Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [{ type: 'PLAIN_TEXT', value: 'It should be good' }],
                      },
                    ],
                  },
                  lm: '2023-09-16T07:37:59.691Z',
                  announcement: 'Test out everything',
                  description: 'Testing the room',
                  joinCodeRequired: true,
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

export const postApiV1ChannelsSetPurposeRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setPurpose',
  tags: ['Channels'],
  summary: 'Set Channel Purpose',
  description:
    'Set the purpose or description of the channel.\nIt is the same as Set Channel Description. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.48.0  | Added        |',
  operationId: 'post-api-v1-channels.setPurpose',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's id" }),
              purpose: z
                .string()
                .openapi({ description: 'The description to set for the channel.' }),
            })
            .openapi({ required: ['roomId', 'purpose'] }),
          examples: { Example: { value: { roomId: 'WDuJLFkjwk6L7LdFC', purpose: 'greetings' } } },
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
            .object({ purpose: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { Success: { value: { purpose: 'greetings', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsSetReadOnlyRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setReadOnly',
  tags: ['Channels'],
  summary: 'Set Channel ReadOnly',
  description:
    'Set a channel to be read-only or not. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.49.0  | Added        |',
  operationId: 'post-api-v1-channels.setReadOnly',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The channel ID.' }),
              readOnly: z
                .boolean()
                .openapi({ description: 'Boolean of whether the room is read-only or not.' }),
            })
            .openapi({ required: ['roomId', 'readOnly'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMeiLbX', readOnly: true } } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  joinCodeRequired: z.boolean().exactOptional(),
                  muted: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'testing0',
                  t: 'c',
                  msgs: 0,
                  u: { _id: 'aiPqNoGkjpNDiRx6d', username: 'goose160' },
                  ts: '2017-01-05T18:02:50.754Z',
                  ro: true,
                  sysMes: true,
                  _updatedAt: '2017-01-05T19:02:24.429Z',
                  usernames: ['goose160', 'graywolf336'],
                  joinCodeRequired: true,
                  muted: [],
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

export const postApiV1ChannelsSetTopicRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setTopic',
  tags: ['Channels'],
  summary: 'Set Channel Topic',
  description:
    'Set the topic for a channel. Permission required: `edit-room`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.13.0  | Added        |',
  operationId: 'post-api-v1-channels.setTopic',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's ID." }),
              topic: z.string().openapi({ description: "The channel's topic" }),
            })
            .openapi({ required: ['roomId', 'topic'] }),
          examples: {
            Example: {
              value: { roomId: 'WDuJLFkjwk6L7LdFC', topic: 'Discuss all of the testing' },
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
          examples: { Success: { value: { topic: 'Discuss all of the testing', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsSetTypeRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.setType',
  tags: ['Channels'],
  summary: 'Set Channel Type',
  description:
    'Set the channel type. The channel type can be either `c` (public) or `p` (private). The following permissions are required:\n* `create-c`: To change a private group to a public channel.\n* `create-p`: To change a public channel to a private room.\n\nFor ABAC-managed private rooms, changing the type from `p` to `c` is rejected with `error-action-not-allowed`.\nWhen the type changes to `c` (public) and the room has ABAC attributes, all ABAC attributes on the room are cleared as part of the conversion.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.5.0   | Added ABAC behavior for `p` -> `c`: ABAC-managed private rooms are rejected, and successful conversions to public clear room ABAC attributes. |\n| 0.49.0  | Added       |',
  operationId: 'post-api-v1-channels.setType',
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
                .openapi({
                  description:
                    "The channel's ID. Alternatively, enter the `channelName` parameter and provide the channel's name as the value.",
                }),
              type: z
                .string()
                .openapi({
                  description:
                    "The channel's type. The type of room this channel should be, either c or p. \n\n`c` is for channel and `p` is for private.",
                }),
            })
            .openapi({ required: ['roomId', 'type'] }),
          examples: { Example: { value: { roomId: 'WDuJLFkjwk6L7LdFC', type: 'p' } } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  joinCodeRequired: z.boolean().exactOptional(),
                  muted: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'testing0',
                  t: 'p',
                  msgs: 0,
                  u: { _id: 'aiPqNoGkjpNDiRx6d', username: 'goose160' },
                  ts: '2017-01-05T18:02:50.754Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2017-01-05T19:02:24.429Z',
                  usernames: ['goose160', 'graywolf336'],
                  joinCodeRequired: true,
                  muted: [],
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
                .object({ method: z.string().exactOptional(), action: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'ABAC-managed room conversion blocked': {
              value: {
                success: false,
                error:
                  'Changing an ABAC managed private room to public is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
                details: { method: 'saveRoomSettings', action: 'Change_Room_Type' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ChannelsUnarchiveRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.unarchive',
  tags: ['Channels'],
  summary: 'Unarchive a Channel',
  description:
    'Unarchive a channel. Permission required: `unarchive-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.48.0   | Added       |',
  operationId: 'post-api-v1-channels.unarchive',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description: 'The channel ID that you want to unarchive.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const getApiV1ChannelsGetAllUserMentionsByChannelRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.getAllUserMentionsByChannel',
  tags: ['Channels'],
  summary: 'Get User Mentions in a Channel',
  description:
    'Get all the mentions of the authenticated user in a channel.\n\n### Changelog\n| Version | Description|\n| ------- | -----------|\n|9.0.0   | Removed the `query` parameter.       |\n|0.63.0  | Added       |',
  operationId: 'get-api-v1-channels.getAllUserMentionsByChannel',
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
              mentions: z
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
                                      value: z
                                        .object({
                                          type: z.string().exactOptional(),
                                          value: z.string().exactOptional(),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
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
            Success: {
              value: {
                mentions: [
                  {
                    _id: 'mPmJ6cPAazzphJmGe',
                    rid: '6513afeda2f73c7460e18c86',
                    msg: '@roxie',
                    ts: '2023-09-27T20:32:58.994Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    _updatedAt: '2023-09-27T20:32:59.171Z',
                    urls: [],
                    mentions: [
                      {
                        _id: 'rbAXPnMktTFbNpwtJ',
                        username: 'roxie',
                        name: 'test test',
                        type: 'user',
                      },
                    ],
                    channels: [],
                    md: [
                      {
                        type: 'PARAGRAPH',
                        value: [
                          { type: 'MENTION_USER', value: { type: 'PLAIN_TEXT', value: 'roxie' } },
                        ],
                      },
                    ],
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

export const getApiV1ChannelsGetIntegrationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/channels.getIntegrations',
  tags: ['Channels'],
  summary: 'Get Channel Integrations',
  description:
    "Retrieves the integrations that the channel has.\nThe endpoint requires at least one of the following integration permissions: \n- `manage-incoming-integrations`\n- `manage-own-incoming-integrations`\n- `manage-outgoing-integrations`\n- `manage-own-outgoing-integrations`. \n\nIt will return the integrations based on the user's permission. \n\n### Changelog\n| Version | Description                                     |\n| ------- | -------------------------------------------------- |\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 1.1.0   | Separate permissions in `incoming` and `outgoing`. |\n| 0.49.0  | Added                                              |",
  operationId: 'get-api-v1-channels.getIntegrations',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      offset: OffsetParamsSchema,
      sort: SortParamsSchema,
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
              integrations: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      username: z.string().exactOptional(),
                      alias: z.string().exactOptional(),
                      avatar: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      triggerWords: z.array(z.string()).exactOptional(),
                      urls: z.array(z.string()).exactOptional(),
                      token: z.string().exactOptional(),
                      script: z.string().exactOptional(),
                      scriptEnabled: z.boolean().exactOptional(),
                      impersonateUser: z.boolean().exactOptional(),
                      scriptCompiled: z.string().exactOptional(),
                      scriptError: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      userId: z.string().exactOptional(),
                      channel: z.array(z.looseObject({})).exactOptional(),
                      _createdAt: z.string().exactOptional(),
                      _createdBy: z
                        .object({
                          username: z.string().exactOptional(),
                          _id: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                integrations: [
                  {
                    _id: 'WMQDChpnYTRmFre9h',
                    enabled: true,
                    username: 'rocket.cat',
                    alias: 'Guggy',
                    avatar: 'http://res.guggy.com/logo_128.png',
                    name: 'Guggy',
                    triggerWords: ['!guggy', 'guggy', 'gif+'],
                    urls: ['http://text2gif.guggy.com/guggify'],
                    token: '8DFS89DMKLWEN',
                    script: "const config = {color: '#ffffff'};class Script{}",
                    scriptEnabled: true,
                    impersonateUser: false,
                    scriptCompiled:
                      'function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor));',
                    scriptError: '',
                    type: 'webhook-outgoing',
                    userId: 'rocket.cat',
                    channel: [],
                    _createdAt: '2017-01-05T17:06:05.660Z',
                    _createdBy: { username: 'graywolf336', _id: 'R4jgcQaQhvvK6K3iY' },
                    _updatedAt: '2017-01-05T17:06:05.660Z',
                  },
                ],
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

export const postApiV1ChannelsConvertToTeamRoute = createRoute({
  method: 'post',
  path: '/api/v1/channels.convertToTeam',
  tags: ['Channels'],
  summary: 'Convert Channel to Team',
  description:
    'Convert a channel to a team.\n\nPermissions required: `create-team`, `edit-room`. Both permissions are checked against the target channel, whether you identify it by `channelId` or `channelName`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.7.0   | Enforced room permission checks regardless of whether the channel is identified by ID or name. |\n| 3.13.0  | Added |',
  operationId: 'post-api-v1-channels.convertToTeam',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'channelId')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['channelId'] }),
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'channelName')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['channelName'] }),
          ]),
          examples: {
            'Convert channel by ID': { value: { channelId: '6513afeda2f73c7460e18c86' } },
            'Convert channel by name': { value: { channelName: 'messages' } },
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
              team: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  type: z.int().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  roomId: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Channel converted to team': {
              value: {
                team: {
                  _id: '65149c7ea2f73c7460e18cab',
                  name: 'messages',
                  type: 0,
                  createdAt: '2023-09-27T21:19:58.972Z',
                  createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  _updatedAt: '2023-09-27T21:19:58.972Z',
                  roomId: '6513afeda2f73c7460e18c86',
                },
                success: true,
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing channel permissions': { value: { success: false, error: 'forbidden' } },
          },
        },
      },
    },
  },
})

export const postApiV1RoomsSaveNotificationRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.saveNotification',
  tags: ['Rooms'],
  summary: 'Set Room Notifications',
  description:
    "Set the <a href='https://docs.rocket.chat/docs/room-actions#manage-room-notifications' target='_blank'>notification settings</a> of a specific room.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|0.63.0  | Added        |",
  operationId: 'post-api-v1-rooms.saveNotification',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: "The channel's id" }),
              notifications: z
                .object({
                  desktopNotifications: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The value for desktop notifications. The options are: \n- nothing\n- mentions\n- all\n- default',
                    }),
                  disableNotifications: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "The value to disable/enable channel's notifications. \n\nThe options are:\n- 0\n- 1",
                    }),
                  emailNotifications: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The value for email notifications. \nThe options are:\n- nothing\n- mentions\n- all\n- default',
                    }),
                  audioNotificationValue: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The value for audio notification sound.' }),
                  desktopNotificationDuration: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The value for desktop notification duration.' }),
                  audioNotifications: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The value for audio notifications. \n\nThe options are:\n- nothing\n- mentions\n- all\n- default',
                    }),
                  unreadAlert: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The value for unread alerts notifications. \n\nThe options are:\n- nothing\n- mentions\n- all\n- default',
                    }),
                  hideUnreadStatus: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The value to disable/enable number of unread messages. \nThe options are:\n- 0\n- 1',
                    }),
                  mobilePushNotifications: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The value for mobile push notifications. \n\nThe options are:\n- nothing\n- mentions\n- all\n- default',
                    }),
                })
                .openapi({
                  description: 'The object that contains the following parameters.',
                  required: [],
                }),
            })
            .openapi({ required: ['roomId', 'notifications'] }),
          examples: {
            Example: {
              value: {
                roomId: '5of4weEXaH7yncxz9',
                notifications: {
                  desktopNotifications: 'all',
                  disableNotifications: 0,
                  emailNotifications: 'nothing',
                  audioNotificationValue: 'beep',
                  desktopNotificationDuration: '2',
                  audioNotifications: 'all',
                  unreadAlert: 'nothing',
                  hideUnreadStatus: 0,
                  mobilePushNotifications: 'mentions',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1RoomsSaveDraftRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.saveDraft',
  tags: ['Rooms'],
  summary: 'Save Room Draft',
  description:
    "Save or clear the authenticated user's message draft for a room or an existing thread. The user must have a subscription to the room.\n\nTo save a room draft, omit `tmid`. To save a thread draft, provide the ID of the thread's main message in `tmid`. Send an empty `draft` to clear the corresponding room or thread draft. The draft cannot exceed the workspace's `Message_MaxAllowedSize` setting.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.8.0   | Added the optional `tmid` parameter to save thread drafts |\n| 8.5.0   | Added |",
  operationId: 'post-api-v1-rooms.saveDraft',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              rid: z.string().min(1).openapi({ description: 'The room ID.' }),
              draft: z
                .string()
                .openapi({
                  description: 'The draft text. Send an empty string to clear the draft.',
                }),
              tmid: z
                .string()
                .regex(/^[^.$]+$/)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    "The ID of the thread's main message. Omit this parameter to save or clear the main room draft.",
                }),
            })
            .openapi({ required: ['rid', 'draft'] }),
          examples: {
            'Save room draft': { value: { rid: 'GENERAL', draft: 'Remember to share the report' } },
            'Save thread draft': {
              value: {
                rid: 'GENERAL',
                draft: 'I will check this and reply',
                tmid: '7aDSXtjMA3KPLxLjt',
              },
            },
            'Clear thread draft': {
              value: { rid: 'GENERAL', draft: '', tmid: '7aDSXtjMA3KPLxLjt' },
            },
          },
        },
      },
      required: true,
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
            'Invalid subscription': {
              value: {
                success: false,
                error: 'Invalid subscription [error-invalid-subscription]',
                errorType: 'error-invalid-subscription',
              },
            },
            'Draft exceeds maximum size': {
              value: { success: false, error: 'error-message-size-exceeded' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RoomsAdminRoomsRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.adminRooms',
  tags: ['Rooms'],
  summary: 'Get All Room Admins',
  description:
    'Retrieves all rooms and admin information.\n\nPermission required: `view-room-administration`\n\n### Changelog\n| Version | Description  |\n| ------- |--------------|\n| 8.7.0  | Restored `customFields` in the response |\n| 2.4.0  | Added         |',
  operationId: 'get-api-v1-rooms.adminRooms',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            description:
              'The room types. The possible room types are:\n - `d`: Direct messages\n - `c`: Public channel\n - `p`: Private channel\n - `discussions`: Team or channel discussions\n - `teams`: Workspace teams\n - `l`: Livechat\n - `v`: Omnichannel VoIP rooms',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'The rooms name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'sort',
            description:
              'Sort the channels in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON object. The options are as follows:\n * `ts`: Sort by creation timestamp. For example, `sort={"ts":-1}`\n * `usersCount`: Sort by number of users. For example, `sort={"usersCount":1}`\n * `name`: Sort by the room name. For example, `sort={"name":1}`',
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
              rooms: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      broadcast: z.boolean().exactOptional(),
                      federated: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ro: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      topic: z.string().exactOptional(),
                      announcement: z.string().exactOptional(),
                      customFields: z
                        .looseObject({})
                        .exactOptional()
                        .openapi({ description: 'The custom fields set on the room.' }),
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
                rooms: [
                  {
                    _id: '654c9d1ca2f73c7460e1918b',
                    fname: 'animalGeography',
                    topic: '',
                    broadcast: false,
                    name: 'animalGeography',
                    t: 'p',
                    msgs: 4,
                    usersCount: 1,
                    u: { _id: 'CkCPNcvsvCDfmWLqC', username: 'kim.jane', name: 'kim.jane' },
                    ro: false,
                    default: false,
                    customFields: { department: 'engineering', priority: 'high' },
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

export const postApiV1RoomsCleanHistoryRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.cleanHistory',
  tags: ['Rooms'],
  summary: 'Clear Room History',
  description:
    "Cleans up a room by removing messages from the provided time range. For details, see the <a href='https://docs.rocket.chat/docs/room-actions#prune-messages-from-a-room' target='_blank'>Prune messages from a room</a> section.\n\nPermission required: `clean-channel-history`\n\n### Changelog\n| Version | Description            |\n| ------- | ---------------------- |\n| 0.64.0  | Added                  |\n| 0.67.0  | Added fields `limit`, `excludePinned`, `filesOnly` and `users` |",
  operationId: 'get-api-v1-rooms.cleanHistory',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The room ID.' }),
              latest: z.string().openapi({ description: 'The end of time range of messages.' }),
              oldest: z
                .string()
                .openapi({ description: 'The start of the time range of messages.' }),
              inclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether messages which land on the latest and oldest dates should be included. By default, the value is false.',
                }),
              excludePinned: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether pinned messages should be deleted. By default, the value is false.',
                }),
              filesOnly: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to only delete files and keep messages intact. By default, the value is false.',
                }),
              users: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Specific set of users whose content to delete. By default, the value is [], that is, everyone.',
                }),
              limit: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The amount of messages to prune. By default, the value is 0 (all).',
                }),
              ignoreDiscussion: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Determines if messages from discussions should be pruned. By default, the value is true.',
                }),
              ignoreThreads: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Determines if messages from threads should be pruned. By default, the value is true.',
                }),
            })
            .openapi({ required: ['roomId', 'latest', 'oldest'] }),
          examples: {
            Example: {
              value: {
                roomId: 'roomId',
                latest: '2016-12-09T13:42:25.304Z',
                oldest: '2016-08-30T13:42:25.304Z',
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const getApiV1RoomsHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.history',
  tags: ['Rooms'],
  summary: 'Get Room History',
  description:
    'Returns the message history of a room of any type, with cursor-based pagination. Hidden system messages are excluded.\n\nWhen the **Allow Anonymous Read** (`Accounts_AllowAnonymousRead`) setting is enabled, public channels can be read without authentication.\n\nThis endpoint replaces the `loadHistory`, `loadNextMessages`, and `loadSurroundingMessages` Realtime API methods, which were removed in 9.0.0.\n\nPermission required: `preview-c-room` (only to read a public channel you have not joined)\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |',
  operationId: 'get-api-v1-rooms.history',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The room ID. You must have access to the room.',
            required: true,
            schema: { type: 'string' },
            example: '6GFJ3tbmHiyHbahmC',
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            description:
              'The number of messages to return. The default is 20. The value is capped by the **Max Record Amount** (`API_Upper_Count_Limit`) setting.',
            required: false,
            schema: { type: 'integer', minimum: 1, default: 20 },
            example: 20,
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
              'The `cursor.previous` value from a previous response. Returns the messages older than that position. If `cursor.previous` is `null`, there are no older messages. Cannot be combined with `next` or `aroundId`.',
            required: false,
            schema: { type: 'string' },
            example: '1790157600000',
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
              'The `cursor.next` value from a previous response. Returns the messages newer than that position. If `cursor.next` is `null`, there are no newer messages. Cannot be combined with `previous` or `aroundId`.',
            required: false,
            schema: { type: 'string' },
            example: '1790157900000',
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
              'The ID of a message in the room. It loads messages centered around that message, including the message itself. Use it to jump to a specific message, such as a quoted message or a search result. Cannot be combined with `next` or `previous`.',
            required: false,
            schema: { type: 'string' },
            example: 'Xq8sLpW3nZr2TmKeA',
          },
        }),
      lastSeen: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'lastSeen',
            in: 'query',
            description:
              "An ISO 8601 date-time for the user's last-read position. It does not limit the returned messages. When the oldest returned message is newer than this value, the response includes `firstUnread` and `unreadNotLoaded`.",
            required: false,
            schema: { type: 'string', format: 'date-time' },
            example: '2026-09-23T09:00:00.000Z',
          },
        }),
      showThreadMessages: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'showThreadMessages',
            in: 'query',
            description:
              'Whether to include thread replies that were not also sent to the room. The default is `true`.',
            required: false,
            schema: { type: 'boolean', default: true },
            example: true,
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
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'The messages, ordered newest first.' }),
              cursor: z
                .object({
                  next: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'The cursor for newer messages, or `null` if there are none.',
                    }),
                  previous: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'The cursor for older messages, or `null` if there are none.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              firstUnread: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'The oldest unread message that was not loaded in this response. Returned only when `lastSeen` is provided and unread messages exist beyond the returned messages.',
                }),
              unreadNotLoaded: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The number of unread messages newer than `lastSeen` that were not loaded in this response.',
                }),
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
                    rid: '6GFJ3tbmHiyHbahmC',
                    msg: 'Thanks, I will take a look this afternoon.',
                    ts: '2026-09-23T10:00:00.000Z',
                    u: { _id: 'kP3wQz8LmNvT5rXyB', username: 'sam.okafor', name: 'Sam Okafor' },
                    _updatedAt: '2026-09-23T10:00:00.000Z',
                    mentions: [],
                    channels: [],
                  },
                ],
                cursor: { next: null, previous: '1790157600000' },
                unreadNotLoaded: 0,
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
            'Cursor Conflict': {
              value: {
                success: false,
                error:
                  'Only one of "next", "previous" and "aroundId" can be provided [error-cursor-conflict]',
                errorType: 'error-cursor-conflict',
              },
            },
            'Invalid Cursor': {
              value: {
                success: false,
                error: 'Invalid pagination cursor [error-invalid-cursor]',
                errorType: 'error-invalid-cursor',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description:
        'Forbidden. You cannot access the room, or the room is a public channel that you have not joined and you do not have the `preview-c-room` permission.',
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
      description:
        'Not Found. The room does not exist, or the message in `aroundId` is not a visible message in the room.',
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

export const getApiV1RoomsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.info',
  tags: ['Rooms'],
  summary: 'Get Room Information',
  description:
    'Retrieves the information about the room.\n\nUsers with the `view-room-administration` permission can also retrieve public and private rooms they are not a member of, except rooms managed by ABAC. Users without this permission who request a private room they are not a member of receive a `400` error with `not-allowed`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `fields` parameter. Users with the `view-room-administration` permission can read public and private rooms they are not a member of, except rooms managed by ABAC.       |\n|0.72.0   | Added       |',
  operationId: 'get-api-v1-rooms.info',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({ roomId: OptionalRoomIdParamsSchema, roomName: OptionalRoomNameParamsSchema }),
  },
  responses: {
    200: {
      description:
        "OK\n\nThe response includes the following objects:\n* `parent`: Represents the parent of a room. For discussions, this is the room where the discussion was created, identified by `prid`. For rooms inside a team, the parent will be the team's main room, identified by `team.roomId`. For other rooms, this property is undefined.\n* `team`: Represents the team a room is part of. For rooms inside a team, this is the team identified by the `teamId` property. For everything else, this is undefined.",
      content: {
        'application/json': {
          schema: z
            .object({
              room: z
                .object({
                  _id: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  usernames: z.array(z.looseObject({})).exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  default: z.boolean().exactOptional(),
                  lastMessage: z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      alias: z.string().nullable().exactOptional(),
                      attachments: z.array(z.looseObject({})).exactOptional(),
                      file: z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          type: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
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
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  lm: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                room: {
                  _id: '66ed2dba40141d95f32c292b',
                  fname: 'new-channel',
                  _updatedAt: '2024-09-20T12:29:08.284Z',
                  customFields: {},
                  topic: '',
                  broadcast: false,
                  encrypted: false,
                  name: 'new-channel',
                  t: 'p',
                  msgs: 3,
                  usersCount: 2,
                  u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'test.cat' },
                  ts: '2024-09-20T08:09:30.417Z',
                  ro: false,
                  teamId: '66c82d78237405fc05fc1ef1',
                  default: false,
                  sysMes: true,
                  lastMessage: {
                    _id: 'xZhJfE4rmaosjHZCe',
                    rid: '66ed2dba40141d95f32c292b',
                    msg: 'testing',
                    alias: null,
                    ts: '2024-09-20T12:27:53.356Z',
                    u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'test.cat' },
                    _updatedAt: '2024-09-20T12:27:53.397Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'testing' }] }],
                  },
                  lm: '2024-09-20T12:27:53.356Z',
                },
                team: {
                  _id: '66c82d78237405fc05fc1ef1',
                  name: 'test-team',
                  type: 0,
                  roomId: '66c82d78237405fc05fc1eef',
                },
                parent: {
                  _id: '66c82d78237405fc05fc1eef',
                  fname: 'test-team',
                  name: 'test-team',
                  t: 'c',
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
                  'The parameter "roomId" or "roomName" is required [error-roomid-param-not-provided]',
                errorType: 'error-roomid-param-not-provided',
              },
            },
            'Room not found': {
              value: {
                success: false,
                error:
                  'The required "roomId" or "roomName" param provided does not match any channel [error-room-not-found]',
                errorType: 'error-room-not-found',
              },
            },
            'ABAC room the caller cannot access': {
              value: { success: false, error: 'not-allowed', errorType: 'Not Allowed' },
            },
            'Private room the caller is not a member of': {
              value: { success: false, error: 'not-allowed', errorType: 'Not Allowed' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RoomsGetDiscussionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.getDiscussions',
  tags: ['Rooms'],
  summary: 'Get Room Discussions',
  description:
    "Get all <a href='https://docs.rocket.chat/docs/discussions' target='_blank'>discussions</a> of a room. \n\n### Changelog\n| Version | Description   |\n| ------- | --------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 1.0.0   | Added         |",
  operationId: 'get-api-v1-rooms.getDiscussions',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomName: OptionalRoomNameParamsSchema,
      roomId: OptionalRoomIdParamsSchema,
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'sort',
            description:
              'Sort the channels in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON object. The options are as follows:\n * `fname`: Sort by discussion name. For example, `sort={"fname":1}` (this is the default sorting mechanism).\n * `ts`: Sort by creation timestamp. For example, `sort={"ts":-1}`\n * `usersCount`: Sort by number of users. For example, `sort={"usersCount":1}`',
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
              discussions: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      topic: z.string().exactOptional(),
                      prid: z.string().exactOptional(),
                      encrypted: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
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
                        .exactOptional()
                        .openapi({ required: [] }),
                      lm: z.string().exactOptional(),
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
                discussions: [
                  {
                    _id: '6514d34ea2f73c7460e18cb4',
                    fname: 'test-discussion',
                    _updatedAt: '2023-09-28T01:14:04.275Z',
                    topic: 'general',
                    prid: 'GENERAL',
                    encrypted: false,
                    name: 'M75nSgA3uYsnTbKRu',
                    t: 'c',
                    msgs: 1,
                    usersCount: 1,
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                    ts: '2023-09-28T01:13:50.574Z',
                    ro: false,
                    default: false,
                    sysMes: true,
                    lastMessage: {
                      _id: 'pnm4kh84HfncDEZj7',
                      rid: '6514d34ea2f73c7460e18cb4',
                      msg: 'Hi guys , this is for SWE team',
                      ts: '2023-09-28T01:14:04.119Z',
                      u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie', name: 'test test' },
                      _updatedAt: '2023-09-28T01:14:04.233Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [
                        {
                          type: 'PARAGRAPH',
                          value: [{ type: 'PLAIN_TEXT', value: 'Hi guys , this is for SWE team' }],
                        },
                      ],
                    },
                    lm: '2023-09-28T01:14:04.119Z',
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

export const getApiV1RoomsGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.get',
  tags: ['Rooms'],
  summary: 'Get Rooms',
  description:
    'Get all opened rooms (all joined public & private channels and all DMs) of the authenticated user.\n\n### Changelog\n| Version | Description   |\n| ------- | --------------|\n| 0.72.0  | Added         |',
  operationId: 'get-api-v1-rooms.get',
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
              'A date as an ISO string. When you provide the `updatedSince` query parameter, then the update and remove in the response will contain only those updated and removed since the specified date and time.',
            schema: { type: 'string' },
            example: '2017-11-25T15:08:17.248Z',
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
              update: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      usernames: z.array(z.string()).exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      default: z.boolean().exactOptional(),
                      lastMessage: z
                        .object({
                          _id: z.string().exactOptional(),
                          t: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          alias: z.string().nullable().exactOptional(),
                          attachments: z.array(AttachmentSchema).exactOptional(),
                          file: z
                            .object({
                              _id: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                              type: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
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
                      uids: z.array(z.string()).exactOptional(),
                      ro: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              remove: z.array(z.looseObject({})).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                update: [
                  {
                    _id: 'GENERAL',
                    ts: '2024-02-14T14:34:49.365Z',
                    t: 'c',
                    name: 'general',
                    usernames: [],
                    msgs: 55,
                    usersCount: 36,
                    _updatedAt: '2024-07-16T08:49:34.732Z',
                    u: { _id: 'rocket.cat', username: 'rocket.cat', name: 'Rocket.Cat' },
                    default: true,
                    lastMessage: {
                      _id: '668fc2bbffe932842327c1ff',
                      t: 'discussion-created',
                      rid: 'GENERAL',
                      ts: '2024-07-11T11:32:11.220Z',
                      msg: 'Discussion',
                      u: { _id: '5m4hjvzCTRCqwPrD2', username: 'Rama', name: 'Raghav Ram' },
                      groupable: false,
                      drid: '668fc2bbffe932842327c1fd',
                      _updatedAt: '2024-07-11T11:32:11.220Z',
                    },
                    lm: '2024-07-11T11:32:11.220Z',
                  },
                  {
                    _id: 'WbYJfC5kTArcECGkpfZ3bvXC72pobjFPLJ',
                    t: 'd',
                    usernames: ['user2', 'user1'],
                    usersCount: 2,
                    msgs: 2,
                    ts: '2024-07-10T13:48:14.998Z',
                    uids: ['WbYJfC5kTArcECGkp', 'fZ3bvXC72pobjFPLJ'],
                    default: false,
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2024-07-10T13:48:28.300Z',
                    lastMessage: {
                      _id: 'XHjLcN3pCe8snaoTm',
                      rid: 'WbYJfC5kTArcECGkpfZ3bvXC72pobjFPLJ',
                      msg: 'again',
                      ts: '2024-07-10T13:48:28.262Z',
                      u: { _id: 'fZ3bvXC72pobjFPLJ', username: 'user1', name: 'user1' },
                      _updatedAt: '2024-07-10T13:48:28.296Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'again' }] }],
                    },
                    lm: '2024-07-10T13:48:28.262Z',
                  },
                  {
                    _id: 'fZ3bvXC72pobjFPLJrocket.cat',
                    t: 'd',
                    usernames: ['user1', 'rocket.cat'],
                    usersCount: 2,
                    msgs: 15,
                    ts: '2024-02-21T02:00:01.657Z',
                    uids: ['fZ3bvXC72pobjFPLJ', 'rocket.cat'],
                    default: false,
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2024-07-17T02:00:05.203Z',
                    lastMessage: {
                      rid: 'fZ3bvXC72pobjFPLJrocket.cat',
                      msg: '*Update your Rocket.Chat*\nNew version available (6.10.0)\nhttps://github.com/RocketChat/Rocket.Chat/releases/tag/6.10.0',
                      ts: '2024-07-17T02:00:05.161Z',
                      u: { _id: 'rocket.cat', username: 'rocket.cat', name: 'Rocket.Cat' },
                      _id: 'c4PzLLTy4fDSCmm4F',
                      _updatedAt: '2024-07-17T02:00:05.198Z',
                      urls: [
                        {
                          url: 'https://github.com/RocketChat/Rocket.Chat/releases/tag/6.10.0',
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
                          value: [{ type: 'PLAIN_TEXT', value: 'New version available (6.10.0)' }],
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
                                    'https://github.com/RocketChat/Rocket.Chat/releases/tag/6.10.0',
                                },
                                label: [
                                  {
                                    type: 'PLAIN_TEXT',
                                    value:
                                      'https://github.com/RocketChat/Rocket.Chat/releases/tag/6.10.0',
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      ],
                    },
                    lm: '2024-07-17T02:00:05.161Z',
                  },
                ],
                remove: [],
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

export const postApiV1RoomsJoinRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.join',
  tags: ['Rooms'],
  summary: 'Join a Room',
  description:
    "Join a room of any type, including public channels, private groups, and discussions. Unlike the <a href='https://developer.rocket.chat/apidocs/join-a-channel' target='_blank'>channels.join</a> endpoint, which only joins public channels, this endpoint applies to all kinds of rooms. \n\n### Changelog\n| Version      | Description |\n| ------------ | ----------- |\n| 8.6.0   | Added       |",
  operationId: 'post-api-v1-rooms.join',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .strictObject({
                roomId: z
                  .string()
                  .openapi({
                    description:
                      'The ID of the room to join. Provide either `roomId` or `roomName`.',
                    example: 'ByehQjC44FwMeiLbX',
                  }),
                joinCode: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "The join code of the room. Rooms can be password-protected. In that case, users must enter the password for access. The join code isn't needed if the user has the `join-without-join-code` permission.",
                    example: '1234',
                  }),
              })
              .openapi({ required: ['roomId'] }),
            z
              .strictObject({
                roomName: z
                  .string()
                  .openapi({
                    description:
                      'The name of the room to join. Provide either `roomId` or `roomName`.',
                    example: 'general',
                  }),
                joinCode: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "The join code of the room. Rooms can be password-protected. In that case, users must enter the password for access. The join code isn't needed if the user has the `join-without-join-code` permission.",
                    example: '1234',
                  }),
              })
              .openapi({ required: ['roomName'] }),
          ]),
          examples: {
            'Join by room ID': { value: { roomId: 'ByehQjC44FwMeiLbX', joinCode: '1234' } },
            'Join by room name': { value: { roomName: 'general' } },
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
                  name: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
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
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'general',
                  fname: 'general',
                  t: 'c',
                  msgs: 8,
                  usersCount: 2,
                  u: {
                    _id: 'rocketchat.internal.admin.test',
                    username: 'rocketchat.internal.admin.test',
                  },
                  ts: '2026-01-16T12:00:04.783Z',
                  ro: false,
                  sysMes: true,
                  default: true,
                  _updatedAt: '2026-01-16T12:06:30.426Z',
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
            'Invalid params': {
              value: {
                success: false,
                error: "Match error: Missing key 'roomId'",
                errorType: 'error-invalid-params',
              },
            },
            'Room not found': {
              value: {
                success: false,
                error:
                  'The required "roomId" or "roomName" param provided does not match any channel [error-room-not-found]',
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

export const postApiV1RoomsLeaveRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.leave',
  tags: ['Rooms'],
  summary: 'Leave Room',
  description:
    'Leave a room. The following permissions are required:\n* `leave-c`: To leave a public room.\n* `leave-p`: To leave private room.\n\n### Changelog\n| Version | Description   |\n| ------- | --------------|\n| 0.72.0  | Added         |',
  operationId: 'post-api-v1-rooms.leave',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description: 'The room ID that you want to leave.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1RoomsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.delete',
  tags: ['Rooms'],
  summary: 'Delete Room',
  description:
    "Delete a room from the workspace. The following permissions are required:\n* `delete-c`: To delete a public room.\n* `delete-d`: To delete direct messages.\n* `delete-p`: To delete private rooms.\n* `delete-team`: To delete a team.\n* `delete-team-channel`: To delete a channel within a team, also requires the `delete-c` permission.\n* `delete-team-group`: To delete a private channel within a team, also requires the `delete-p` permission.\n\n> You can't use this endpoint to delete a team's main room. Use [Delete a Team endpoint](https://developer.rocket.chat/apidocs/delete-a-team) instead.\n\n### Changelog\n| Version | Description   |\n| ------- | --------------|\n| 5.4.0   | Added         |",
  operationId: 'get-api-v1-rooms.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description: 'The room ID that you want to delete.',
                }),
            })
            .openapi({ required: ['roomId'] }),
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
            'Example 1: Missing roomId': {
              value: { success: false, error: "The 'roomId' param is required" },
            },
            'Example 2: Missing Permission': { value: { success: true, error: 'string' } },
            'Example 3: Cannot Delete Team Channel': {
              value: {
                success: false,
                error: 'Cannot delete a team channel [error-cannot-delete-team-channel]',
                errorType: 'error-cannot-delete-team-channel',
                details: { method: 'eraseRoom' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1RoomsFavoriteRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.favorite',
  tags: ['Rooms'],
  summary: 'Favorite/Unfavourite a Room',
  description:
    'Mark/Unmark a room as favourite.\n\n### Changelog\n| Version | Description   |\n| ------- | --------------|\n| 0.64.0   | Added        |',
  operationId: 'post-api-v1-rooms.favorite',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The room ID. Alternatively, enter the `roomName` parameter and provide the room's name as the value. You must be a member of the room.",
                }),
              favorite: z
                .boolean()
                .openapi({ description: 'A boolean to mark the room as favourite or not.' }),
            })
            .openapi({ required: ['roomId', 'favorite'] }),
          examples: { Example: { value: { roomId: 'GENERAL', favorite: true } } },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const getApiV1RoomsAutocompleteAvailableForTeamsRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.autocomplete.availableForTeams',
  tags: ['Rooms'],
  summary: 'Autocomplete Room Name for Team',
  description: 'Autocompletes room name available for conversion to team.',
  operationId: 'get-api-v1-rooms.autocomplete.availableForTeams',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The name of the room',
            required: true,
            schema: { type: 'string' },
            example: 'data-loss-prevention',
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
              items: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Match error': {
              value: {
                items: [{ _id: 'siyr2oWQJBjQjhLwr', fname: 'try', name: 'try', t: 'c' }],
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

export const getApiV1RoomsAutocompleteChannelAndPrivateRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.autocomplete.channelAndPrivate',
  tags: ['Rooms'],
  summary: 'Autocomplete Room Name for Private and Public Rooms',
  description:
    'List the public and private rooms whose names match a given string, excluding <a href="https://docs.rocket.chat/docs/discussions" target="_blank">discussions</a>, <a href="https://docs.rocket.chat/docs/direct-messages" target="_blank">DMs</a>, and <a href="https://docs.rocket.chat/docs/omnichannel" target="_blank">omnichannel rooms</a>. The endpoint is valuable when performing search operations. It returns only rooms that the user belongs to.',
  operationId: 'get-api-v1-rooms.autocomplete.channelAndPrivate',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      selector: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '{"name":"ran"}' },
            in: 'query',
            name: 'selector',
            required: true,
            description: 'The term to be completed. It only applies to room name.',
          },
          example: '{"name":"ran"}',
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
              items: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                items: [
                  { _id: '664f0d525df46832f75b1860', fname: 'rancher', name: 'rancher', t: 'p' },
                  { _id: '6630e94ad2226209149c67e2', fname: 'random', name: 'random', t: 'c' },
                  { _id: '664f148f5df46832f75b18b2', fname: 'ranmowe', name: 'ranmowe', t: 'p' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Selector Param Required': {
              value: { success: false, error: "The 'selector' param is required" },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RoomsAutocompleteAdminRoomsRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.autocomplete.adminRooms',
  tags: ['Rooms'],
  summary: 'Admin Autocomplete Room Name for Private and Public Rooms',
  description:
    'List public and private rooms whose names match a given string, excluding <a href="https://docs.rocket.chat/docs/direct-messages" target="_blank">DMs</a>, and <a href="https://docs.rocket.chat/docs/omnichannel" target="_blank">omnichannel rooms</a>. This endpoint is valuable when performing search operations. Only workspace administrators can use it. Any one of the following permissions are required:\n* `view-room-administration`\n* `can-audit`',
  operationId: 'get-api-v1-rooms.autocomplete.adminRooms',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      selector: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '{"name":"ran"}' },
            in: 'query',
            name: 'selector',
            required: true,
            description: 'The term to be completed. It applies to room name and display name.',
          },
          example: '{"name":"ran"}',
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
              items: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                items: [
                  {
                    _id: '664f0d815df46832f75b1877',
                    fname: 'rangig',
                    name: 'Ch9xkYwGHnsLe7CQR',
                    t: 'c',
                  },
                  { _id: '664f0d525df46832f75b1860', fname: 'rancher', name: 'rancher', t: 'p' },
                  { _id: '6630e94ad2226209149c67e2', fname: 'random', name: 'random', t: 'c' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Selector Param Required': {
              value: { success: false, error: "The 'selector' param is required" },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RoomsAdminRoomsGetRoomRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.adminRooms.getRoom',
  tags: ['Rooms'],
  summary: 'Get Admin of Room',
  description:
    'Retrieves the admin of a room.\n\nPermission required: `view-room-administration`\n\n### Changelog\n| Version | Description     |\n| ------- | --------------- |\n| 8.7.0   | Restored `customFields` in the response |\n| 2.4.0   | Added           |',
  operationId: 'get-api-v1-rooms.adminRooms.getRoom',
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
            schema: { type: 'string' },
            example: '654c9d1ca2f73c7460e1918b',
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
              _id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              fname: z.string().exactOptional(),
              t: z.string().exactOptional(),
              msgs: z.int().exactOptional(),
              usersCount: z.int().exactOptional(),
              u: z
                .object({ _id: z.string().exactOptional(), username: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              ro: z.boolean().exactOptional(),
              default: z.boolean().exactOptional(),
              customFields: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'The custom fields set on the room.' }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                _id: 'ukFsHiySDhMkQyyyF',
                name: 'freightwave',
                fname: 'freightwave',
                t: 'p',
                msgs: 4,
                usersCount: 1,
                u: { _id: 'Gd6iymRZBK4C6wqHN', username: 'bruno.raymundo' },
                ro: false,
                default: false,
                customFields: { department: 'engineering', priority: 'high' },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1RoomsSaveRoomSettingsRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.saveRoomSettings',
  tags: ['Rooms'],
  summary: 'Save Room Settings',
  description:
    'Updates the settings of an existing room.\n\nFor ABAC-managed rooms, the following guardrails apply:\n\n- Changing `roomAnnouncement`, `roomTopic`, or `roomDescription` is rejected with `error-action-not-allowed`.\n- Setting `default: true` on an ABAC-managed room is rejected with `error-action-not-allowed`.\n- Changing `roomType` from `p` to `c` is rejected with `error-action-not-allowed`. The same guard applies to private rooms in ABAC-managed private teams.\n- When `roomType` changes to `c` (public) and conversion is allowed, existing room ABAC attributes are cleared as part of the conversion.\n\nPermission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ------------|\n| 8.5.0   | Added ABAC guardrails: announcement, topic, description, default flag, and conversion to public are blocked on ABAC-managed rooms. |\n| 3.13.0  | Added       |',
  operationId: 'post-api-v1-rooms.saveRoomSettings',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z.string().openapi({ description: 'The room ID.' }),
              roomName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the room.' }),
              roomDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the room.' }),
              roomAvatar: z.string().exactOptional().openapi({ description: 'The base64 image.' }),
              featured: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the room is featured or not.' }),
              roomTopic: z
                .string()
                .exactOptional()
                .openapi({ description: 'The topic of the room.' }),
              roomAnnouncement: z
                .string()
                .exactOptional()
                .openapi({ description: 'The announcement of the room.' }),
              roomCustomFields: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'An object of the custom fields of the room.' }),
              roomType: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The type of the room. It could be `c` for public rooms or `p` for private rooms.',
                }),
              readOnly: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the room is read-only or not.' }),
              reactWhenReadOnly: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether users can react when the room is read-only.' }),
              systemMessages: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The system messages that the room supports.' }),
              default: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the room is the default room or not.' }),
              joinCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'The join code of the room.' }),
              streamingOptions: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'The streaming options of the room.' }),
              retentionEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether retention is enabled for the room or not.' }),
              retentionMaxAge: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The maximum age (in days) of messages to be retained in the room.',
                }),
              retentionExcludePinned: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether to exclude pinned messages from retention or not.',
                }),
              retentionFilesOnly: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether to retain only files in the room or not.' }),
              retentionIgnoreThreads: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether to ignore threads when retaining messages or not.',
                }),
              retentionOverrideGlobal: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to override the global retention settings for the room or not.',
                }),
              encrypted: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the room is encrypted or not.' }),
              favorite: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'The favorite settings of the room. Whether the room is marked as favorite and whether it is set as the default room.',
                }),
              sidepanel: z
                .object({
                  items: z
                    .array(z.string().openapi({ example: '["discussions", "channels"]' }))
                    .exactOptional()
                    .openapi({ description: 'The options are `discussions` and `channels`.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "List the team's channels or discussions to be displayed in the sidepanel.",
                  required: [],
                }),
            })
            .openapi({ required: ['rid'] }),
          examples: {
            Example: {
              value: {
                rid: 'JZ8Y2dLfYhsg323Rf',
                roomName: 'Test-Save-Room',
                roomDescription: 'This is a test room.',
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
            .object({ rid: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { Success: { value: { rid: 'JZ8Y2dLfYhsg323Rf', success: true } } },
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
                .object({ method: z.string().exactOptional(), action: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid room': {
              value: {
                success: false,
                error: 'Invalid room [error-invalid-room]',
                errorType: 'error-invalid-room',
              },
            },
            'ABAC-managed room type conversion blocked': {
              value: {
                success: false,
                error:
                  'Changing an ABAC managed private room to public is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
                details: { method: 'saveRoomSettings', action: 'Change_Room_Type' },
              },
            },
            'ABAC-managed room default blocked': {
              value: {
                success: false,
                error:
                  'Setting an ABAC managed room as default is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
                details: { method: 'saveRoomSettings', action: 'Viewing_room_administration' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RoomsNameExistsRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.nameExists',
  tags: ['Rooms'],
  summary: 'Check if Room Name Exists',
  description: 'Check if the room name exists',
  operationId: 'get-api-v1-rooms.nameExists',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomName: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'test-room',
            in: 'query',
            name: 'roomName',
            description: 'Enter the room name that you want to check.',
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
            .object({ exists: z.boolean().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { Success: { value: { exists: true, success: true } } },
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
            'roomName is required': {
              value: {
                success: false,
                error: "must have required property 'roomName' [error-invalid-params]",
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

export const postApiV1RoomsChangeArchivationStateRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.changeArchivationState',
  tags: ['Rooms'],
  summary: 'Change Room Archive State',
  description:
    'Archive or unarchive a room. Permissions required:\n* `archive-room`: To archive a room.\n* `unarchive-room`: To unarchive a room.\n\n### Changelog\n| Version | Description      |\n| ------- | ---------------- |\n| 3.3.0  | Added             |',
  operationId: 'post-api-v1-rooms.autocomplete.channelAndPrivate',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z.string().openapi({ description: 'The room Id.' }),
              action: z
                .string()
                .openapi({ description: 'It can either be archive or otherwise unarchived.' }),
            })
            .openapi({ required: ['rid', 'action'] }),
          examples: { Example: { value: { rid: 'iu7jtPAhvEeAS5tNq', action: 'archive' } } },
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
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Room': {
              value: {
                success: false,
                error: 'Invalid room [error-invalid-room]',
                errorType: 'error-invalid-room',
                details: { method: 'unarchiveRoom' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1RoomsExportRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.export',
  tags: ['Rooms'],
  summary: 'Export Room',
  description:
    'Export room messages to a file or email. When exporting to a file, the ZIP file is stored in the `/tmp` directory on the Rocket.Chat server, and its details are recorded in the `rocketchat_user_data_files` collection in MongoDB.\n\nPermission required: `mail-messages`\n\n### Changelog\n\n| Version | Description                          |\n| ------- | ------------------------------------ |\n| 3.8.0   | Added                                |\n',
  operationId: 'post-api-v1-rooms.export',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z.string().openapi({ description: 'The room ID.' }),
              type: z
                .string()
                .openapi({
                  description:
                    'How you want the room to be exported. The type of export selected determines the remaining required parameters. It can be either `email` or `file`.',
                }),
              dateFrom: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Start date to begin fetching. Use `dateFrom` if  the type is `file`. By default, it selects the oldest possible date.',
                }),
              dateTo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'End date for fetching. By default it selects the current date. Use `dateTo` if  the `type` is  `file`.',
                }),
              format: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The file type to export as. It can either be `html` or `json`. Use `format` if  the `type` is  `file`.',
                }),
              toUsers: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of users that should recieve the export. ecieve the export. It is required if `type` is `email`.',
                }),
              toEmails: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of any additional emails that should recieve the export. It is required if `type` is `email`. ',
                }),
              messages: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of  messageId for  the messages that should be exported. It is required if `type` is `email`.  ',
                }),
              subject: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The subject of the email. It is required if `type` is `email`. ',
                }),
            })
            .openapi({ required: ['rid', 'type'] }),
          examples: {
            Example: {
              value: {
                rid: 'iu7jtPAhvEeAS5tNq',
                type: 'file',
                dateFrom: '2000-01-01',
                dateTo: '2021-11-25',
                format: 'html',
                toUsers: ['test.user'],
                toEmails: ['test@test.com'],
                messages: ['yd6NBgNoiWATgDoFt', 'BoCjicj9DdYoMHHeo', 'tajMB3aX3sawFWe8W'],
                subject: 'Test Subject ',
              },
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
            'Invalid Room ID': {
              value: {
                success: false,
                error: '[error-invalid-room]',
                errorType: 'error-invalid-room',
              },
            },
            'Invalid Format': {
              value: {
                success: false,
                error: '[error-invalid-format]',
                errorType: 'error-invalid-format',
              },
            },
            'Invalid Params': {
              value: {
                success: false,
                error: '[error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1RoomsMuteUserRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.muteUser',
  tags: ['Rooms'],
  summary: 'Mute User in Room',
  description:
    'Mute a particular user in a room. Permission required: `mute-user`. The room becomes read-only for the muted user. They can still view messages but cannot send any until unmuted.\n\n### Changelog\n\n| Version | Description                          |\n| ------- | ------------------------------------ |\n| 6.8.0   | Added                                |\n',
  operationId: 'post-api-v1-rooms.muteUser',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  example: 'CkCPNfjfhiwWLqC',
                  description:
                    'The user that you want to mute. Alternatively, use the `username` parameter and enter the username as the value.',
                }),
              roomId: z
                .string()
                .openapi({ example: 'JZ8Y2dLfYhsg323Rf', description: 'The room ID.' }),
            })
            .openapi({ required: ['userId', 'roomId'] }),
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
            'Invalid User': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param provided does not match any users [error-invalid-user]',
                errorType: 'error-invalid-user',
              },
            },
            'Invalid Params': {
              value: {
                success: false,
                error:
                  "must have required property 'userId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
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

export const postApiV1RoomsUnmuteUserRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.unmuteUser',
  tags: ['Rooms'],
  summary: 'Unmute User in Room',
  description:
    'Unmute a particular user in a room. Permission required: `mute-user`\n\n### Changelog\n\n| Version | Description                          |\n| ------- | ------------------------------------ |\n| 6.8.0   | Added                                |\n',
  operationId: 'post-api-v1-rooms.unmuteUser',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  example: 'CkCPNfjfhiwWLqC',
                  description:
                    'The user that you want to unmute. Alternatively, use the `username` parameter.',
                }),
              roomId: z
                .string()
                .openapi({ example: 'JZ8Y2dLfYhsg323Rf', description: 'The room ID.' }),
            })
            .openapi({ required: ['userId', 'roomId'] }),
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
            'Invalid User': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param provided does not match any users [error-invalid-user]',
                errorType: 'error-invalid-user',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  "must have required property 'userId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
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

export const postApiV1RoomsCreateDiscussionRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.createDiscussion',
  tags: ['Rooms'],
  summary: 'Create Discussion',
  description:
    'Creates a new discussion for the room. It requires at least one of the following permissions: `start-discussion` OR `start-discussion-other-user`, AND must be with the following setting enabled: `Discussion_enabled`.\nThe caller must be a member of the parent room. Apps are exempt from this check.\n\nWhen **Force end-to-end encryption on private rooms** is enabled, you cannot create a discussion under an unencrypted private room. Make the parent room public or enable encryption on it before creating the discussion.\n\n### Changelog\n| Version | Description                                                                                   |\n| ------- | --------------------------------------------------------------------------------------------- |\n| 9.0.0   | Requires the caller to be a member of the parent room. Apps are exempt.                       |\n| 8.8.0   | Added forced encryption checks for private-room discussions.                                      |\n| 1.0.0   | Added                                                                                         |',
  operationId: 'post-api-v1-rooms.createDiscussion',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              prid: z.string().openapi({ description: 'Parent room ID of the discussion.' }),
              t_name: z.string().openapi({ description: 'Discussion name.' }),
              users: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of users to join in the discussion, if not provided, it will be an empty array. (Note: if provided, it must be an array).',
                }),
              pmid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Parent message ID (if the discussion comes from a message).',
                }),
              reply: z
                .string()
                .exactOptional()
                .openapi({ description: 'The reply of the discussion.' }),
            })
            .openapi({ required: ['prid', 't_name'] }),
          examples: { Example: { value: { prid: 'GENERAL', t_name: 'Discussion Name' } } },
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
              discussion: z
                .object({
                  rid: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  topic: z.string().exactOptional(),
                  prid: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  _id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                discussion: {
                  rid: 'cgk88DHLHexwMaFWh',
                  name: 'WJNEAM7W45wRYitHo',
                  fname: 'Discussion Name',
                  t: 'p',
                  msgs: 0,
                  usersCount: 0,
                  u: {
                    _id: 'rocketchat.internal.admin.test',
                    username: 'rocketchat.internal.admin.test',
                  },
                  topic: 'general',
                  prid: 'GENERAL',
                  ts: '2019-04-03T01:35:32.271Z',
                  ro: false,
                  sysMes: true,
                  default: false,
                  _updatedAt: '2019-04-03T01:35:32.280Z',
                  _id: 'cgk88DHLHexwMaFWh',
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
            'Private room encryption is enforced': {
              value: {
                success: false,
                error:
                  'Workspace policy requires all private rooms to be encrypted. To create this discussion, make the parent channel public or enable encryption on it. [error-encrypted-private-rooms-enforced-discussion]',
                errorType: 'error-encrypted-private-rooms-enforced-discussion',
              },
            },
            'Not a member of the parent room': {
              value: {
                success: false,
                error: 'You must join the room to create a discussion [error-user-not-in-room]',
                errorType: 'error-user-not-in-room',
                details: { method: 'DiscussionCreation' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RoomsImagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.images',
  tags: ['Rooms'],
  summary: 'Get Room Images',
  description: 'Retrieves the images of a room that you are a member of.',
  operationId: 'get-api-v1-rooms.images',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The room ID.',
            schema: { type: 'string', example: '6630e42b72f069422b1022c1' },
            example: '654c9d1ca2f73c7460e1918b',
            required: true,
          },
          example: '6630e42b72f069422b1022c1',
        }),
      startingFromId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '666fdecb4ac1a8e6404ededd',
            in: 'query',
            name: 'startingFromId',
            description: 'Filter images using the file ID.',
            allowEmptyValue: true,
            required: false,
          },
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
                      identify: z
                        .object({
                          format: z.string().exactOptional(),
                          size: z
                            .object({
                              width: z.int().exactOptional(),
                              height: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      complete: z.boolean().exactOptional(),
                      etag: z.string().exactOptional(),
                      path: z.string().exactOptional(),
                      progress: z.int().exactOptional(),
                      token: z.string().exactOptional(),
                      uploadedAt: z.string().exactOptional(),
                      uploading: z.boolean().exactOptional(),
                      url: z.string().exactOptional(),
                      typeGroup: z.string().exactOptional(),
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
                files: [
                  {
                    _id: '666fdecb4ac1a8e6404ededd',
                    name: 'oauth-screen.png',
                    size: 78441,
                    type: 'image/png',
                    rid: '6630e42b72f069422b1022c1',
                    userId: 'yuT9xp9eEd6HqB3n8',
                    store: 'GridFS:Uploads',
                    _updatedAt: '2024-06-17T06:59:23.608Z',
                    identify: { format: 'png', size: { width: 1580, height: 884 } },
                    complete: true,
                    etag: 'yvaG9cjz6YRRdMg4L',
                    path: '/file-upload/666fdecb4ac1a8e6404ededd/oauth-screen.png',
                    progress: 1,
                    token: '1888eA0A0B',
                    uploadedAt: '2024-06-17T06:59:23.602Z',
                    uploading: false,
                    url: 'https://pro.writing-demo.dev.rocket.chat/file-upload/666fdecb4ac1a8e6404ededd/oauth-screen.png',
                    typeGroup: 'image',
                  },
                  {
                    _id: '666fddea4ac1a8e6404eded7',
                    name: '11.jpg',
                    size: 83832,
                    type: 'image/jpeg',
                    rid: '6630e42b72f069422b1022c1',
                    userId: 'yuT9xp9eEd6HqB3n8',
                    store: 'GridFS:Uploads',
                    _updatedAt: '2024-06-17T06:55:38.044Z',
                    identify: { format: 'jpeg', size: { width: 839, height: 932 } },
                    complete: true,
                    etag: '3jZf7SJZFCPpf9JK8',
                    path: '/file-upload/666fddea4ac1a8e6404eded7/11.jpg',
                    progress: 1,
                    token: '498bb849C8',
                    uploadedAt: '2024-06-17T06:55:38.029Z',
                    uploading: false,
                    url: 'https://pro.writing-demo.dev.rocket.chat/file-upload/666fddea4ac1a8e6404eded7/11.jpg',
                    typeGroup: 'image',
                  },
                ],
                count: 50,
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
            'Invalid Params': {
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

export const getApiV1AuditRoomsMembersRoute = createRoute({
  method: 'get',
  path: '/api/v1/audit/rooms.members',
  tags: ['Rooms'],
  summary: 'Audit and Get Room Members',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nAudit any public or private room and view the room members. You don\'t need to be a member of the room.\n\nPermission required: `view-members-list-all-rooms`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 6.12.0   | Added       |',
  operationId: 'get-api-v1-audit-rooms.members',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '66cd971f6fcbb8e8b3cf8e69' },
            in: 'query',
            name: 'roomId',
            description: 'Enter the room ID that you want to audit.',
            required: true,
          },
          example: '66cd971f6fcbb8e8b3cf8e69',
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'filter',
            description: 'Filter the results using the text that you want to view.',
            required: false,
          },
        }),
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
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
              members: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      username: z.string().exactOptional(),
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
            'Example 1': {
              value: {
                members: [
                  {
                    _id: 'FSA63o85Poa2EQvAH',
                    status: 'offline',
                    name: 'cat kate',
                    username: 'cat.kate',
                    _updatedAt: '2024-08-27T09:07:03.795Z',
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
                error: "must have required property 'roomId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1RoomsMembersOrderedByRoleRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.membersOrderedByRole',
  tags: ['Rooms'],
  summary: 'Get Room Members Ordered by Role',
  description:
    'Get room members ordered by their roles. This endpoint sorts the members according to their role in the room in the order `Owners` > `Moderators` > all other members. This can be reversed using the query paramter `sort={"rolePriority":-1}`. You need not be a member of the room.\n\nIf the room is a broadcast room, you need the `view-broadcast-member-list` permission to view the room members.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Returns `403` instead of `401` when the caller is not authorized.       |\n| 7.3.0   | Added       |',
  operationId: 'get-api-v1-rooms.membersOrderedByRole',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '66cd971f6fcbb8e8b3cf8e69' },
            in: 'query',
            name: 'roomId',
            description: 'Enter the room ID.',
            required: true,
          },
          example: '66cd971f6fcbb8e8b3cf8e69',
        }),
      roomName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: 'test-team' },
            in: 'query',
            name: 'roomName',
            description: 'Instead of using the room ID, you can enter the room name.',
            required: false,
          },
          example: 'test-team',
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: 'user' },
            in: 'query',
            name: 'filter',
            description: 'Filter the results by using the text that you want to view.',
            required: false,
          },
          example: 'user',
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'sort',
            description:
              'Sort the rooms in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON string. The options are as follows:\n * `rolePriority`: Sort by priority of role (`Owners` > `Moderators` > all other members). For example, `sort={"rolePriority":-1}`\n * `username`: Sort by usernames. For example, `sort={"username":-1}`',
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'status',
            description:
              'Enter the user status for which you want the results. For example, `online`, `away`, `offline`.',
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
              members: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      roles: z.array(z.string()).exactOptional(),
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
                    _id: 'C38WSSzrGd2NCjzqJ',
                    username: 'test.cat',
                    status: 'online',
                    _updatedAt: '2025-01-22T07:49:47.830Z',
                    name: 'test.cat',
                    roles: ['owner'],
                  },
                  {
                    _id: 'P2dgWPPw5veigwcdK',
                    status: 'offline',
                    _updatedAt: '2025-01-22T07:13:19.734Z',
                    name: 'Fun Smith',
                    username: 'fun.smith',
                    roles: ['moderator'],
                  },
                  {
                    _id: 'CNmyTxexxauJ4wrTW',
                    username: 'agent1',
                    status: 'offline',
                    _updatedAt: '2025-01-22T07:32:57.238Z',
                    name: 'agent1',
                  },
                  {
                    _id: 'FSA63o85Poa2EQvAH',
                    status: 'offline',
                    name: 'cat kate',
                    username: 'cat.kate',
                    _updatedAt: '2025-01-22T08:04:12.251Z',
                    roles: ['leader'],
                  },
                ],
                count: 4,
                offset: 0,
                total: 4,
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
                  "must have required property 'roomId'\n must have required property 'roomName'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1TeamsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.create',
  tags: ['Teams'],
  summary: 'Create a New Team',
  description:
    'Create a new public or private team in the workspace.\n\nPermission required: `create-team`. When you create a team from an existing room by passing `room.id`, you also need the `edit-room` permission for that room.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.7.0   | Enforced room permission checks when creating a team from an existing room. |\n| 3.13.0  | Added |',
  operationId: 'post-api-v1-teams.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The team name.' }),
              type: z
                .int()
                .openapi({ description: 'Privacy of the team (0 - Public, 1 - Private).' }),
              members: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user IDs to add to the team when it is created.' }),
              room: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: "The ID of an existing room to use as the team's main room.",
                    }),
                  readOnly: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              sidepanel: z
                .object({
                  items: z
                    .array(z.string().openapi({ example: '["discussions", "channels"]' }))
                    .exactOptional()
                    .openapi({ description: 'The options are `discussions` and `channels`.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "List the team's channels or discussions to be displayed in the sidepanel.",
                  required: [],
                }),
              owner: z
                .string()
                .exactOptional()
                .openapi({ description: 'Set the owner of the team.' }),
            })
            .openapi({ required: ['name', 'type'] }),
          examples: {
            'Create a public team': {
              value: {
                name: 'teamName',
                type: 0,
                members: ['8dugqGhuRvCBLdZft'],
                room: { readOnly: true },
                sidepanel: { items: ['discussions', 'channels'] },
              },
            },
            'Create a team from an existing room': {
              value: { name: 'teamName', type: 0, room: { id: '6513afeda2f73c7460e18c86' } },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK\n\nNote that the `roomId` is main room ID of the team.',
      content: {
        'application/json': {
          schema: z
            .object({
              team: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  type: z.int().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  roomId: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Team created': {
              value: {
                team: {
                  _id: '651619e3a2f73c7460e18cc5',
                  name: 'teamName',
                  type: 0,
                  createdAt: '2023-09-29T00:27:15.189Z',
                  createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  _updatedAt: '2023-09-29T00:27:15.189Z',
                  roomId: '651619e3a2f73c7460e18cc7',
                },
                success: true,
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing room permissions': { value: { success: false, error: 'forbidden' } },
          },
        },
      },
    },
  },
})

export const getApiV1TeamsListAllRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams.listAll',
  tags: ['Teams'],
  summary: 'Get List of All Teams',
  description:
    'Lists all the teams and their information.\n\nPermission required: `view-all-teams`',
  operationId: 'get-api-v1-teams.listAll',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ offset: OffsetParamsSchema, count: CountParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK\nNote that the `roomId` is main room ID of the team.',
      content: {
        'application/json': {
          schema: z
            .object({
              teams: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      type: z.int().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      roomId: z.string().exactOptional(),
                      rooms: z.int().exactOptional(),
                      numberOfUsers: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                teams: [
                  {
                    _id: '63f3efc4b000b6b6d86704b2',
                    name: 'test-audit',
                    type: 0,
                    createdAt: '2023-02-20T22:10:12.733Z',
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test' },
                    _updatedAt: '2023-02-20T22:10:12.843Z',
                    roomId: '6GFJ3tbmHiyHbahmC',
                    rooms: 0,
                    numberOfUsers: 2,
                  },
                  {
                    _id: '6435624052492a08c3a756fd',
                    name: 'Test-team',
                    type: 0,
                    createdAt: '2023-04-11T13:36:00.496Z',
                    createdBy: { _id: 'rYhzFRd2QZjNwAAXX', username: 'rodriq' },
                    _updatedAt: '2023-04-11T13:36:00.855Z',
                    roomId: 'h5gPM3Wpip8nEFwbu',
                    rooms: 0,
                    numberOfUsers: 2,
                  },
                  {
                    _id: '65149c7ea2f73c7460e18cab',
                    name: 'messages',
                    type: 0,
                    createdAt: '2023-09-27T21:19:58.972Z',
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                    _updatedAt: '2023-09-27T21:19:59.038Z',
                    roomId: '6513afeda2f73c7460e18c86',
                    rooms: 0,
                    numberOfUsers: 2,
                  },
                ],
                total: 3,
                count: 3,
                offset: 0,
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

export const getApiV1TeamsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams.list',
  tags: ['Teams'],
  summary: 'Get List of Teams',
  description:
    'Lists the public and private teams the request sender is part of.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `query` parameter.       |',
  operationId: 'get-api-v1-teams.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      sort: SortParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK\n\nNote that the `roomId` is main room id of the team.',
      content: {
        'application/json': {
          schema: z
            .object({
              teams: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      type: z.int().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      roomId: z.string().exactOptional(),
                      rooms: z.int().exactOptional(),
                      numberOfUsers: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                teams: [
                  {
                    _id: '63f3efc4b000b6b6d86704b2',
                    name: 'test-audit',
                    type: 0,
                    createdAt: '2023-02-20T22:10:12.733Z',
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test' },
                    _updatedAt: '2023-02-20T22:10:12.843Z',
                    roomId: '6GFJ3tbmHiyHbahmC',
                    rooms: 0,
                    numberOfUsers: 2,
                  },
                  {
                    _id: '65149c7ea2f73c7460e18cab',
                    name: 'messages',
                    type: 0,
                    createdAt: '2023-09-27T21:19:58.972Z',
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                    _updatedAt: '2023-09-27T21:19:59.038Z',
                    roomId: '6513afeda2f73c7460e18c86',
                    rooms: 0,
                    numberOfUsers: 2,
                  },
                ],
                total: 2,
                count: 2,
                offset: 0,
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

export const getApiV1TeamsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams.info',
  tags: ['Teams'],
  summary: 'Get Team Info',
  description:
    "Gets a team's information. If the team is not public, the request sender must be a member of the team, or must have the `view-all-teams` permission.",
  operationId: 'get-api-v1-teams.info',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ teamId: OptionalTeamIdParamsSchema, teamName: OptionalTeamNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK\n\nNote that the `roomId` is main room id of the team.',
      content: {
        'application/json': {
          schema: z
            .object({
              teamInfo: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  type: z.int().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  roomId: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                teamInfo: {
                  _id: '607e0d9b49d493189836bfac',
                  name: 'Team1',
                  type: 1,
                  createdAt: '2021-04-19T23:09:15.106Z',
                  createdBy: { _id: 'FL2fZL4ERhwA3gWiS', username: 'some.username' },
                  _updatedAt: '2021-04-19T23:09:15.106Z',
                  roomId: 'Dgh2xwJ3NFKWvKSqY',
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

export const postApiV1TeamsUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.update',
  tags: ['Teams'],
  summary: 'Update a Team',
  description: 'Updates an existing team (name and type). \n\nPermission required: `edit-team`',
  operationId: 'post-api-v1-teams.update',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamId: z.string().openapi({ description: 'The team ID.' }),
              data: z
                .object({ name: z.string().exactOptional(), type: z.int().exactOptional() })
                .openapi({
                  description: 'The new team name and type (0 - public, 1 - private).',
                  required: [],
                }),
            })
            .openapi({ required: ['teamId', 'data'] }),
          examples: {
            Example: {
              value: { teamId: 'ByehQjC44FwMeiLbX', data: { name: 'newTeamName', type: 1 } },
            },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1TeamsAddMembersRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.addMembers',
  tags: ['Teams'],
  summary: 'Add Members to the Team',
  description:
    'Add members to a team.\n\nPermissions required: `add-team-member` or `edit-team-member`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- | \n| 9.0.0   | Assigning roles now requires the matching permission: `set-owner`, `set-moderator` or `set-leader` for those roles, and `access-permissions` for any other role except `member`. |',
  operationId: 'post-api-v1-teams.addMembers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamId: z
                .string()
                .openapi({
                  description:
                    "Enter the team ID. Alternatively, enter the `teamName` parameter and provide the team's name as the value.",
                }),
              members: z
                .array(
                  z
                    .object({
                      userId: z.string().exactOptional(),
                      roles: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            "To assign roles, you also need the permission for each role in the team's main room: `set-owner` for `owner`, `set-moderator` for `moderator`, and `set-leader` for `leader`. Any other role except `member` requires `access-permissions`, and the `admin` role also requires `assign-admin-role`. If you don't have them, the request fails with a `403` error.",
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({ description: 'The users (IDs and roles) to add to the team.' }),
            })
            .openapi({ required: ['teamId', 'members'] }),
          examples: {
            Example: {
              value: {
                teamId: '63f3efc4b000b6b6d86704b2',
                members: [{ userId: 'rYhzFRd2QZjNwAAXX', roles: ['member'] }],
              },
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
            'Invalid Params': {
              value: {
                success: false,
                error:
                  "must have required property 'members'\n must have required property 'teamName'\n must match exactly one schema in oneOf",
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Permission Error': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const postApiV1TeamsUpdateMemberRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.updateMember',
  tags: ['Teams'],
  summary: 'Update Team Member Info',
  description:
    "Updates a team member's roles. \n\nPermission required: `edit-team-member`\n\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 9.0.0   | Assigning roles now requires the matching permission: `set-owner`, `set-moderator` or `set-leader` for those roles, and `access-permissions` for any other role except `member`. |",
  operationId: 'post-api-v1-teams.updateMembers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamId: z
                .string()
                .openapi({
                  description:
                    "Enter the team ID. Alternatively, enter the `teamName` parameter and provide the team's name as the value.",
                }),
              member: z
                .object({
                  userId: z.string().exactOptional().openapi({ description: 'Enter the user ID.' }),
                  roles: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        "You also need the permission for each role you add or remove: `set-owner` for `owner`, `set-moderator` for `moderator`, and `set-leader` for `leader`. Any other role except `member` requires `access-permissions`, and the `admin` role also requires `assign-admin-role`. If you don't have them, the request fails with a `403` error. ",
                    }),
                })
                .openapi({
                  description: 'The users (IDs and roles) to add or update in the team.',
                  required: [],
                }),
            })
            .openapi({ required: ['teamId', 'member'] }),
          examples: {
            Example: {
              value: {
                teamId: '63f3efc4b000b6b6d86704b2',
                member: { userId: 'rYhzFRd2QZjNwAAXX', roles: ['owner', 'leader'] },
              },
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
            'Invalid Params': {
              value: {
                success: false,
                error:
                  "must have required property 'member'\n must have required property 'teamName'\n must match exactly one schema in oneOf",
                errorType: 'error-invalid-params',
              },
            },
            'Invalid Team Id': { value: { success: false, error: 'team-does-not-exist' } },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Permission Error': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const getApiV1TeamsMembersRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams.members',
  tags: ['Teams'],
  summary: 'List Team Members',
  description: 'List all members of a team. Permission required: `view-all-teams`',
  operationId: 'get-api-v1-teams.members',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      teamName: OptionalTeamNameParamsSchema,
      teamId: OptionalTeamIdParamsSchema,
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: "Search filter for the user's name ",
            schema: { type: 'string' },
            example: 'test',
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            description: "Search filter for the user's username ",
            schema: { type: 'string' },
            example: 'test.user',
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: "Search filter for the user's status",
            schema: { type: 'array', items: { type: 'string' } },
            example: '["online", "away", "busy"]',
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
              members: z
                .array(
                  z
                    .object({
                      user: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          status: z.string().exactOptional(),
                          settings: z
                            .object({
                              preferences: z
                                .object({ themeAppearence: z.string().exactOptional() })
                                .exactOptional()
                                .openapi({ required: [] }),
                              profile: z.looseObject({}).exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      roles: z.array(z.string()).exactOptional(),
                      createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      createdAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                members: [
                  {
                    user: {
                      _id: 'rbAXPnMktTFbNpwtJ',
                      username: 'roxie',
                      name: 'test test',
                      status: 'offline',
                      settings: { preferences: { themeAppearence: 'light' }, profile: {} },
                    },
                    roles: ['owner'],
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test' },
                    createdAt: '2023-02-20T22:10:12.740Z',
                  },
                  {
                    user: {
                      _id: '5fRTXMt7DMJbpPJfh',
                      username: 'test.test',
                      name: 'Testtest',
                      status: 'offline',
                      settings: { profile: {} },
                    },
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test' },
                    createdAt: '2023-07-11T00:23:01.346Z',
                  },
                ],
                total: 2,
                count: 2,
                offset: 0,
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

export const postApiV1TeamsLeaveRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.leave',
  tags: ['Teams'],
  summary: 'Leave a Team',
  description: 'Leave a team',
  operationId: 'post-api-v1-teams.leave',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamId: z
                .string()
                .openapi({
                  description:
                    "Enter the team ID. Alternatively, enter the `teamName` parameter and provide the team's name as the value.",
                }),
              rooms: z
                .array(z.string())
                .openapi({ description: 'The team room IDs to remove the user from.' }),
            })
            .openapi({ required: ['teamId', 'rooms'] }),
          examples: { Example: { value: { teamName: 'team1', rooms: ['8dugqGhuRvCBLdZft'] } } },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1TeamsRemoveMemberRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.removeMember',
  tags: ['Teams'],
  summary: 'Remove Member from Team',
  description: 'Removes a member from a team. \n\nPermission required: `edit-team-member`',
  operationId: 'post-api-v1-teams.removeMember',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              teamId: z
                .string()
                .openapi({
                  description:
                    "Enter the team ID. Alternatively, enter the `teamName` parameter and provide the team's name as the value.",
                }),
              userId: z.string().openapi({ description: 'The user ID to remove from the team.' }),
              rooms: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The rooms (IDs) from which the user should be removed.' }),
            })
            .openapi({ required: ['teamId', 'userId'] }),
          examples: {
            Example: {
              value: {
                teamId: '63f3efc4b000b6b6d86704b2',
                userId: 'rYhzFRd2QZjNwAAXX',
                rooms: ['JKa7R9zu2DinBhBN9'],
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1TeamsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.delete',
  tags: ['Teams'],
  summary: 'Delete a Team',
  description:
    "Removes a team. \n\nPermission required: `delete-team`\n\nThe deletion completes even if the team's main room no longer exists, for example after an interrupted deletion. In that case, the main room is skipped, the team is removed, and the team name becomes available again. You can retry an interrupted deletion with this endpoint.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Succeeds when the main room is missing. |\n| 3.13.0  | Added |",
  operationId: 'post-api-v1-teams.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the team name. This parameter is required if `teamId` is not provided.',
                }),
              teamId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the team ID. This parameter is required if `teamName` is not provided.',
                }),
              roomsToRemove: z
                .array(z.string().openapi({ example: '8dugqGhuRvCBLdZft' }))
                .exactOptional()
                .openapi({ description: 'The room IDs to delete along with the team.' }),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: { teamId: 'mLGZGywfmLGZGywf', roomsToRemove: ['8dugqGhuRvCBLdZft'] },
            },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const getApiV1TeamsAutocompleteRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams.autocomplete',
  tags: ['Teams'],
  summary: 'Autocomplete Team',
  description: 'List the teams whose names match a given pattern.',
  operationId: 'get-api-v1-teams.autocomplete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The pattern (search filter for team names).',
            required: true,
            schema: { type: 'string' },
            example: 'team',
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
              teams: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      teamId: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                teams: [
                  {
                    _id: 'Dgh2xwJ3NFKWvKSqY',
                    name: 'team1',
                    fname: 'team1',
                    t: 'p',
                    teamId: '607e0d9b49d493189836bfac',
                  },
                ],
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

export const postApiV1TeamsConvertToChannelRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.convertToChannel',
  tags: ['Teams'],
  summary: 'Convert Team to Channel',
  description: 'Convert a team to a channel. Permission required: `convert-team`',
  operationId: 'post-api-v1-teams.convertToChannel',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamId: z
                .string()
                .openapi({ description: 'The team ID that you want to convert to a channel.' }),
            })
            .openapi({ required: ['teamId'] }),
          examples: { Example: { value: { teamId: '612b8ae982d286c3d1f5db31' } } },
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
            'Invalid Team Id': { value: { success: false, error: 'team-does-not-exist' } },
            'Team Id or Team name is required': {
              value: { success: false, error: 'missing-teamId-or-teamName' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1TeamsAddRoomsRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.addRooms',
  tags: ['Teams'],
  summary: 'Add Rooms to a Team',
  description: 'Add existing rooms to a team.\n\nPermission required: `move-room-to-team`',
  operationId: 'post-api-v1-teams.addRooms',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamId: z
                .string()
                .openapi({
                  description:
                    "Enter the team ID to which you want to add the rooms. Alternatively, enter the `teamName` parameter and provide the team's name as the value.",
                }),
              rooms: z
                .array(z.string())
                .openapi({ description: 'The IDs of the rooms to be added to the team.' }),
            })
            .openapi({ required: ['teamId', 'rooms'] }),
          examples: {
            Example: {
              value: { teamId: '607e0d9b49d493189836bfac', rooms: ['8Z7eRsibvD5AANfmK'] },
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
              rooms: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      customFields: z.looseObject({}).exactOptional(),
                      description: z.string().exactOptional(),
                      broadcast: z.boolean().exactOptional(),
                      encrypted: z.boolean().exactOptional(),
                      federated: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      lm: z.string().exactOptional(),
                      lastMessage: z
                        .object({
                          _id: z.string().exactOptional(),
                          t: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          groupable: z.boolean().exactOptional(),
                          blocks: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  blockId: z.string().exactOptional(),
                                  callId: z.string().exactOptional(),
                                  appId: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
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
                          _updatedAt: z.string().exactOptional(),
                          urls: z.array(z.looseObject({})).exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      teamId: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                rooms: [
                  {
                    _id: 'JKa7R9zu2DinBhBN9',
                    fname: 'Livestream',
                    customFields: {},
                    description: '',
                    broadcast: false,
                    encrypted: false,
                    federated: false,
                    name: 'Livestream',
                    t: 'c',
                    msgs: 15,
                    usersCount: 3,
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                    ts: '2023-02-22T17:15:26.989Z',
                    ro: false,
                    default: false,
                    sysMes: true,
                    _updatedAt: '2023-09-26T01:05:39.641Z',
                    lm: '2023-09-14T12:06:00.594Z',
                    lastMessage: {
                      _id: 'rtf5JoPLQup3X7Aof',
                      t: 'videoconf',
                      msg: '',
                      groupable: false,
                      blocks: [
                        {
                          type: 'video_conf',
                          blockId: '6502f728a2f73c7460df6f71',
                          callId: '6502f728a2f73c7460df6f71',
                          appId: 'videoconf-core',
                        },
                      ],
                      ts: '2023-09-14T12:06:00.594Z',
                      u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test', name: 'test test' },
                      rid: 'JKa7R9zu2DinBhBN9',
                      _updatedAt: '2023-09-14T12:06:00.685Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                    },
                    teamId: '63f3efc4b000b6b6d86704b2',
                  },
                ],
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

export const postApiV1TeamsRemoveRoomRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.removeRoom',
  tags: ['Teams'],
  summary: 'Remove Room from the Team',
  description:
    'Removes a room from a team. \n\nPermissions required: `remove-team-channel`, `view-all-team-channels`',
  operationId: 'post-api-v1-teams.removeRoom',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              teamName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the team name. This parameter is required if `teamId` is not provided.',
                  example: 'team01',
                }),
              teamId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the team ID. This parameter is required if `teamName` is not provided.',
                  example: 'd8eiFT9fIwfs',
                }),
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The room ID to be removed from the team.',
                  example: '8dugqGhuRvCBLdZft',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            Example: { value: { teamId: '63f3efc4b000b6b6d86704b2', roomId: 'JKa7R9zu2DinBhBN9' } },
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
                  fname: z.string().exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  description: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  federated: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  lm: z.string().exactOptional(),
                  lastMessage: z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      groupable: z.boolean().exactOptional(),
                      blocks: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              blockId: z.string().exactOptional(),
                              callId: z.string().exactOptional(),
                              appId: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
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
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
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
            Success: {
              value: {
                room: {
                  _id: 'JKa7R9zu2DinBhBN9',
                  fname: 'Livestream',
                  customFields: {},
                  description: '',
                  broadcast: false,
                  encrypted: false,
                  federated: false,
                  name: 'Livestream',
                  t: 'c',
                  msgs: 15,
                  usersCount: 3,
                  u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  ts: '2023-02-22T17:15:26.989Z',
                  ro: false,
                  default: false,
                  sysMes: true,
                  _updatedAt: '2023-09-29T05:51:47.779Z',
                  lm: '2023-09-14T12:06:00.594Z',
                  lastMessage: {
                    _id: 'rtf5JoPLQup3X7Aof',
                    t: 'videoconf',
                    msg: '',
                    groupable: false,
                    blocks: [
                      {
                        type: 'video_conf',
                        blockId: '6502f728a2f73c7460df6f71',
                        callId: '6502f728a2f73c7460df6f71',
                        appId: 'videoconf-core',
                      },
                    ],
                    ts: '2023-09-14T12:06:00.594Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test', name: 'test test' },
                    rid: 'JKa7R9zu2DinBhBN9',
                    _updatedAt: '2023-09-14T12:06:00.685Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                  },
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

export const postApiV1TeamsUpdateRoomRoute = createRoute({
  method: 'post',
  path: '/api/v1/teams.updateRoom',
  tags: ['Teams'],
  summary: 'Update Room in a Team',
  description:
    'Updates a room from a team. \n\nPermissions required: `edit-team-channel`, `view-all-team-channels`',
  operationId: 'post-api-v1-teams.updateRoom',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The room ID that you want to update.' }),
              isDefault: z
                .boolean()
                .openapi({ description: 'Sets the room as auto-join (true) or not (false).' }),
            })
            .openapi({ required: ['roomId', 'isDefault'] }),
          examples: { Example: { value: { roomId: 'JKa7R9zu2DinBhBN9', isDefault: true } } },
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
                  fname: z.string().exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  description: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  federated: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  lm: z.string().exactOptional(),
                  lastMessage: z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      groupable: z.boolean().exactOptional(),
                      blocks: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              blockId: z.string().exactOptional(),
                              callId: z.string().exactOptional(),
                              appId: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
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
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  teamId: z.string().exactOptional(),
                  teamDefault: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                room: {
                  _id: 'JKa7R9zu2DinBhBN9',
                  fname: 'Livestream',
                  customFields: {},
                  description: '',
                  broadcast: false,
                  encrypted: false,
                  federated: false,
                  name: 'Livestream',
                  t: 'c',
                  msgs: 16,
                  usersCount: 4,
                  u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                  ts: '2023-02-22T17:15:26.989Z',
                  ro: false,
                  default: false,
                  sysMes: true,
                  _updatedAt: '2023-09-29T06:00:18.859Z',
                  lm: '2023-09-14T12:06:00.594Z',
                  lastMessage: {
                    _id: 'rtf5JoPLQup3X7Aof',
                    t: 'videoconf',
                    msg: '',
                    groupable: false,
                    blocks: [
                      {
                        type: 'video_conf',
                        blockId: '6502f728a2f73c7460df6f71',
                        callId: '6502f728a2f73c7460df6f71',
                        appId: 'videoconf-core',
                      },
                    ],
                    ts: '2023-09-14T12:06:00.594Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test', name: 'test test' },
                    rid: 'JKa7R9zu2DinBhBN9',
                    _updatedAt: '2023-09-14T12:06:00.685Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                  },
                  teamId: '63f3efc4b000b6b6d86704b2',
                  teamDefault: true,
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

export const getApiV1TeamsListRoomsRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams.listRooms',
  tags: ['Teams'],
  summary: 'List Rooms of a Team',
  description:
    'List all rooms in a team. Permissions required: `view-all-teams`, `view-all-team-channels`',
  operationId: 'get-api-v1-teams.listRooms',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      teamId: OptionalTeamIdParamsSchema,
      teamName: OptionalTeamNameParamsSchema,
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: "The room's type (search filter).",
            schema: { type: 'string' },
            example: 'autoJoin',
            required: false,
          },
        }),
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              rooms: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      customFields: z.looseObject({}).exactOptional(),
                      description: z.string().exactOptional(),
                      broadcast: z.boolean().exactOptional(),
                      encrypted: z.boolean().exactOptional(),
                      federated: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      lm: z.string().exactOptional(),
                      lastMessage: z
                        .object({
                          _id: z.string().exactOptional(),
                          t: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          groupable: z.boolean().exactOptional(),
                          blocks: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  blockId: z.string().exactOptional(),
                                  callId: z.string().exactOptional(),
                                  appId: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
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
                          _updatedAt: z.string().exactOptional(),
                          urls: z.array(z.looseObject({})).exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      teamId: z.string().exactOptional(),
                      teamDefault: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                rooms: [
                  {
                    _id: 'JKa7R9zu2DinBhBN9',
                    fname: 'Livestream',
                    customFields: {},
                    description: '',
                    broadcast: false,
                    encrypted: false,
                    federated: false,
                    name: 'Livestream',
                    t: 'c',
                    msgs: 16,
                    usersCount: 4,
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                    ts: '2023-02-22T17:15:26.989Z',
                    ro: false,
                    default: false,
                    sysMes: true,
                    _updatedAt: '2023-09-29T06:02:30.250Z',
                    lm: '2023-09-14T12:06:00.594Z',
                    lastMessage: {
                      _id: 'rtf5JoPLQup3X7Aof',
                      t: 'videoconf',
                      msg: '',
                      groupable: false,
                      blocks: [
                        {
                          type: 'video_conf',
                          blockId: '6502f728a2f73c7460df6f71',
                          callId: '6502f728a2f73c7460df6f71',
                          appId: 'videoconf-core',
                        },
                      ],
                      ts: '2023-09-14T12:06:00.594Z',
                      u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test', name: 'test test' },
                      rid: 'JKa7R9zu2DinBhBN9',
                      _updatedAt: '2023-09-14T12:06:00.685Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                    },
                    teamId: '63f3efc4b000b6b6d86704b2',
                    teamDefault: true,
                  },
                ],
                total: 1,
                count: 1,
                offset: 0,
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

export const getApiV1TeamsListRoomsOfUserRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams.listRoomsOfUser',
  tags: ['Teams'],
  summary: 'List User Rooms of a Team',
  description:
    "Lists only the team's rooms that a particular user has joined.\n\nPermissions required: `view-all-teams`, `view-all-team-channels`",
  operationId: 'get-api-v1-teams.listRoomsOfUser',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({
      teamName: OptionalTeamNameParamsSchema,
      teamId: OptionalTeamIdParamsSchema,
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description: 'The user ID.',
            required: true,
            schema: { type: 'string' },
            example: 'rbAXrutTFbNprfn',
          },
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
              rooms: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      customFields: z.looseObject({}).exactOptional(),
                      description: z.string().exactOptional(),
                      broadcast: z.boolean().exactOptional(),
                      encrypted: z.boolean().exactOptional(),
                      federated: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      lm: z.string().exactOptional(),
                      lastMessage: z
                        .object({
                          _id: z.string().exactOptional(),
                          t: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          groupable: z.boolean().exactOptional(),
                          blocks: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  blockId: z.string().exactOptional(),
                                  callId: z.string().exactOptional(),
                                  appId: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
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
                          _updatedAt: z.string().exactOptional(),
                          urls: z.array(z.looseObject({})).exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      teamId: z.string().exactOptional(),
                      teamDefault: z.boolean().exactOptional(),
                      isLastOwner: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                rooms: [
                  {
                    _id: 'JKa7R9zu2DinBhBN9',
                    fname: 'Livestream',
                    customFields: {},
                    description: '',
                    broadcast: false,
                    encrypted: false,
                    federated: false,
                    name: 'Livestream',
                    t: 'c',
                    msgs: 16,
                    usersCount: 4,
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'roxie' },
                    ts: '2023-02-22T17:15:26.989Z',
                    ro: false,
                    default: false,
                    sysMes: true,
                    _updatedAt: '2023-09-29T06:02:30.250Z',
                    lm: '2023-09-14T12:06:00.594Z',
                    lastMessage: {
                      _id: 'rtf5JoPLQup3X7Aof',
                      t: 'videoconf',
                      msg: '',
                      groupable: false,
                      blocks: [
                        {
                          type: 'video_conf',
                          blockId: '6502f728a2f73c7460df6f71',
                          callId: '6502f728a2f73c7460df6f71',
                          appId: 'videoconf-core',
                        },
                      ],
                      ts: '2023-09-14T12:06:00.594Z',
                      u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'test.test', name: 'test test' },
                      rid: 'JKa7R9zu2DinBhBN9',
                      _updatedAt: '2023-09-14T12:06:00.685Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                    },
                    teamId: '63f3efc4b000b6b6d86704b2',
                    teamDefault: true,
                    isLastOwner: true,
                  },
                ],
                total: 1,
                count: 1,
                offset: 0,
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

export const getApiV1TeamsListChildrenRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams.listChildren',
  tags: ['Teams'],
  summary: 'List Rooms and Discussions of a Team',
  description:
    "Lists a particular team's public rooms, discussions, and the rooms (public/private) a user is part of from the team's main room.\nCurrently, this endpoint returns the discussions from the parent team rooms only; discussions from sub-channels are not returned.",
  operationId: 'get-api-v1-teams.listChildren',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({
      teamName: OptionalTeamNameParamsSchema,
      teamId: OptionalTeamIdParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'filter',
            description: 'Filter the results using the text you want to find.',
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'type',
            description:
              "You can choose the type of rooms you want in the response. Enter the value as `channels` or `discussions`. If you don't enter any value, both types are returned.",
            required: false,
          },
        }),
      roomId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: '66c82d78237405fc05fc1eef' },
            in: 'query',
            name: 'roomId',
            description:
              'The room ID. This parameter is required if you have not provided the `teamId` or the `teamName`.',
            required: false,
          },
          example: '66c82d78237405fc05fc1eef',
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
              total: z.int().exactOptional(),
              data: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      topic: z.string().exactOptional(),
                      broadcast: z.boolean().exactOptional(),
                      encrypted: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      default: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      teamId: z.string().exactOptional(),
                      teamMain: z.boolean().exactOptional(),
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
                        .exactOptional()
                        .openapi({ required: [] }),
                      lm: z.string().exactOptional(),
                      customFields: z.looseObject({}).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                total: 2,
                data: [
                  {
                    _id: '66c82d78237405fc05fc1eef',
                    fname: 'test-team',
                    _updatedAt: '2024-09-20T12:27:38.725Z',
                    topic: '',
                    broadcast: false,
                    encrypted: false,
                    name: 'test-team',
                    t: 'c',
                    msgs: 3,
                    usersCount: 1,
                    u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'test.cat' },
                    ts: '2024-08-23T06:34:32.413Z',
                    ro: false,
                    default: false,
                    sysMes: true,
                    teamId: '66c82d78237405fc05fc1ef1',
                    teamMain: true,
                    lastMessage: {
                      _id: 'ZaeoxcCsHLutRkh9m',
                      rid: '66c82d78237405fc05fc1eef',
                      msg: 'testing',
                      ts: '2024-09-20T12:27:38.634Z',
                      u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'test.cat' },
                      _updatedAt: '2024-09-20T12:27:38.686Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [
                        { type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'testing' }] },
                      ],
                    },
                    lm: '2024-09-20T12:27:38.634Z',
                  },
                  {
                    _id: '66ed2dba40141d95f32c292b',
                    fname: 'new-channel',
                    _updatedAt: '2024-09-20T12:29:08.284Z',
                    customFields: {},
                    topic: '',
                    broadcast: false,
                    encrypted: false,
                    name: 'new-channel',
                    t: 'p',
                    msgs: 3,
                    usersCount: 2,
                    u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'test.cat' },
                    ts: '2024-09-20T08:09:30.417Z',
                    ro: false,
                    teamId: '66c82d78237405fc05fc1ef1',
                    default: false,
                    sysMes: true,
                    lastMessage: {
                      _id: 'xZhJfE4rmaosjHZCe',
                      rid: '66ed2dba40141d95f32c292b',
                      msg: 'testing',
                      ts: '2024-09-20T12:27:53.356Z',
                      u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'test.cat' },
                      _updatedAt: '2024-09-20T12:27:53.397Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [
                        { type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'testing' }] },
                      ],
                    },
                    lm: '2024-09-20T12:27:53.356Z',
                  },
                ],
                offset: 0,
                count: 50,
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
                  "must have required property 'teamId'\n must have required property 'teamName'\n must have required property 'roomId'\n must match exactly one schema in oneOf [error-invalid-params]",
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

export const getApiV1GroupsOnlineRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.online',
  tags: ['Groups'],
  summary: 'Get Group Online Users',
  description:
    'Lists all online users of a particular group (private channel). You will not be able to view the users if you are not a member of this private channel, unless you have admin permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Made the `_id` parameter required. Returns `403` with `errorType: error-forbidden` instead of `400` when refused.       |\n| 0.52.0  | Added       |\n|7.0.0   | Replaced `query` parameter with `_id` parameter       |        ',
  operationId: 'get-api-v1-groups.online',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'query',
            description:
              "Enter the group's ID. You can find list of groups IDs using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
            required: true,
            schema: { type: 'string', example: '5HmCfpoB7jp2uibTC' },
          },
          example: '5HmCfpoB7jp2uibTC',
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
              online: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                online: [
                  { _id: '47cRd58HnWwpqxhaZ', username: 'test' },
                  { _id: 'BsxzC22xQ43taWdff', username: 'uniqueusername' },
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
            'Invalid or missing query parameter': {
              value: { success: false, error: 'Invalid query' },
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
            'Error if you are not a member of the private channel': {
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

export const getApiV1GroupsGetIntegrationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.getIntegrations',
  tags: ['Groups'],
  summary: 'Get Group Integrations',
  description:
    "Retrieves the integrations that the group/channel has. At least one of the following integration permissions is required:\n* `manage-incoming-integrations`\n* `manage-own-incoming-integrations`\n* `manage-outgoing-integrations`\n* `manage-own-outgoing-integrations`\n\nIt will return the integrations based on the user's permission. \n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `fields` and `query` parameters. Returns `403` with `errorType: error-forbidden` instead of `400` when refused.       |\n| 1.1.0  | Separate permissions in incoming and outgoing. |\n| 0.49.0 | Added                                          |",
  operationId: 'get-api-v1-groups.getIntegrations',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '6731de043b74d3c57d334d0c' },
            in: 'query',
            name: 'roomId',
            description:
              "Enter the private channel's ID. Alternatively, you can enter the room name using the `roomName` query parameter. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
            required: true,
          },
          example: '6731de043b74d3c57d334d0c',
        }),
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
              integrations: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      username: z.string().exactOptional(),
                      alias: z.string().exactOptional(),
                      avatar: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      triggerWords: z.array(z.string()).exactOptional(),
                      urls: z.array(z.string()).exactOptional(),
                      token: z.string().exactOptional(),
                      script: z.string().exactOptional(),
                      scriptEnabled: z.boolean().exactOptional(),
                      impersonateUser: z.boolean().exactOptional(),
                      scriptCompiled: z.string().exactOptional(),
                      scriptError: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      userId: z.string().exactOptional(),
                      channel: z.array(z.string()).exactOptional(),
                      _createdAt: z.string().exactOptional(),
                      _createdBy: z
                        .object({
                          username: z.string().exactOptional(),
                          _id: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                integrations: [
                  {
                    _id: 'WMQDChpnYTRmFre9h',
                    enabled: true,
                    username: 'rocket.cat',
                    alias: 'Guggy',
                    avatar: 'http://res.guggy.com/logo_128.png',
                    name: 'Guggy',
                    triggerWords: ['!guggy', 'guggy', 'gif+'],
                    urls: ['http://text2gif.guggy.com/guggify'],
                    token: '8DFS89DMKLWEN',
                    script:
                      "const config = {\n    color: '#ffffff'\n};\n\nclass Script {\n    prepare_outgoing_request({ request }) {\n        const trigger = request.data.trigger_word + ' ';\n        const phrase = request.data.text.replace(trigger, '');\n        request.headers['Content-Type']='application/json';\n        request.headers['apiKey']=request.data.token;\n        return {\n            url: request.url,\n            headers: request.headers,\n            data: {format: 'gif', sentence: phrase},\n            method: 'POST'\n        };\n    }\n\n    process_outgoing_response({ request, response }) {\n        if(response.content.gif) {\n            return {\n                content: {\n                    attachments: [\n                        {\n                            image_url: response.content.gif,\n                            color: ((config['color'] != '') ? '#' + config['color'].replace('#', '') : '#ffffff')\n                        }\n                    ]\n                }\n            };\n        } else {\n            return {\n                content: {\n                    text: 'Sorry I don\\'t have a photo for you :disappointed_relieved:'\n                }\n            };\n        }\n    }\n}",
                    scriptEnabled: true,
                    impersonateUser: false,
                    scriptCompiled:
                      "function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var config={color:'#ffffff'};var Script=function(){function Script(){_classCallCheck(this,Script)}Script.prototype.prepare_outgoing_request=function prepare_outgoing_request(_ref){var request=_ref.request;var trigger=request.data.trigger_word+' ';var phrase=request.data.text.replace(trigger,'');request.headers['Content-Type']='application/json';request.headers['apiKey']=request.data.token;return{url:request.url,headers:request.headers,data:{format:'gif',sentence:phrase},method:'POST'}};Script.prototype.process_outgoing_response=function process_outgoing_response(_ref2){var request=_ref2.request;var response=_ref2.response;if(response.content.gif){return{content:{attachments:[{image_url:response.content.gif,color:config['color']!=''?'#'+config['color'].replace('#',''):'#ffffff'}]}}}else{return{content:{text:'Sorry I don\\'t have a photo for you :disappointed_relieved:'}}}};return Script}();",
                    scriptError: '',
                    type: 'webhook-outgoing',
                    userId: 'rocket.cat',
                    channel: ['#private-group-name'],
                    _createdAt: '2017-01-05T17:06:05.660Z',
                    _createdBy: { username: 'graywolf336', _id: 'R4jgcQaQhvvK6K3iY' },
                    _updatedAt: '2017-01-05T17:06:05.660Z',
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
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
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
            'Example 2': {
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

export const postApiV1GroupsAddAllRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.addAll',
  tags: ['Groups'],
  summary: 'Add All Users to Group',
  description:
    'Add all workspace users to the private channel. You can do this if you are a member of the private channel or have admin permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.55.0  | Added       |',
  operationId: 'post-api-v1-groups.addAll',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "Enter the group ID. Alternatively, you can enter the name using the `roomName` query parameter. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                }),
              activeUsersOnly: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Add only active users to the room.' }),
            })
            .openapi({ required: ['roomId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', activeUsersOnly: 'true' } },
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
              channel: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                channel: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'groupname',
                  t: 'p',
                  usernames: ['example', 'rocket.cat'],
                  msgs: 0,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'example' },
                  ts: '2016-05-30T13:42:25.304Z',
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
                  'The required "roomId" or "roomName" param provided does not match any group [error-room-not-found]',
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

export const postApiV1GroupsAddLeaderRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.addLeader',
  tags: ['Groups'],
  summary: 'Add Group Leader',
  description:
    "Assign the `leader` role to a user in a private channel. Learn more about roles from the <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>Roles in Rocket.Chat</a> document.\n\nPermission required:  `set-leader` \n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.58.0  | Added.      |",
  operationId: 'post-api-v1-groups.addLeader',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description: "The groups's (private channel) ID.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              userId: z
                .string()
                .openapi({ description: "The user's ID.", example: 'oCHkav5Zf6vmpu2W2' }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'oCHkav5Zf6vmpu2W2' } },
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
            'User is already a leader': {
              value: {
                success: false,
                error: 'User is already a leader [error-user-already-leader]',
                errorType: 'error-user-already-leader',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsAddModeratorRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.addModerator',
  tags: ['Groups'],
  summary: 'Add Group Moderator',
  description:
    "Assign the `moderator` role to a user in a private channel. Learn more about roles from the <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>Roles in Rocket.Chat</a> document.\n\nPermission required: `set-moderator`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.49.4  | Added.      |",
  operationId: 'post-api-v1-groups.addModerator',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description: "The groups's (private channel) ID.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              userId: z
                .string()
                .openapi({ description: "The user's ID.", example: 'nSYqWzZ4GsKTX4dyK' }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'nSYqWzZ4GsKTX4dyK' } },
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
                  'The required "roomId" or "roomName" param provided does not match any group [error-room-not-found]',
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

export const postApiV1GroupsAddOwnerRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.addOwner',
  tags: ['Groups'],
  summary: 'Add Group Owner',
  description:
    "Assign `owner` role for a user in the current private channel. Learn more about roles from the <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>Roles in Rocket.Chat</a> document.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.49.4  | Added.      |",
  operationId: 'post-api-v1-groups.addOwner',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description: "Enter the group's (private channel) ID.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              userId: z
                .string()
                .openapi({ description: "Enter the user's ID.", example: 'nSYqWzZ4GsKTX4dyK' }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'nSYqWzZ4GsKTX4dyK' } },
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
                  'The required "roomId" or "roomName" param provided does not match any group [error-room-not-found]',
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

export const postApiV1GroupsArchiveRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.archive',
  tags: ['Groups'],
  summary: 'Archive a Group',
  description:
    'Archive a private channel. You need the `archive-room` permission.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 0.48.0  | Added       |',
  operationId: 'post-api-v1-groups.archive',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description:
                    "The group ID that you want to archive. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                }),
            })
            .openapi({ required: ['roomId'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
            'No permission': {
              value: {
                success: false,
                error: 'Not authorized [error-not-authorized]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1GroupsCloseRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.close',
  tags: ['Groups'],
  summary: 'Close Group',
  description:
    "Hides the private channel from the list of channels in the workspace sidebar, only if you're part of the group. It will reappear when someone sends a new message. You can search for hidden channels using the workspace **Directory**.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |",
  operationId: 'post-api-v1-groups.close',
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
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description:
                    "The group ID that you want to close. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                }),
            })
            .openapi({ required: [] }),
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
                  'The required "roomId" or "roomName" param provided does not match any group [error-room-not-found]',
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

export const getApiV1GroupsCountersRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.counters',
  tags: ['Groups'],
  summary: 'Get Group Counters',
  description:
    'Get the private channel information for the authenticated user. \n\nPermission required: `view-room-administration`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.65.0  | Added       |',
  operationId: 'get-api-v1-groups.counters',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: OptionalRoomIdParamsSchema,
      roomName: OptionalRoomNameParamsSchema,
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description:
              'Counters for provided user ID (you need to have the `view-room-administration` permission for calling user). This parameter is optional',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK\n\n**Note** The response returns the following information:\n- joined - Boolean flag that shows the particular user has joined the room or not.\n- members - Count of current room members.\n- unreads - Count of unread messages for specified user (calling user or for the provided `userId`).\n- unreadsFrom - Start date-time of unread interval for specified user.\n- msgs - Count of messages in the room.\n- latest - End date-time of unread interval for specified user (or date-time of last posted message).\n- userMentions - Count of user mentions in messages.',
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
            Success: {
              value: {
                joined: true,
                members: 1,
                unreads: 1,
                unreadsFrom: '2018-02-18T21:51:20.091Z',
                msgs: 1,
                latest: '2018-02-23T17:20:17.345Z',
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
                error:
                  'The required "roomId" or "roomName" param provided does not match any group [error-room-not-found]',
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

export const postApiV1GroupsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.create',
  tags: ['Groups'],
  summary: 'Create Group',
  description:
    "Create a new private channel, optionally including specified users. Refer to the <a href='https://docs.rocket.chat/docs/channels' target='_blank'>Channels</a> documents for information on the available room options.\n\nThe following permissions are required:\n* `create-p`: This permission is required to create a private channel.\n* `create-team-group`: This permission is required if you want to create a private channel from an existing team.\n\n### Changelog\n| Version | Description                                                                                 |\n| ------- | ------------------------------------------------------------------------------------------- |\n| 8.8.0   | Added support for enforcing end-to-end encryption when creating private rooms.             |\n| 6.4.1   | Added `excludeSelf` param                                                                   |\n| 0.35.0  | Added                                                                                       |",
  operationId: 'post-api-v1-groups.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'The name of the new private group.',
                  example: 'groupname',
                }),
              readOnly: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set if the private channel is read-only or not. The default value is false.',
                  example: false,
                }),
              members: z
                .array(z.string().openapi({ example: 'rocket.cat' }))
                .exactOptional()
                .openapi({
                  description: 'The users to add to the private channel when it is created.',
                }),
              excludeSelf: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to true, the user calling the endpoint is not added as a member of the private channel. The default value is false.',
                  example: false,
                }),
              customFields: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'You add custom fields for private rooms using this parameter. Enter the key and value that you want to associate with this room. For example, `{ "company": "sell-and-more" }`. The custom fields are not displayed in the workspace UI.',
                }),
              extraData: z
                .object({
                  broadcast: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the group should be a broadcast group. False by default.',
                    }),
                  encrypted: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the private room should use end-to-end encryption. When **Force end-to-end encryption on private rooms** is enabled, omit this field or set it to `true`. Setting it to `false` returns the `error-encrypted-private-rooms-enforced` error. Federated private rooms are exempt from this policy.',
                    }),
                  teamId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Enter the team ID for which you want to create a group. You will get an error if the team does not exist.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Enter the following details for the object:\n\nNote: For more information, see <a href="https://docs.rocket.chat/docs/channels" target="_blank">Channels</a>.',
                  required: [],
                }),
            })
            .openapi({ required: ['name'] }),
          examples: {
            Example: {
              value: {
                name: 'groupname',
                members: ['rocket.cat'],
                readOnly: true,
                excludeSelf: true,
                customFields: { type: 'default' },
                extraData: { broadcast: true, encrypted: true, teamId: '658441562dd9f928ad9951aa' },
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                group: {
                  _id: 'NtR6RQ7NvzA9ejecX',
                  name: 'testing',
                  t: 'p',
                  msgs: 0,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'tester' },
                  ts: '2016-12-09T16:53:06.761Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2016-12-09T16:53:06.761Z',
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
            'Name is required': {
              value: { success: false, error: 'Body param "name" is required' },
            },
            'Private room encryption is enforced': {
              value: {
                success: false,
                error:
                  'Workspace policy requires all private rooms to be encrypted. [error-encrypted-private-rooms-enforced]',
                errorType: 'error-encrypted-private-rooms-enforced',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.delete',
  tags: ['Groups'],
  summary: 'Delete Group',
  description:
    'Delete a private room.\n\nThe following permissions are required: \n* `delete-p`: To delete a private channel.\n* `delete-team-group`: To delete a private channel that is part of a team.\n\n### Changelog\n| Version | Description              |\n| ------- | ------------------------ |\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 0.71.0  | Removed `group` property |\n| 0.49.0  | Added                    |',
  operationId: 'post-api-v1-groups.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description:
                    "Enter the room ID. This parameter is required if no `roomName` is provided. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                }),
              roomName: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'private-abc',
                  description:
                    'Enter the room name. This parameter is required if no `roomId` is provided.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
            'No permission': {
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

export const getApiV1GroupsHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.history',
  tags: ['Groups'],
  summary: 'Get Group History',
  description:
    'Retrieves the messages from a private channel you belong to.\n\n### Changelog\n| Version | Description             |\n| ------- | ----------------------- |\n| 0.75.0  | Added `offset` property |\n| 0.48.0  | Added                   |',
  operationId: 'get-api-v1-groups.history',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: RoomIdParamsSchema,
      latest: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'latest',
            in: 'query',
            description:
              'The end of the time range of messages to retrieve. The default value is the current date and time.',
            schema: { type: 'string' },
            example: '2025-09-30T13:42:25.304Z',
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
            description: 'The start of the time range to retrieve messages.',
            schema: { type: 'string' },
            example: '2025-05-30T13:42:25.304Z',
            required: false,
          },
        }),
      inclusive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'inclusive',
            in: 'query',
            description:
              'Whether messages sent on the latest and oldest dates should be included. The default value is false.',
            schema: { type: 'boolean' },
            example: true,
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
            description:
              'Whether unread messages should be included in the response. The default value is false.',
            schema: { type: 'boolean' },
            example: false,
            required: false,
          },
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
            Success: {
              value: {
                messages: [
                  {
                    _id: 'AkzpHAvZpdnuchw2a',
                    rid: 'ByehQjC44FwMeiLbX',
                    msg: 'hi',
                    ts: '2025-12-09T12:50:51.555Z',
                    u: { _id: 'y65tAmHs93aDChMWu', username: 'testing' },
                    _updatedAt: '2025-12-09T12:50:51.562Z',
                  },
                  {
                    _id: 'vkLMxcctR4MuTxreF',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2025-12-08T15:41:37.730Z',
                    msg: 'testing2',
                    u: { _id: 'bRtgdhzM6PD9F8pSx', username: 'testing2' },
                    groupable: false,
                    _updatedAt: '2025-12-08T16:03:25.235Z',
                  },
                  {
                    _id: 'bfRW658nEyEBg75rc',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2025-12-07T15:47:49.099Z',
                    msg: 'testing',
                    u: { _id: 'nSYqWzZ4GsKTX4dyK', username: 'testing1' },
                    groupable: false,
                    _updatedAt: '2025-12-07T15:47:49.099Z',
                  },
                  {
                    _id: 'pbuFiGadhRZTKouhB',
                    t: 'uj',
                    rid: 'ByehQjC44FwMeiLbX',
                    ts: '2025-12-06T17:57:38.635Z',
                    msg: 'testing',
                    u: { _id: 'y65tAmHs93aDChMWu', username: 'testing' },
                    groupable: false,
                    _updatedAt: '2025-12-06T17:57:38.635Z',
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
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const getApiV1GroupsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.info',
  tags: ['Groups'],
  summary: 'Get Group Information',
  description:
    'Retrieves the information about a private channel you belong to.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |',
  operationId: 'get-api-v1-groups.info',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({ roomId: OptionalRoomIdParamsSchema, roomName: OptionalRoomNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  customFields: z.looseObject({}).exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  default: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                group: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'testing',
                  fname: 'testing',
                  t: 'p',
                  msgs: 0,
                  usersCount: 2,
                  u: { _id: 'HKKPmF8rZh45GMHWH', username: 'marc.anp' },
                  customFields: {},
                  broadcast: false,
                  encrypted: false,
                  ts: '2020-05-21T13:16:24.749Z',
                  ro: false,
                  default: false,
                  sysMes: true,
                  _updatedAt: '2020-05-21T13:16:24.772Z',
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
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const postApiV1GroupsInviteRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.invite',
  tags: ['Groups'],
  summary: 'Invite Users to Group',
  description:
    'Invite one user or bulk users to a private channel. Any of the following permissions are required:\n* `add-user-to-joined-room`: This permission is required if you want to add users to the channel that you have joined.\n* `add-user-to-any-p-room`: This permission is required to add users to any private channel.\n\nYou can identify the group by `roomId` or `roomName`, and the user(s) by `userId`, `username`, `userIds`, or `usernames`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 0.48.0  | Added       |',
  operationId: 'post-api-v1-groups.invite',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The group ID. This parameter is required if no `roomName` is provided. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              roomName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The group name. This parameter is required if no `roomId` is provided.',
                  example: 'private-abc',
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user to be invited. This parameter is required if no `username`, `userIds`, or `usernames` is provided.',
                  example: 'nSYqWzZ4GsKTX4dyK',
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The username of the user to be invited. This parameter is required if no `userId`, `userIds`, or `usernames` is provided.',
                  example: 'john.doe',
                }),
              userIds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of user IDs to invite. This parameter is required if no `userId`, `username`, or `usernames` is provided.',
                  example: ['nSYqWzZ4GsKTX4dyK', 'SYqWzZ4Gsasdfgh'],
                }),
              usernames: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of usernames to invite. This parameter is required if no `userId`, `username`, or `userIds` is provided.',
                  example: ['john.doe', 'jane.doe'],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invite by IDs': {
              value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'nSYqWzZ4GsKTX4dyK' },
            },
            'Invite by names': { value: { roomName: 'private-abc', username: 'john.doe' } },
            'Invite multiple users by ID': {
              value: {
                roomId: 'ByehQjC44FwMeiLbX',
                userIds: ['nSYqWzZ4GsKTX4dyK', 'SYqWzZ4Gsasdfgh'],
              },
            },
            'Invite multiple users by username': {
              value: { roomName: 'private-abc', usernames: ['john.doe', 'jane.doe'] },
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  msgs: z.int().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  lm: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                group: {
                  _id: 'ByehQjC44FwMeiLbX',
                  ts: '2016-11-30T21:23:04.737Z',
                  t: 'p',
                  name: 'testing',
                  usernames: ['testing', 'testing1'],
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                  msgs: 1,
                  _updatedAt: '2016-12-09T12:50:51.575Z',
                  lm: '2016-12-09T12:50:51.555Z',
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
            'Room parameter required': {
              value: {
                success: false,
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
              },
            },
            'User parameter required': {
              value: {
                success: false,
                error:
                  'Please provide "userId" or "username" or "userIds" or "usernames" as param [error-users-params-not-provided]',
                errorType: 'error-users-params-not-provided',
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
            'Permission required': {
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

export const postApiV1GroupsKickRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.kick',
  tags: ['Groups'],
  summary: 'Remove User from Group',
  description:
    'Remove a user from the private group/channel. Permission required: `kick-user-from-any-p-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 0.48.0  | Added       |',
  operationId: 'post-api-v1-groups.kick',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description: 'Enter the private room ID from which you want to remove the user.',
                  example: 'ByehQjC44FwMeiLbX',
                }),
              userId: z
                .string()
                .openapi({
                  description: 'Enter the user ID that you want to remove.',
                  example: 'nSYqWzZ4GsKTX4dyK',
                }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'nSYqWzZ4GsKTX4dyK' } },
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                group: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'invite-me',
                  t: 'p',
                  usernames: ['testing1'],
                  msgs: 0,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                  ts: '2016-12-09T15:08:58.042Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2016-12-09T15:22:40.656Z',
                },
                success: true,
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
            'No permission': {
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

export const postApiV1GroupsLeaveRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.leave',
  tags: ['Groups'],
  summary: 'Leave Group',
  description:
    'Leave a private channel. Leave a private channel. If a group owner is leaving, they must set another owner before leaving the group. Permission required: `leave-p`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |',
  operationId: 'post-groups.leave',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description: 'The group ID that you want to leave.',
                }),
            })
            .openapi({ required: [] }),
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                group: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'invite-me',
                  t: 'p',
                  usernames: ['testing2'],
                  msgs: 0,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                  ts: '2016-12-09T15:08:58.042Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2016-12-09T15:22:40.656Z',
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
            'Example 1': {
              value: {
                success: false,
                error:
                  'You are the last owner. Please set new owner before leaving the room. [error-you-are-last-owner]',
                errorType: 'error-you-are-last-owner',
                details: { method: 'leaveRoom' },
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const getApiV1GroupsListAllRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.listAll',
  tags: ['Groups'],
  summary: 'Get List of User Groups',
  description:
    "Lists all the private groups/channels of the workspace.\n\nPermission required: `view-room-administration`\n\n### Changelog\n| Version | Description                    |\n| ------- | ------------------------------ |\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 0.62.0  | Add 'query' parameter support. |\n| 0.59.0  | Added                          |",
  operationId: 'get-api-v1-groups.listAll',
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
              groups: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      customFields: z
                        .object({ companyId: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
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
            Success: {
              value: {
                groups: [
                  {
                    _id: 'xA52DRDM7dqx2PfTp',
                    name: 'private1',
                    fname: 'private1',
                    t: 'p',
                    msgs: 0,
                    u: { _id: '3WpJQkDHhrWPBvXuW', username: 'admin' },
                    customFields: { companyId: 'org1' },
                    ts: '2018-01-21T21:05:06.729Z',
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2018-01-21T21:05:06.729Z',
                  },
                ],
                offset: 0,
                count: 1,
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

export const getApiV1GroupsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.list',
  tags: ['Groups'],
  summary: 'Get Groups',
  description:
    'Lists all the private channels you are a member of.\n\n### Changelog\n| Version | Description                                  |\n| ------- | -------------------------------------------- |\n| 0.67.0  | Removed `query` parameter support.           |\n| 0.62.0  | Add `query` parameter support.               |\n| 0.49.0  | Count and offset query parameters supported. |\n| 0.33.0  | Added                                        |',
  operationId: 'get-api-v1-groups.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'sort',
            description:
              'Sort the channels in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON object. The options are as follows:\n * `name`: Sort by the channel name. For example, `sort={"name":1}` (this is the default sorting mechanism).\n * `ts`: Sort by channel creation timestamp. For example, `sort={"ts":-1}`\n * `usersCount`: Sort by the number of users in the channel. For example, `sort={"usersCount":1}`',
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
              groups: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                      ro: z.boolean().exactOptional(),
                      sysMes: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
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
            Success: {
              value: {
                groups: [
                  {
                    _id: 'ByehQjC44FwMeiLbX',
                    name: 'test-test',
                    t: 'p',
                    msgs: 0,
                    u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                    ts: '2016-12-09T15:08:58.042Z',
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2016-12-09T15:22:40.656Z',
                  },
                  {
                    _id: 't7qapfhZjANMRAi5w',
                    name: 'testing',
                    t: 'p',
                    msgs: 0,
                    u: { _id: 'y65tAmHs93aDChMWu', username: 'testing2' },
                    ts: '2016-12-01T15:08:58.042Z',
                    ro: false,
                    sysMes: true,
                    _updatedAt: '2016-12-09T15:22:40.656Z',
                  },
                ],
                offset: 0,
                count: 1,
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

export const getApiV1GroupsMembersRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.members',
  tags: ['Groups'],
  summary: 'List Group Members',
  description:
    'Lists the members of a private group. \n\nPermission required if the room is broadcast.: `view-broadcast-member-list`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.59.0  | Added       |',
  operationId: 'get-api-v1-groups.members',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: OptionalRoomIdParamsSchema,
      roomName: OptionalRoomNameParamsSchema,
      sort: SortParamsSchema,
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: "The user's status (search filter).",
            schema: { type: 'array', items: { type: 'string' } },
            example: '["online", "away"]',
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Extra search filters to be applied to the fields defined in the `Accounts_SearchFields` setting.',
            schema: { type: 'string' },
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
              members: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      utcOffset: z.int().exactOptional(),
                      username: z.string().exactOptional(),
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
                members: [
                  {
                    _id: 'Q4GkX6RMepGDdQ7YJ',
                    status: 'online',
                    name: 'Marc Pow',
                    utcOffset: -3,
                    username: 'marc.pow',
                  },
                  {
                    _id: 'rocket.cat',
                    name: 'Rocket.Cat',
                    username: 'rocket.cat',
                    status: 'online',
                    utcOffset: 0,
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
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const getApiV1GroupsMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.messages',
  tags: ['Groups'],
  summary: 'Get Group Messages',
  description:
    'Lists all the messages in a private channel. \n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `query` parameter.       |\n| 7.0.0  | Added `mentionIds`, `starredIds`, `pinned` query parameters.|\n| 0.59.0  | Added       |',
  operationId: 'get-api-v1-groups.messages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: OptionalRoomIdParamsSchema,
      roomName: OptionalRoomNameParamsSchema,
      sort: SortParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
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
            example: 'dud0wu900',
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
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'pinned',
            in: 'query',
            description: 'Filter pinned messages.',
            schema: { type: 'boolean' },
            example: 'true',
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
                      attachments: z.array(AttachmentSchema).exactOptional(),
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
                messages: [
                  {
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
                  {
                    _id: 'MrAeupRiF9TvhMesK',
                    t: 'room_changed_privacy',
                    rid: 'agh2Sucgb54RQ8dDo',
                    ts: '2018-10-05T00:11:16.998Z',
                    msg: 'Private Group',
                    u: {
                      _id: 'rocketchat.internal.admin.test',
                      username: 'rocketchat.internal.admin.test',
                    },
                    groupable: false,
                    _updatedAt: '2018-10-05T00:11:16.998Z',
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
                error:
                  "must have required property 'roomId'\n must have required property 'roomName'\n must match exactly one schema in oneOf [error-invalid-params]",
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

export const getApiV1GroupsModeratorsRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.moderators',
  tags: ['Groups'],
  summary: 'Get Group Moderators',
  description:
    'Lists the moderators of a private channel.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.70.0  | Added       |',
  operationId: 'get-api-v1-groups.moderators',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ roomId: OptionalRoomIdParamsSchema, roomName: OptionalRoomNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              moderators: z.array(z.looseObject({})).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                moderators: [{ _id: 'hifeRG56fjlsp', username: 'marc.cat', name: 'Marc Cat' }],
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
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const postApiV1GroupsOpenRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.open',
  tags: ['Groups'],
  summary: 'Add Group to List',
  description:
    "Use this endpoint to add the private group/channel back to the list of rooms in the workspace sidebar, if you have used the <a href='https://developer.rocket.chat/apidocs/close-group' target='_blank'>groups.close</a> endpoint to remove the channel from the sidebar.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |",
  operationId: 'post-api-v1-groups.open',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description:
                    'The room ID that you want to add to the sidebar. Alternatively, you can use the `roomName` parameter and enter the room name, instead of the ID.',
                }),
            })
            .openapi({ required: ['roomId'] }),
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
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const postApiV1GroupsRemoveLeaderRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.removeLeader',
  tags: ['Groups'],
  summary: 'Remove Group Leader',
  description:
    'Remove the `leader` role from a user in a private channel. \n\nPermission required: `set-leader`\n\n\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n| 0.58.0  | Added       |',
  operationId: 'post-api-v1-groups.removeLeader',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The private group ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              userId: z
                .string()
                .openapi({ description: 'The user ID.', example: 'oCHkav5Zf6vmpu2W2' }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'oCHkav5Zf6vmpu2W2' } },
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
            'User is not a leader': {
              value: {
                success: false,
                error: 'User is not a leader [error-user-not-leader]',
                errorType: 'error-user-not-leader',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsRemoveModeratorRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.removeModerator',
  tags: ['Groups'],
  summary: 'Remove Group Moderator',
  description:
    'Remove the `moderator` role from a user in a private channel. \n\nPermission required: `set-moderator`\n\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n| 0.49.4  | Added       |',
  operationId: 'post-api-v1-groups.removeModerator',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The private group ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              userId: z
                .string()
                .openapi({
                  description:
                    'The ID of the user to be removed from moderator role. Alternatively, you can use the `userName` parameter and enter the username, instead of the ID.',
                  example: 'oCHkav5Zf6vmpu2W2',
                }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Success: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'oCHkav5Zf6vmpu2W2' } },
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
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param was not provided [error-user-param-not-provided]',
                errorType: 'error-user-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsRemoveOwnerRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.removeOwner',
  tags: ['Groups'],
  summary: 'Remove Group Owner',
  description:
    'Remove the `owner` role from a user in a private channel. \n\nPermission required: `set-owner` \n\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n| 0.49.4  | Added       |\n',
  operationId: 'post-api-v1-groups.removeOwner',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The private group ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              userId: z
                .string()
                .openapi({
                  description: 'The ID of the user to be removed as owner ',
                  example: 'oCHkav5Zf6vmpu2W2',
                }),
            })
            .openapi({ required: ['roomId', 'userId'] }),
          examples: {
            Success: { value: { roomId: 'ByehQjC44FwMeiLbX', userId: 'oCHkav5Zf6vmpu2W2' } },
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
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param was not provided [error-user-param-not-provided]',
                errorType: 'error-user-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsRenameRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.rename',
  tags: ['Groups'],
  summary: 'Rename Group',
  description:
    'Rename a private channel. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |',
  operationId: 'post-api-v1-groups.rename',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The private group's ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The new name of the private group. It can not be the same as another or the existing name.',
                  example: 'newname',
                }),
            })
            .openapi({ required: ['roomId', 'name'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMeiLbX', name: 'new-name' } } },
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                group: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'new-name',
                  t: 'p',
                  usernames: ['testing1'],
                  msgs: 4,
                  u: { _id: 'aobEdbYhXfu5hkeqG', username: 'testing1' },
                  ts: '2016-12-09T15:08:58.042Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2016-12-09T15:57:44.686Z',
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
            'Example 1': { value: { success: false, error: 'The bodyParam "name" is required' } },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const postApiV1GroupsSetAnnouncementRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.setAnnouncement',
  tags: ['Groups'],
  summary: 'Set Group Announcement',
  description:
    'Set the private channel announcement. Announcements are displayed at the top of the rooms, under the header.\nPermission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.70.0  | Added       |',
  operationId: 'post-api-v1-groups.setAnnouncement',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The private group ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              announcement: z
                .string()
                .openapi({
                  description: 'The announcement to set for the private group.',
                  example: 'Test announcement',
                }),
            })
            .openapi({ required: ['roomId', 'announcement'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', announcement: 'Test announcement' } },
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
              announcement: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { Success: { value: { announcement: 'Test out everything.', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsSetCustomFieldsRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.setCustomFields',
  tags: ['Groups'],
  summary: 'Set Group Custom Fields',
  description:
    'Set custom fields for the private channel. These custom fields are not displayed on the workspace UI.\nPermission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.62.0  | Added       |',
  operationId: 'post-api-v1-groups.setCustomFields',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The private group's ID. Alternatively, use the `roomName` parameter and provide the room's name as the value. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'euzoT67Gx6nXcn66M',
                }),
              customFields: z
                .looseObject({})
                .openapi({ description: 'The custom fields to set for the private group.' }),
            })
            .openapi({ required: ['roomId', 'customFields'] }),
          examples: {
            Example: {
              value: { roomId: 'euzoT67Gx6nXcn66M', customFields: { company: 'sell-and-more' } },
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sidepanel: z
                    .object({ items: z.array(z.string()).exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  teamId: z.string().exactOptional(),
                  teamMain: z.boolean().exactOptional(),
                  rolePrioritiesCreated: z.int().exactOptional(),
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
                    .exactOptional()
                    .openapi({ required: [] }),
                  lm: z.string().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  e2eKeyId: z.string().exactOptional(),
                  retention: z
                    .object({
                      enabled: z.boolean().exactOptional(),
                      overrideGlobal: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  announcement: z.string().exactOptional(),
                  announcementDetails: z.string().exactOptional(),
                  customFields: z
                    .object({ company: z.string().exactOptional() })
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
                group: {
                  _id: '66c88dae237405fc05fc1f06',
                  fname: 'api-team2',
                  _updatedAt: '2025-11-20T08:26:12.813Z',
                  name: 'api-team2',
                  t: 'p',
                  msgs: 17,
                  usersCount: 2,
                  u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'test.cat' },
                  ts: '2024-08-23T13:25:02.959Z',
                  ro: false,
                  sidepanel: { items: ['discussions'] },
                  teamId: '66c88daf237405fc05fc1f08',
                  teamMain: true,
                  rolePrioritiesCreated: 2,
                  lastMessage: {
                    _id: '3yXev48EfPnBwfvDN',
                    rid: '66c88dae237405fc05fc1f06',
                    msg: 'hello world',
                    ts: '2025-10-28T06:32:52.861Z',
                    u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'Test Cat' },
                    _updatedAt: '2025-10-28T06:32:52.983Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [
                      { type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hello world' }] },
                    ],
                  },
                  lm: '2025-10-28T06:32:52.861Z',
                  encrypted: false,
                  e2eKeyId: '8ee4c64e1012',
                  retention: { enabled: false, overrideGlobal: false },
                  announcement: 'testing announcement',
                  announcementDetails: null,
                  customFields: { company: 'sell-and-more' },
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
            'Example 1': {
              value: {
                success: false,
                error: 'The bodyParam "customFields" is required with a type like object.',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const postApiV1GroupsSetDescriptionRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.setDescription',
  tags: ['Groups'],
  summary: 'Set Group Description',
  description:
    'Set the description for the private channel. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |',
  operationId: 'post-api-v1-groups.setDescription',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The private group ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              description: z
                .string()
                .openapi({
                  description: 'Enter a description for the private channel.',
                  example: 'Test description',
                }),
            })
            .openapi({ required: ['roomId', 'description'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', description: 'Test out everything' } },
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
              description: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: { value: { description: 'Testing out everything.', success: true } },
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
              value: { success: false, error: 'The bodyParam "description" is required' },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const postApiV1GroupsSetPurposeRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.setPurpose',
  tags: ['Groups'],
  summary: 'Set Group Purpose',
  description:
    '(Obsolete) Sets the description for the group/channel (the same as `groups.setDescription`).\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |',
  operationId: 'post-api-v1-groups.setPurpose',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The private group ID.' }),
              purpose: z.string().openapi({ description: 'The group purpose' }),
            })
            .openapi({ required: ['roomId', 'purpose'] }),
          examples: {
            Example: { value: { roomId: 'ByehQjC44FwMeiLbX', purpose: 'Test out everything' } },
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
            .object({ purpose: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { Success: { value: { purpose: 'Testing out everything.', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsSetReadOnlyRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.setReadOnly',
  tags: ['Groups'],
  summary: 'Set Group as Read Only',
  description:
    "Set or unset a private channel as <a href='https://docs.rocket.chat/docs/channels#readonly-channels' target='_blank'>read-only</a>. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.49.0  | Added       |",
  operationId: 'post-api-v1-groups.setReadOnly',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The private group ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMei5LbX',
                }),
              readOnly: z
                .boolean()
                .openapi({
                  description: 'Boolean to represent the group read-only status',
                  example: true,
                }),
            })
            .openapi({ required: ['roomId', 'readOnly'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMei5LbX', readOnly: true } } },
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  joinCodeRequired: z.boolean().exactOptional(),
                  muted: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                group: {
                  _id: 'ByehQjC44FwMei5LbX',
                  name: 'testing-private',
                  t: 'p',
                  msgs: 0,
                  u: { _id: 'aiPqNoGkjpNDiRx6d', username: 'goose160' },
                  ts: '2017-01-05T18:02:50.754Z',
                  ro: true,
                  sysMes: true,
                  _updatedAt: '2017-01-05T19:02:24.429Z',
                  usernames: ['goose160', 'graywolf336'],
                  joinCodeRequired: true,
                  muted: [],
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
            'Example 1': {
              value: {
                success: false,
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
                errorType: 'error-room-param-not-provided',
              },
            },
            'Example 2': {
              value: { success: false, error: 'The bodyParam "readOnly" is required' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsSetTopicRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.setTopic',
  tags: ['Groups'],
  summary: 'Set Group Topic',
  description:
    'Sets the topic for the private channel. The topic is displayed next to the room name in the header. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |',
  operationId: 'post-api-v1-groups.setTopic',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The group ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                  example: 'ByehQjC44FwMeiLbX',
                }),
              topic: z
                .string()
                .openapi({ description: "Enter the group's topic.", example: 'QA discussions' }),
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
          examples: { Success: { value: { topic: 'Testing out everything.', success: true } } },
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
            'Example 1': { value: { success: false, error: 'The bodyParam "topic" is required' } },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const postApiV1GroupsSetTypeRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.setType',
  tags: ['Groups'],
  summary: 'Set Group Type',
  description:
    "Set the room type. The group type can be either `c` (public) or `p` (private). Any of the following permissions are required:\n* `create-c`: This permission is required if you are changing a private channel to a public channel.\n* `create-p`: This permission is required if you are changing a public channel to a private room.\n* `create-team-channel`: This permission is required if you are changing a team's private channel to a public channel.\n* `create-team-group`: This permission is required if you are changing a team's public channel to a private room.\n\nFor ABAC-managed private rooms, changing the type from `p` to `c` is rejected with `error-action-not-allowed`.\nWhen the type changes to `c` (public) and the group has ABAC attributes, all ABAC attributes on the group are cleared as part of the conversion.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.5.0   | Added ABAC behavior for `p` -> `c`: ABAC-managed private rooms are rejected, and successful conversions to public clear group ABAC attributes. |\n| 0.49.0  | Added       |",
  operationId: 'post-api-v1-groups.setType',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    "The group ID. You can find the IDs by using any of the following endpoints:\n* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.\n* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.",
                }),
              type: z.string().openapi({ description: 'Enter the group type.' }),
            })
            .openapi({ required: ['roomId', 'type'] }),
          examples: { Example: { value: { roomId: 'ByehQjC44FwMeiLbX', type: 'c' } } },
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  usernames: z.array(z.string()).exactOptional(),
                  joinCodeRequired: z.boolean().exactOptional(),
                  muted: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                group: {
                  _id: 'ByehQjC44FwMeiLbX',
                  name: 'testing0',
                  t: 'c',
                  msgs: 0,
                  u: { _id: 'aiPqNoGkjpNDiRx6d', username: 'goose160' },
                  ts: '2017-01-05T18:02:50.754Z',
                  ro: false,
                  sysMes: true,
                  _updatedAt: '2017-01-05T19:02:24.429Z',
                  usernames: ['goose160', 'graywolf336'],
                  joinCodeRequired: true,
                  muted: [],
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
                .object({ method: z.string().exactOptional(), action: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing body param: type': {
              value: { success: false, error: 'The bodyParam "type" is required' },
            },
            'ABAC-managed room conversion blocked': {
              value: {
                success: false,
                error:
                  'Changing an ABAC managed private room to public is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
                details: { method: 'saveRoomSettings', action: 'Change_Room_Type' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1GroupsUnarchiveRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.unarchive',
  tags: ['Groups'],
  summary: 'Unarchive Group',
  description:
    'Unarchive a private channel. Permission required: `unarchive-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.48.0  | Added       |',
  operationId: 'post-api-v1-groups.unarchive',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  example: 'ByehQjC44FwMeiLbX',
                  description: 'The room ID that you want to unarchive.',
                }),
            })
            .openapi({ required: ['roomId'] }),
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
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const getApiV1GroupsFilesRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.files',
  tags: ['Groups'],
  summary: 'Get Group Files',
  description:
    'Get all media files shared in a private channel.  \n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n| 0.64.0  | Change userId to user object in response       |\n| 0.59.0  | Added                                          |',
  operationId: 'get-api-v1-groups.files',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomName: OptionalRoomNameParamsSchema,
      roomId: OptionalRoomIdParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      typeGroup: FilterTypeGroupParamsSchema,
      name: FilterNameParamsSchema,
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
                      description: z.string().exactOptional(),
                      store: z.string().exactOptional(),
                      complete: z.boolean().exactOptional(),
                      uploading: z.boolean().exactOptional(),
                      extension: z.string().exactOptional(),
                      progress: z.int().exactOptional(),
                      user: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      instanceId: z.string().exactOptional(),
                      etag: z.string().exactOptional(),
                      path: z.string().exactOptional(),
                      token: z.string().exactOptional(),
                      uploadedAt: z.string().exactOptional(),
                      url: z.string().exactOptional(),
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
                files: [
                  {
                    _id: 'S78TNnvaWGwdYRaCD',
                    name: 'images.jpeg',
                    size: 9778,
                    type: 'image/jpeg',
                    rid: 'GENERAL',
                    description: '',
                    store: 'GridFS:Uploads',
                    complete: true,
                    uploading: false,
                    extension: 'jpeg',
                    progress: 1,
                    user: { _id: 'ksKsKmrjvxzkzxkww', username: 'rocket.cat', name: 'Rocket Cat' },
                    _updatedAt: '2018-03-08T14:47:37.003Z',
                    instanceId: 'uZG54xuoKauKHykbQ',
                    etag: 'jPaviS9qG22xC5sDC',
                    path: '/file-upload/S78TNnvaWGwdYRaCD/images.jpeg',
                    token: '28cAb868d9',
                    uploadedAt: '2018-03-08T14:47:37.295Z',
                    url: '/file-upload/S78TNnvaWGwdYRaCD/images.jpeg',
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
                error:
                  "must have required property 'roomId'\n must have required property 'roomName'\n must match exactly one schema in oneOf ",
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

export const postApiV1GroupsSetEncryptedRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.setEncrypted',
  tags: ['Groups'],
  summary: 'Set Group as Encrypted',
  description:
    "Set a private channel as encrypted. Learn about <a href='https://docs.rocket.chat/v1/docs/end-to-end-encryption-user-guide' target='_blank'>end-to-end encryption here</a>. Permission required: `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 3.13.0  | Added       |",
  operationId: 'post-api-v1-groups.setEncrypted',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encrypted: z
                .boolean()
                .openapi({ description: 'Whether or not to encrypt the room.' }),
              roomId: z
                .string()
                .openapi({
                  description:
                    'The group ID. Alternatively, use the `roomName` parameter and enter the group name.',
                }),
            })
            .openapi({ required: ['encrypted', 'roomId'] }),
          examples: { Example: { value: { encrypted: false, roomId: 'JZ8Y2dLfYhsg323Rf' } } },
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
              group: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  broadcast: z.boolean().exactOptional(),
                  encrypted: z.boolean().exactOptional(),
                  teamMain: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  msgs: z.int().exactOptional(),
                  usersCount: z.int().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ts: z.string().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  teamId: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                group: {
                  _id: 'JZ8Y2dLfYhsg323Rf',
                  fname: 'test',
                  description: '',
                  broadcast: false,
                  encrypted: false,
                  teamMain: true,
                  name: 'test',
                  t: 'p',
                  msgs: 0,
                  usersCount: 1,
                  u: { _id: 'd26x6zSkaPSe5gCyy', username: 'rodriq' },
                  ts: '2021-10-22T11:59:17.029Z',
                  ro: false,
                  teamId: '6172a795c563fc000acc4629',
                  _updatedAt: '2021-10-22T12:00:11.496Z',
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
            'Invalid  RoomId or RoomName': {
              value: {
                success: false,
                error:
                  'The required "roomId" or "roomName" param provided does not match any group [error-room-not-found]',
                errorType: 'error-room-not-found',
              },
            },
            'No RoomId or Roomname': {
              value: {
                success: false,
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const postApiV1GroupsConvertToTeamRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups.convertToTeam',
  tags: ['Groups'],
  summary: 'Convert a Group to Team',
  description:
    'Convert a private channel to a team. Permissions required: `create-team`, `edit-room`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 3.13.0  | Added       |',
  operationId: 'post-api-v1-groups.convertToTeam',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description:
                    'Enter the private channel that you want to convert to a private team.',
                  example: 'JZ8Y2dLfYhsg323Rf',
                }),
            })
            .openapi({ required: ['roomId'] }),
          examples: { 'Example 1': { value: { roomId: 'JZ8Y2dLfYhsg323Rf' } } },
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
              team: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  type: z.int().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  roomId: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                team: {
                  _id: '6172b15bc563fc000acc462e',
                  name: 'ddd',
                  type: 1,
                  createdAt: '2021-10-22T12:40:59.928Z',
                  createdBy: { _id: 'd26x6zSkaPSe5gCyy', username: 'rod' },
                  _updatedAt: '2021-10-22T12:40:59.928Z',
                  roomId: 'h3HLZkQdrWCPg2RN7',
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
            'Team name exists': { value: { success: false, error: 'team-name-already-exists' } },
            'Room name is required': {
              value: { success: false, error: 'The parameter "roomId" or "roomName" is required' },
            },
            'Room not found': {
              value: {
                success: false,
                error:
                  'The required "roomId" or "roomName" param provided does not match any group [error-room-not-found]',
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

export const getApiV1GroupsRolesRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups.roles',
  tags: ['Groups'],
  summary: 'List Group Roles',
  description:
    'List all the roles of users in the private channel.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.65.0  | Added       |',
  operationId: 'get-api-v1-groups.roles',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '67ade8ef57422a89b02e2ce3' },
            in: 'query',
            name: 'roomId',
            description:
              "Enter the private channel ID. Alternatively, you can use the `roomName` parameter and enter the private channel's name.",
            required: true,
          },
          example: '67ade8ef57422a89b02e2ce3',
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
              roles: z
                .array(
                  z
                    .object({
                      rid: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      roles: z.array(z.string()).exactOptional(),
                      _id: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                roles: [
                  {
                    rid: 'BaE62jfDLXK3Xo6BA',
                    u: {
                      _id: 'BkNkw3iKgNyhMbPyW',
                      username: 'ronnie.dio',
                      name: 'Ronnie James Dio',
                    },
                    roles: ['moderator'],
                    _id: 'ehPuGyZBedznJsQHp',
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
                error:
                  'The parameter "roomId" or "roomName" is required [error-room-param-not-provided]',
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

export const getApiV1DirectoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/directory',
  tags: ['Directory'],
  summary: 'Directory',
  description:
    'Search workspace directory for users, channels and teams. \n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `query` parameter.       |\n| 8.9.0   | Changed the rate limit to 100 requests every 100 seconds per client IP addres. |\n| 7.0.0   | Added `type`, `workspace` and `text` query parameters |\n| 1.0.0   | Added workspace query param |\n| 0.65.0  | Added Pagination fields: count, total, offset |\n| 0.64.0  | Added |',
  operationId: 'get-api-v1-directory',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            description: 'The search term to be filtered',
            schema: { type: 'string' },
            example: 'rocket',
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'It can be `channels` or `users`.\nWhen `type` is users you can send an additional workspace field, that can be local (default) or all. Workspace=all will work only if <a href="https://docs.rocket.chat/use-rocket.chat/rocket.chat-federation" target="_blank">federation</a> is enabled.',
            schema: { type: 'string' },
            example: 'users',
            required: false,
          },
        }),
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'workspace',
            in: 'query',
            description:
              'It can be `local` or `all`( if federation is enabled). It is `local` by default.',
            schema: { type: 'string' },
            example: 'local',
            required: false,
          },
        }),
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
              result: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      emails: z
                        .array(
                          z
                            .object({
                              address: z.string().exactOptional(),
                              verified: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      name: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      avatarETag: z.string().exactOptional(),
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
                result: [
                  {
                    _id: 'jRca8kibJx8NkLJxt',
                    createdAt: '2018-04-13T12:46:26.517Z',
                    emails: [{ address: 'user.test.1523623548558@rocket.chat', verified: false }],
                    name: 'EditedRealNameuser.test.1523623548558',
                    username: 'editedusernameuser.test.1523623548558',
                    avatarETag: '6YbLtc4v9b4conXon',
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

export const postApiV1RoomsOpenRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.open',
  tags: ['Rooms'],
  summary: 'Open a Room',
  description:
    'Marks a room as "open" for the user, i.e. removes it from the\nuser\'s list of hidden rooms and puts it back in the sidebar.',
  operationId: 'post-api-v1-rooms.open',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ roomId: z.string().openapi({ description: 'The ID of the room to open.' }) })
            .openapi({ required: ['roomId'] }),
          examples: { Example: { value: { roomId: 'GENERAL' } } },
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
            'Missing roomId': {
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

export const postApiV1RoomsHideRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.hide',
  tags: ['Rooms'],
  summary: 'Hide Room',
  description:
    'Hide rooms without restrictions based on type. You can only hide a room if you have access to it.\n\n### Changelog\n\n| Version | Description                          |\n| ------- | ------------------------------------ |\n|9.0.0   | Returns `403` instead of `401` when the caller is not authorized.       |\n| 7.4.0   | Added                                |\n',
  operationId: 'post-api-v1-rooms.hide',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ roomId: z.string().exactOptional() })
            .openapi({
              'x-examples': { 'Example 1': { roomId: '6759dea438288929cff551c' } },
              required: [],
            }),
          examples: {
            'Request body with roomId': { value: { roomId: '6759dea438288929cff551c' } },
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
            .object({ success: z.boolean().exactOptional() })
            .openapi({ 'x-examples': { 'Example 1': { success: true } }, required: [] }),
          examples: { 'Example 1': { value: { success: true } } },
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
            .openapi({
              'x-examples': {
                'Example 1': {
                  success: false,
                  error: "must have required property 'roomId' [error-invalid-params]",
                  errorType: 'error-invalid-params',
                },
              },
              required: [],
            }),
          examples: {
            'Error due to missing roomId': {
              value: {
                success: false,
                error: "must have required property 'roomId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Room already hidden error': {
              value: { success: false, error: 'error-room-already-hidden' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { Forbidden: { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const postApiV1FindOrCreateInviteRoute = createRoute({
  method: 'post',
  path: '/api/v1/findOrCreateInvite',
  tags: ['Room Invites'],
  summary: 'Find or Create Invite',
  description:
    'Creates or return an existing invite with the specified parameters. \n\n<a href="https://docs.rocket.chat/docs/permissions" target="_blank">Permission</a> required: `create-invite-links`',
  operationId: 'post-api-v1-findOrCreateInvite',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z
                .string()
                .openapi({ description: 'The room ID that the invite is being created for.' }),
              days: z
                .int()
                .openapi({
                  description:
                    'The number of days that the invite will be valid for. Send `0` for unlimited.',
                }),
              maxUses: z
                .int()
                .openapi({
                  description:
                    'The number of times that the invite can be used. Send `0` for unlimited.',
                }),
            })
            .openapi({ required: ['rid', 'days', 'maxUses'] }),
          examples: { Example: { value: { rid: 'csFYrDeixJG7PnrAh', days: 10, maxUses: 0 } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                _id: z.string().exactOptional(),
                days: z.int().exactOptional(),
                maxUses: z.int().exactOptional(),
                rid: z.string().exactOptional(),
                userId: z.string().exactOptional(),
                createdAt: z.string().exactOptional(),
                expires: z.string().nullable().exactOptional(),
                uses: z.int().exactOptional(),
                _updatedAt: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
          examples: {
            Success: {
              value: [
                {
                  _id: 'kDKQ3H',
                  days: 1,
                  maxUses: 1,
                  rid: 's7CE842q9WtvLctD7',
                  userId: 'sNiDqHit5nGAGFg8X',
                  createdAt: '2019-12-20T03:31:56.774Z',
                  expires: '2019-12-21T03:31:56.774Z',
                  uses: 1,
                  _updatedAt: '2019-12-20T03:33:40.065Z',
                },
                {
                  _id: '99ScEP',
                  days: 1,
                  maxUses: 0,
                  rid: 's7CE842q9WtvLctD7',
                  userId: 'sNiDqHit5nGAGFg8X',
                  createdAt: '2019-12-20T03:38:20.485Z',
                  expires: '2019-12-21T03:38:20.485Z',
                  uses: 0,
                  _updatedAt: '2019-12-20T03:38:20.485Z',
                },
                {
                  _id: 'Y5JKM4',
                  days: 0,
                  maxUses: 1,
                  rid: 's7CE842q9WtvLctD7',
                  userId: 'sNiDqHit5nGAGFg8X',
                  createdAt: '2019-12-20T03:38:25.313Z',
                  expires: null,
                  uses: 1,
                  _updatedAt: '2019-12-20T03:38:40.116Z',
                },
              ],
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RoomsRolesRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.roles',
  tags: ['Rooms'],
  summary: 'Get Room Roles',
  description:
    "Get the list of roles in a specific room. This endpoint returns users with the `Owner`, `Leader`, and `Moderator` room roles. You can refer to the <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>Roles user guide</a> for more details on roles in Rocket.Chat.\n\n### Changelog\n| Version | Description                          |\n| ------- | ------------------------------------ |\n| 7.10.0   | Added                               |",
  operationId: 'get-api-v1-rooms.roles',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '658282732dd9f928ad989e98' },
            in: 'query',
            name: 'rid',
            description: 'Enter the room ID for which you want to view the room roles.',
            required: true,
          },
          example: '658282732dd9f928ad989e98',
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
              roles: z
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
                      roles: z.array(z.string()).exactOptional(),
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
                roles: [
                  {
                    _id: '668c75b2b319fc80bf0ed3a1',
                    rid: '658282732dd9f928ad989e98',
                    u: { _id: 'P2dgWPPw5veigwcdK', username: 'jane.doe', name: 'Jane Doe' },
                    roles: ['moderator'],
                  },
                  {
                    _id: '6819edfa30c9c71254e45d18',
                    rid: '658282732dd9f928ad989e98',
                    u: { _id: '74HrDgvTTxT56o8R8', username: 'mary.shelley', name: 'Mary Shelley' },
                    roles: ['leader'],
                  },
                  {
                    _id: '668c7717b319fc80bf0ed3b0',
                    rid: '658282732dd9f928ad989e98',
                    u: { _id: 'qHWhoJwwgk4bwcoNq', username: 'test.user' },
                    roles: ['moderator'],
                  },
                  {
                    _id: '6690c37ab319fc80bf0ed407',
                    rid: '658282732dd9f928ad989e98',
                    u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat' },
                    roles: ['owner'],
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
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'rid'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RoomsIsMemberRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.isMember',
  tags: ['Rooms'],
  summary: 'Check Room Member',
  description:
    'Use this endpoint to check whether or not a user is a member of a specific room. If the user is not a member of the room, an error response (`error-user-not-found`) is returned. You can only get the results for the rooms that you are a member of. Otherwise, you get a forbidden error response.',
  operationId: 'get-api-v1-rooms.isMember',
  request: {
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'roomId',
            description: 'Enter the room ID in which you want to check for the user.',
            required: true,
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'userId',
            description:
              'Enter the user ID that you want to check. Alternatively, you can use the `username` parameter and provide the user name instead of the user ID.',
            required: true,
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ isMember: z.boolean().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { isMember: true, success: true } } },
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
            'User not available in room': {
              value: { success: false, error: 'error-user-not-found' },
            },
            'Missing user ID parameter': {
              value: {
                success: false,
                error:
                  "must have required property 'userId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
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

export const getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRoute = createRoute({
  method: 'get',
  path: '/api/v1/rooms.autocomplete.channelAndPrivate.withPagination',
  tags: ['Rooms'],
  summary: 'Autocomplete Room Name With Pagination',
  description:
    'List the public and private rooms whose names match a given string, excluding discussions, DMs, and omnichannel rooms. The endpoint is valuable when performing search operations. It returns only rooms that the user belongs to. This endpoint includes pagination query parameters.',
  operationId: 'get-api-v1-rooms.autocomplete.channelAndPrivate.withPagination',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      sort: SortParamsSchema,
      selector: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '{"name":"api"}' },
            in: 'query',
            name: 'selector',
            description: 'The search term to be completed. It only applies to the room name.',
            required: true,
          },
          example: '{"name":"api"}',
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
              items: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                items: [
                  { _id: '66c82e1e237405fc05fc1ef4', fname: 'api-team', name: 'api-team', t: 'c' },
                  {
                    _id: '66c88dae237405fc05fc1f06',
                    fname: 'api-team2',
                    name: 'api-team2',
                    t: 'p',
                  },
                ],
                total: 4,
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
            'Example 1': { value: { success: false, error: "The 'selector' param is required" } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1RoomsMediaRidRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.media/{rid}',
  tags: ['Rooms'],
  summary: 'Upload Media Files to a Room',
  description:
    "Only users who have access to send messages in a room can upload files there. \n\nYou can't upload any file that exceeds the configured [Maximum File Upload Size](https://docs.rocket.chat/docs/file-upload#general-file-upload-settings1).\n\nTo upload media files to a room, follow these steps:\n 1. Call this endpoint first. This endpoint uploads the file to the database and returns a file object with the file ID and URL data. Save the file ID, you will need this to send the file in the next step.\n 2. To send the file to a room, use the <a href='https://developer.rocket.chat/apidocs/check-uploaded-file' target='_blank'>Send Uploaded File to a Room</a> endpoint.\n\n The upload is temporary and expires 24 hours after this call. If you don't confirm it within that window, it is discarded and never appears in the room. ",
  operationId: 'post-api-v1-rooms.media',
  request: {
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '674eca3e43725ce31dd9a2e8' },
            name: 'rid',
            in: 'path',
            required: true,
            description: 'The ID of the room where the file will be uploaded.',
          },
          example: '674eca3e43725ce31dd9a2e8',
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'The file to upload.' }),
              content: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON-encoded object containing additional metadata for the uploaded file.',
                }),
            })
            .openapi({ required: ['file'] }),
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
              file: z
                .object({ _id: z.string().exactOptional(), url: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                file: {
                  _id: '67109d6c25682c7469486008',
                  url: '/file-upload/67109d6c25682c7469486008/Screenshot%202024-10-15%20at%2010.17.39.png',
                },
                success: true,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiV1RoomsMediaConfirmRidFileIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/rooms.mediaConfirm/{rid}/{fileId}',
  tags: ['Rooms'],
  summary: 'Send Uploaded File to a Room',
  description:
    "Use this endpoint to send an uploaded file to a room. You can use this endpoint only after calling the <a href='https://developer.rocket.chat/apidocs/upload-media-files-to-a-room' target='_blank'>Upload Media Files to a Room</a> endpoint and getting the file ID.\n\nCall it within 24 hours of the upload, using the same user account and room that uploaded the file. Otherwise, the request fails with `invalid-file`.",
  operationId: 'post-api-v1-rooms.mediaConfirm-rid-fileId',
  request: {
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '66cd971f6fcbb8e8b3cf8e69' },
            name: 'rid',
            in: 'path',
            required: true,
            description: 'The ID of the room where the file will be sent.',
          },
          example: '66cd971f6fcbb8e8b3cf8e69',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '69424442ddfe6ceaf280f93f' },
            name: 'fileId',
            in: 'path',
            required: true,
            description:
              "The file ID you get from the <a href='https://developer.rocket.chat/apidocs/upload-media-files-to-a-room' target='_blank'>Upload Files to a Room</a> endpoint.",
          },
          example: '69424442ddfe6ceaf280f93f',
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Enter a file description.', example: 'file description' }),
              fileName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Overrides the file name stored during upload.',
                  example: 'renamed-file.jpg',
                }),
              fileContent: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'Overrides the file content stored during upload.' }),
              emoji: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The emoji you enter will be displayed as the avatar when the message is sent.',
                  example: ':one:',
                }),
              groupable: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether or not multiple messages can be grouped.' }),
              msg: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Enter a message to be sent with the file.',
                  example: 'hello world',
                }),
              tmid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you want to send the file to a thread, enter the thread ID here.',
                  example: 'ZSnsznbWKqppnRny5',
                }),
              avatar: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the avatar that will be displayed when the message is sent. You need the `message-impersonate` permission.',
                  example: 'https://picsum.photos/200',
                }),
              alias: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the alias that will be used instead of your username when sending the message. You need the `message-impersonate` permission.',
                  example: 'test user',
                }),
              customFields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Enter custom fields if you have defined them in the <a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a> settings.",
                  example: '{\\"priority\\": \\"low\\"}',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                alias: 'test',
                avatar: 'https://picsum.photos/200',
                description: 'file upload description parameter',
                groupable: false,
                msg: 'file upload message parameter',
                customFields: '{"priority": "low"}',
                emoji: ':one:',
                tmid: 'ZSnsznbWKqppnRny5',
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
                  ts: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  file: z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      size: z.int().exactOptional(),
                      format: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  files: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          type: z.string().exactOptional(),
                          size: z.int().exactOptional(),
                          format: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  attachments: z
                    .array(
                      z
                        .object({
                          title: z.string().exactOptional(),
                          title_link: z.string().exactOptional(),
                          title_link_download: z.boolean().exactOptional(),
                          image_dimensions: z
                            .object({
                              width: z.int().exactOptional(),
                              height: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          image_preview: z.string().exactOptional(),
                          image_url: z.string().exactOptional(),
                          image_type: z.string().exactOptional(),
                          image_size: z.int().exactOptional(),
                          type: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
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
                  _id: '2ZABtFgt89fYYSw3Q',
                  rid: 'GENERAL',
                  ts: '2025-12-17T05:49:55.825Z',
                  msg: '',
                  file: {
                    _id: '69424442ddfe6ceaf280f93f',
                    name: '44.jpg',
                    type: 'image/jpeg',
                    size: 71224,
                    format: 'jpeg',
                  },
                  files: [
                    {
                      _id: '69424442ddfe6ceaf280f93f',
                      name: '44.jpg',
                      type: 'image/jpeg',
                      size: 71224,
                      format: 'jpeg',
                    },
                    {
                      _id: '69424483ddfe6ceaf280f941',
                      name: 'thumb-44.jpg',
                      type: 'image/jpeg',
                      size: 13473,
                      format: 'jpeg',
                    },
                  ],
                  attachments: [
                    {
                      title: '44.jpg',
                      title_link: '/file-upload/69424442ddfe6ceaf280f93f/44.jpg',
                      title_link_download: true,
                      image_dimensions: { width: 368, height: 360 },
                      image_preview:
                        '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQgsW+OGY6OKR5o3hGJfr6n3n5JkvPdSpXal1BmuoReom//Z',
                      image_url: '/file-upload/69424483ddfe6ceaf280f941/44.jpg',
                      image_type: 'image/jpeg',
                      image_size: 71224,
                      type: 'file',
                    },
                  ],
                  u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'test cat' },
                  _updatedAt: '2025-12-17T05:49:55.959Z',
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
            'Example 1': {
              value: { success: false, error: '[invalid-file]', errorType: 'invalid-file' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UploadsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/uploads.delete',
  tags: ['Rooms'],
  summary: 'Delete Uploaded File',
  description:
    "Delete a specific file uploaded to a room. The response includes the list of files that were successfully removed. It may include additional files such as image thumbnails. \n\nUsers can delete messages only in the following cases:\n * The **Allow Message Deleting** setting is enabled in the workspace's **<a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a>** settings.\n * If the `Block Message Deleting After (n) Minutes` message setting has a non-zero value, the `bypass-time-limit-edit-and-delete` permission is required to delete messages after the defined time limit.\n * In read-only rooms, the `post-readonly` permission is required to delete messages.\n * The `delete-own-message` permission is required to delete users' own messages.\n * The `delete-message` permission is required for users to delete messages from other users.\n \n ### Changelog\n | Version | Description |\n | ------- | ----------- |\n | 8.2.0   | Added       |",
  operationId: 'post-api-v1-uploads.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fileId: z
                .string()
                .openapi({
                  description:
                    "Enter the file ID of the file that you want to delete. You can get this value from the <a href='https://developer.rocket.chat/apidocs/get-room-images' target='_blank'>Get Room Images</a> endpoint.",
                  example: '699e6b8a8eddae7c5eaed9c3',
                }),
            })
            .openapi({ required: ['fileId'] }),
          examples: { 'Example 1': { value: { fileId: '699e6b8a8eddae7c5eaed9c3' } } },
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
              deletedFiles: z.array(z.string()).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                deletedFiles: ['699e6b8a8eddae7c5eaed9c3', '699e6b8b8eddae7c5eaed9c5'],
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
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'fileId'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ListInvitesRoute = createRoute({
  method: 'get',
  path: '/api/v1/listInvites',
  tags: ['Room Invites'],
  summary: 'List Invites',
  description:
    'Lists all of the invites on the workspace. \n\n<a href="https://docs.rocket.chat/docs/permissions" target="_blank">Permission</a> required: `create-invite-links`',
  operationId: 'get-api-v1-listInvites',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                _id: z.string().exactOptional(),
                days: z.int().exactOptional(),
                maxUses: z.int().exactOptional(),
                rid: z.string().exactOptional(),
                userId: z.string().exactOptional(),
                createdAt: z.string().exactOptional(),
                expires: z.string().nullable().exactOptional(),
                uses: z.int().exactOptional(),
                _updatedAt: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
          examples: {
            Success: {
              value: [
                {
                  _id: 'kDKQ3H',
                  days: 1,
                  maxUses: 1,
                  rid: 's7CE842q9WtvLctD7',
                  userId: 'sNiDqHit5nGAGFg8X',
                  createdAt: '2019-12-20T03:31:56.774Z',
                  expires: '2019-12-21T03:31:56.774Z',
                  uses: 1,
                  _updatedAt: '2019-12-20T03:33:40.065Z',
                },
                {
                  _id: '99ScEP',
                  days: 1,
                  maxUses: 0,
                  rid: 's7CE842q9WtvLctD7',
                  userId: 'sNiDqHit5nGAGFg8X',
                  createdAt: '2019-12-20T03:38:20.485Z',
                  expires: '2019-12-21T03:38:20.485Z',
                  uses: 0,
                  _updatedAt: '2019-12-20T03:38:20.485Z',
                },
                {
                  _id: 'Y5JKM4',
                  days: 0,
                  maxUses: 1,
                  rid: 's7CE842q9WtvLctD7',
                  userId: 'sNiDqHit5nGAGFg8X',
                  createdAt: '2019-12-20T03:38:25.313Z',
                  expires: null,
                  uses: 1,
                  _updatedAt: '2019-12-20T03:38:40.116Z',
                },
              ],
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const deleteApiV1RemoveInviteIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/removeInvite/{_id}',
  tags: ['Room Invites'],
  summary: 'Delete Invite by ID',
  description:
    "Deletes an invite from the workspace.\r\n\r\n<a href='https://docs.rocket.chat/docs/permissions' target='_blank'>Permission</a> required: `create-invite-links`",
  operationId: 'delete-api-v1-removeInvite-_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The invite ID to be deleted.',
            required: true,
            schema: { type: 'string' },
            example: 'kDKQ3H',
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
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Invitation Id': {
              value: {
                success: false,
                error: 'Invalid Invitation _id [invalid-invitation-id]',
                errorType: 'invalid-invitation-id',
                details: { method: 'removeInvite' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UseInviteTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/useInviteToken',
  tags: ['Room Invites'],
  summary: 'Use Invite Token',
  description:
    'Uses an invite token to join a channel or room.\n\nThis endpoint also checks whether the user is banned from the target room before\nallowing them to use the invite link. A banned user must be unbanned first\nbefore they can join via an invite token.\n\n### Changelog\n| Version | Description |\n|---------|--------|\n| 8.4.0   | Added ban check — banned users can no longer join via invite token |',
  operationId: 'post-useInviteToken',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().openapi({ description: 'The invite token to use.' }) })
            .openapi({ required: ['token'] }),
          examples: { 'Use Invite Token': { value: { token: 'R4VDXJ9KJZB8M2QW' } } },
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
              room: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  topic: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The room information.', required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                room: { _id: 'sN9KJZX2aX7aXqB2a', name: 'general', topic: 'General discussion' },
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
            'User Is Banned': {
              value: {
                success: false,
                error: 'User is banned from this room',
                errorType: 'error-user-is-banned',
              },
            },
            'Invalid Token': {
              value: {
                success: false,
                error: 'Invalid invite token',
                errorType: 'error-invalid-token',
              },
            },
            'Token Expired': {
              value: {
                success: false,
                error: 'Invite token has expired',
                errorType: 'error-invite-token-expired',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1AbacRoomsRidAttributesRoute = createRoute({
  method: 'post',
  path: '/api/v1/abac/rooms/:rid/attributes',
  tags: ['ABAC'],
  summary: 'Replace room ABAC attributes',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Replaces the full ABAC attribute set for a room.\n- Sets the complete set of ABAC attributes on the specified room by providing an attributes object that maps attribute keys to arrays of allowed values; any previously assigned attributes not included in the request are removed.\n- Requires the ABAC license, the `abac-management` and `manage-abac-admin-rooms` permissions, and the global setting `ABAC_Enabled` to be turned on.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |',
  operationId: 'post-abac-rooms-rid-attributes',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.looseObject({}),
          examples: {
            'Example 1': {
              value: { attributes: { department: ['it', 'sales'], region: ['asia', 'europa'] } },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'ABAC not enabled': { value: { success: false, error: 'error-abac-not-enabled' } },
            'Attribute definition missing': {
              value: { success: false, error: 'error-attribute-definition-not-found' },
            },
            'Invalid attribute values': {
              value: { success: false, error: 'error-invalid-attribute-values' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const deleteApiV1AbacRoomsRidAttributesRoute = createRoute({
  method: 'delete',
  path: '/api/v1/abac/rooms/:rid/attributes',
  tags: ['ABAC'],
  summary: 'Delete all ABAC attributes',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Clears all ABAC attributes from a room.\n- Removes every ABAC attribute key and value currently assigned to the specified room, leaving it with no ABAC attributes configured.\n- Requires the `abac-management` and `manage-abac-admin-rooms` permissions. This call does not require the global setting `ABAC_Enabled` to be on, so attributes can be cleared after disabling ABAC.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |',
  operationId: 'delete-abac-rooms-rid-attributes',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
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
            'Room not found': { value: { success: false, error: 'error-room-not-found' } },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const putApiV1AbacRoomsRidAttributesKeyRoute = createRoute({
  method: 'put',
  path: '/api/v1/abac/rooms/:rid/attributes/:key',
  tags: ['ABAC'],
  summary: 'Set room ABAC attribute values',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Sets the values of a single ABAC attribute on a room.\n- Replaces the existing values for the given attribute key on the specified room with the provided values array (or creates the attribute if it does not yet exist), enforcing the global attribute definition and ABAC validation rules.\n- Requires the ABAC license, the `abac-management` and `manage-abac-admin-rooms` permissions, and the global setting `ABAC_Enabled` to be turned on.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |',
  operationId: 'put-abac-rooms-rid-attributes-key',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description:
        '- Values (array of strings, required): The attribute values to assign for this key. \n- Must have at least 1 item, max 10 items, and all values must be unique.',
      content: {
        'application/json': {
          schema: z
            .object({ values: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { values: ['eng', 'sales', 'hr'] } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
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
            'Attribute definition missing': {
              value: { success: false, error: 'error-attribute-definition-not-found' },
            },
            'Invalid attribute values': {
              value: { success: false, error: 'error-invalid-attribute-values' },
            },
            'Room not found': { value: { success: false, error: 'error-room-not-found' } },
            'Cannot convert default room to ABAC': {
              value: { success: false, error: 'error-cannot-convert-default-room-to-abac' },
            },
            'ABAC not enabled': { value: { success: false, error: 'error-abac-not-enabled' } },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const postApiV1AbacRoomsRidAttributesKeyRoute = createRoute({
  method: 'post',
  path: '/api/v1/abac/rooms/:rid/attributes/:key',
  tags: ['ABAC'],
  summary: 'Add ABAC attribute key to room',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Adds a single ABAC attribute key to a room.\n- Creates a new ABAC attribute on the specified room for the given key, assigning it the provided values array; fails if the room already has this key or if the key/values are not allowed by the global attribute definition.\n- Requires the ABAC license, the `abac-management` and `manage-abac-admin-rooms` permissions, and the global setting `ABAC_Enabled` to be turned on.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |',
  operationId: 'post-abac-rooms-rid-attributes-key',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description:
        '- Values (array of strings, required): The attribute values to assign for this key. \n- Must have at least 1 item, max 10 items, and all values must be unique.',
      content: {
        'application/json': {
          schema: z
            .object({ values: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { values: ['asia'] } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
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
            'ABAC not enabled': { value: { success: false, error: 'error-abac-not-enabled' } },
            'Attribute definition missing': {
              value: { success: false, error: 'error-attribute-definition-not-found' },
            },
            'Invalid attribute values': {
              value: { success: false, error: 'error-invalid-attribute-values' },
            },
            'Duplicate key on a room': {
              value: { success: false, error: 'error-duplicate-attribute-key' },
            },
            'Cannot convert default room to ABAC': {
              value: { success: false, error: 'error-cannot-convert-default-room-to-abac' },
            },
            'Room not found': { value: { success: false, error: 'error-room-not-found' } },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const deleteApiV1AbacRoomsRidAttributesKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v1/abac/rooms/:rid/attributes/:key',
  tags: ['ABAC'],
  summary: 'Delete room ABAC attribute key',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Removes a single ABAC attribute key from a room.\n- Deletes the specified attribute key and all its values from the room\'s ABAC configuration, leaving other attributes unchanged.\n- Requires the `abac-management` and `manage-abac-admin-rooms` permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |',
  operationId: 'delete-abac-rooms-rid-attributes-key',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
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
            'Room not found': { value: { success: false, error: 'error-room-not-found' } },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1AbacAttributesRoute = createRoute({
  method: 'get',
  path: '/api/v1/abac/attributes',
  tags: ['ABAC'],
  summary: 'List ABAC attribute definitions',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Lists all ABAC attribute definitions.\n- Returns a paginated list of attribute definitions (key and allowed values).\n- Supports optional filtering by attribute key or value, and pagination via offset and count query parameters.\n- Requires the `abac-management` and `manage-abac-admin-room-attributes` permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |',
  operationId: 'get-abac-attributes',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number' },
            in: 'query',
            name: 'offset',
            description: 'Pagination offset (default: 0)',
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number' },
            in: 'query',
            name: 'count',
            description: 'Number of items per page (default: 25)',
            required: false,
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'key',
            description: 'Filter attribute definitions by key (case-insensitive match)',
            required: false,
          },
        }),
      values: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'values',
            description: 'Filter attribute definitions by values (case-insensitive match)',
            required: false,
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              attributes: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      key: z.string().exactOptional(),
                      values: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                success: true,
                attributes: [
                  {
                    _id: '69778264070f6083845051e6',
                    key: 'departmentNumber',
                    values: ['department'],
                  },
                  {
                    _id: '697ca091070f60838450580d',
                    key: 'my_department',
                    values: ['eng', 'sales', 'hr', 'it'],
                  },
                ],
                offset: 0,
                count: 25,
                total: 5,
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
            'Invalid query': { value: { success: false, error: 'error-invalid-query-parameters' } },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const postApiV1AbacAttributesRoute = createRoute({
  method: 'post',
  path: '/api/v1/abac/attributes',
  tags: ['ABAC'],
  summary: 'Create ABAC attribute definition',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Creates a new ABAC attribute definition.\n- Registers a global ABAC attribute by specifying its key and the list of allowed values, making it available for use on rooms and users.\n- Requires the ABAC license, the `abac-management` and `manage-abac-admin-room-attributes` permissions, and the global setting `ABAC_Enabled` to be turned on.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |',
  operationId: 'post-abac-attributes',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().exactOptional(),
              values: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { key: 'my_department', values: ['eng', 'sales', 'hr', 'it'] } },
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
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
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
            'ABAC disabled': { value: { success: false, error: 'error-abac-not-enabled' } },
            'Invalid attribute values': {
              value: { success: false, error: 'error-invalid-attribute-values' },
            },
            'Invalid attribute key': {
              value: { success: false, error: 'error-invalid-attribute-key' },
            },
            'Duplicate attribute key': {
              value: { success: false, error: 'error-duplicate-attribute-key' },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const postApiV1AbacUsersSyncRoute = createRoute({
  method: 'post',
  path: '/api/v1/abac/users/sync',
  tags: ['ABAC'],
  summary: 'Sync users ABAC attributes from LDAP',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Syncs ABAC attributes for specified users from LDAP.\n- Refreshes user ABAC attributes by reading current data from LDAP and applying the configured LDAP → ABAC attribute mapping.\n- Users can be identified by usernames, ids, emails, or ldapIds.\n- Requires the LDAP Enterprise and ABAC licenses, the `abac-management` and `manage-abac-admin-room-attributes` permissions, and the global setting `ABAC_Enabled` to be turned on.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |',
  operationId: 'post-abac-users-sync',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description:
        'At least one of these properties is required:\n- usernames (string[]) — Array of Rocket.Chat usernames (1–100 items, unique)\n- ids (string[]) — Array of Rocket.Chat user IDs (1–100 items, unique)\n- emails (string[]) — Array of email addresses (1–100 items, unique)\n- ldapIds (string[]) — Array of LDAP IDs (1–100 items, unique)',
      content: {
        'application/json': {
          schema: z
            .object({
              usernames: z.array(z.string()).exactOptional(),
              ids: z.array(z.string()).exactOptional(),
              emails: z.array(z.string()).exactOptional(),
              ldapIds: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                usernames: ['alice'],
                ids: ['userId1'],
                emails: ['bob@example.com'],
                ldapIds: ['ldapId123'],
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
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
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
            'ABAC disabled': { value: { success: false, error: 'error-abac-not-enabled' } },
            'Invalid body (schema validation)': {
              value: { success: false, error: 'error-invalid-body-params' },
            },
          },
        },
      },
      headers: z.object({}),
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1AbacAttributesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/abac/attributes/:_id',
  tags: ['ABAC'],
  summary: 'Get ABAC attribute definition by ID',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Retrieves a single ABAC attribute definition by ID.\n- Returns the attribute key and its allowed values for the definition identified by `_id`.\n- Requires the `abac-management` and `manage-abac-admin-room-attributes` permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |',
  operationId: 'get-abac-attributes-:_id',
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
              success: z.boolean().exactOptional(),
              key: z.string().exactOptional(),
              values: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: { success: true, key: 'my_department', values: ['eng', 'sales', 'hr', 'it'] },
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
            'Attribute not found': {
              value: { success: false, error: 'error-attribute-not-found' },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const putApiV1AbacAttributesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/abac/attributes/:_id',
  tags: ['ABAC'],
  summary: 'Update ABAC attribute definition',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Updates an existing ABAC attribute definition.\n- Modifies the attribute identified by `_id`, allowing you to rename its key, change its list of allowed values, or both, subject to in-use and validation checks.\n- Requires the ABAC license, the `abac-management` and `manage-abac-admin-room-attributes` permissions, and the global setting `ABAC_Enabled` to be turned on.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |',
  operationId: 'put-abac-attributes-:_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().openapi({ example: 'my_department' }),
              values: z.array(z.string()).openapi({ example: ['eng', 'sales'] }),
            })
            .openapi({
              'x-examples': { 'Example 1': { key: 'my_department', values: ['eng', 'sales'] } },
              required: ['key', 'values'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
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
            'ABAC disabled': { value: { success: false, error: 'error-abac-not-enabled' } },
            'Attribute not found': {
              value: { success: false, error: 'error-attribute-not-found' },
            },
            'Attribute in use (cannot rename key / cannot remove used values)': {
              value: { success: false, error: 'error-attribute-in-use' },
            },
            'Invalid values (e.g. empty values)': {
              value: { success: false, error: 'error-invalid-attribute-values' },
            },
            'Duplicate attribute key (renaming to an existing key)': {
              value: { success: false, error: 'error-duplicate-attribute-key' },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const deleteApiV1AbacAttributesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/abac/attributes/:_id',
  tags: ['ABAC'],
  summary: 'Delete ABAC attribute definition by ID',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Deletes an ABAC attribute definition by ID.\n- Removes the attribute definition identified by `_id`. The delete fails if the attribute is currently in use, for example assigned to any room.\n- Requires the `abac-management` and `manage-abac-admin-room-attributes` permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |',
  operationId: 'delete-abac-attributes-:_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
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
            'Attribute not found': {
              value: { success: false, error: 'error-attribute-not-found' },
            },
            'Attribute in use': { value: { success: false, error: 'error-attribute-in-use' } },
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
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({
              'x-examples': { 'Example 1': { success: false, error: 'error-not-authorized' } },
              required: [],
            }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1AbacAttributesKeyIsInUseRoute = createRoute({
  method: 'get',
  path: '/api/v1/abac/attributes/:key/is-in-use',
  tags: ['ABAC'],
  summary: 'Check if ABAC attribute is in use',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Checks whether an ABAC attribute definition is currently used by any room.\n- Requires the `abac-management` and `manage-abac-admin-room-attributes` permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |',
  operationId: 'get-abac-attributes-:key-is-in-use',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), inUse: z.boolean().exactOptional() })
            .openapi({
              'x-examples': { 'Example 1': { success: true, inUse: true } },
              required: [],
            }),
          examples: { Success: { value: { success: true, inUse: true } } },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({
              'x-examples': { 'Example 1': { success: false, error: 'error-unauthorized' } },
              required: [],
            }),
          examples: {
            'Unauthorized login attempt': {
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({
              'x-examples': { 'Example 1': { success: false, error: 'error-not-authorized' } },
              required: [],
            }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1AbacRoomsRoute = createRoute({
  method: 'get',
  path: '/api/v1/abac/rooms',
  tags: ['ABAC'],
  summary: 'List rooms with ABAC attributes',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Lists rooms with ABAC attributes.\n- Returns a paginated list of rooms that have ABAC attributes configured, with optional filtering by room name, attribute key, or attribute value using the `filter` and `filterType` query parameters.\n- Requires the `abac-management` and `manage-abac-admin-rooms` permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |',
  operationId: 'get-abac-rooms',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number' },
            in: 'query',
            name: 'offset',
            description: 'Pagination offset (default 0)',
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number' },
            in: 'query',
            name: 'count',
            description: 'Page size (default 25)',
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'filter',
            description: 'Search text',
            required: false,
          },
        }),
      filterType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'filterType',
            description: 'One of: all, roomName, attribute, value',
            required: false,
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              rooms: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      abacAttributes: z
                        .array(
                          z
                            .object({
                              key: z.string().exactOptional(),
                              values: z.array(z.string()).exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  success: true,
                  rooms: [
                    {
                      _id: 'ROOM_ID',
                      name: 'private-room',
                      t: 'p',
                      abacAttributes: [{ key: 'my_department', values: ['eng', 'sales'] }],
                    },
                  ],
                  offset: 0,
                  count: 25,
                  total: 1,
                },
              },
              required: [],
            }),
          examples: {
            Success: {
              value: {
                success: true,
                rooms: [
                  {
                    _id: 'ROOM_ID',
                    name: 'private-room',
                    t: 'p',
                    abacAttributes: [{ key: 'my_department', values: ['eng', 'sales'] }],
                  },
                ],
                offset: 0,
                count: 25,
                total: 1,
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
            .openapi({
              'x-examples': {
                'Example 1': { success: false, error: 'error-invalid-query-parameters' },
              },
              required: [],
            }),
          examples: {
            'Invalid query': { value: { success: false, error: 'error-invalid-query-parameters' } },
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
            .openapi({
              'x-examples': { 'Example 1': { success: false, error: 'error-unauthorized' } },
              required: [],
            }),
          examples: {
            'Unauthorized login attempt': {
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({
              'x-examples': { 'Example 1': { success: false, error: 'error-not-authorized' } },
              required: [],
            }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1AbacAuditRoute = createRoute({
  method: 'get',
  path: '/api/v1/abac/audit',
  tags: ['ABAC'],
  summary: 'List ABAC audit events',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\n- Lists ABAC audit events.\n- Returns a paginated audit log of ABAC-related actions (attribute changes, room attribute changes/removals, and ABAC actions), filterable by time range (`start`, `end`) and optional `actor`, with optional sorting.\n- Requires the ABAC and Auditing licenses, the `abac-management` and `view-abac-admin-audit` permissions.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.0.0   | Added |\n| 8.5.0   | Added the `view-abac-admin-audit` granular permission requirement. |',
  operationId: 'get-abac-audit',
  request: {
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'start',
            description: 'start of time range (defaults to epoch if omitted)',
            required: false,
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'end',
            description: 'end of time range (defaults to now if omitted)',
            required: false,
          },
        }),
      actor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            description: 'Filter by actor fields',
            name: 'actor',
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number' },
            in: 'query',
            name: 'offset',
            description: 'Pagination offset (default 0)',
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number' },
            in: 'query',
            name: 'count',
            description: 'Page size (default 25)',
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'sort',
            description: 'Sorting, typically { "ts": -1 } or { "ts": 1 }',
            required: false,
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              events: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      actor: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      data: z.looseObject({}).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  success: true,
                  events: [
                    {
                      _id: 'EVENT_ID',
                      t: 'abac.object.attribute.changed',
                      ts: '2026-01-30T12:34:56.789Z',
                      actor: { _id: 'USER_ID', username: 'admin', name: 'Admin' },
                      data: {},
                    },
                  ],
                  offset: 0,
                  count: 25,
                  total: 1,
                },
              },
              required: [],
            }),
          examples: {
            Success: {
              value: {
                success: true,
                events: [
                  {
                    _id: 'EVENT_ID',
                    t: 'abac.object.attribute.changed',
                    ts: '2026-01-30T12:34:56.789Z',
                    actor: { _id: 'USER_ID', username: 'admin', name: 'Admin' },
                    data: {},
                  },
                ],
                offset: 0,
                count: 25,
                total: 1,
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
            .openapi({
              'x-examples': {
                'Example 1': { success: false, error: 'error-invalid-query-parameters' },
              },
              required: [],
            }),
          examples: {
            'Invalid query': { value: { success: false, error: 'error-invalid-query-parameters' } },
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
            .openapi({
              'x-examples': { 'Example 1': { success: false, error: 'error-unauthorized' } },
              required: [],
            }),
          examples: {
            'Unauthorized login attempt': {
              value: { success: false, error: 'error-unauthorized' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({
              'x-examples': { 'Example 1': { success: false, error: 'error-not-authorized' } },
              required: [],
            }),
          examples: {
            'Missing required ABAC permissions': {
              value: { success: false, error: 'error-not-authorized' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1AbacPdpHealthRoute = createRoute({
  method: 'get',
  path: '/api/v1/abac/pdp/health',
  tags: ['ABAC'],
  summary: 'Get PDP Health Status',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>\n\nChecks the health and availability of the configured Policy Decision Point (PDP)\nfor Attribute-Based Access Control (ABAC).\n\nThis endpoint is used by administrators to verify that the external PDP service\nis operational and properly configured. It includes rate limiting to prevent abuse.\n\nPermissions required: `abac-management` and `manage-abac-admin-settings`.\n\n### Changelog\n| Version | Description |\n|---------|--------|\n| 8.0.0   | Added |\n| 8.5.0   | Added the `manage-abac-admin-settings` granular permission requirement. |\n| 8.4.0   | Added endpoint to check external PDP health status |',
  operationId: 'get-abac-pdp-health',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK - PDP is available and healthy',
      content: {
        'application/json': {
          schema: z
            .object({
              available: z
                .literal(true)
                .exactOptional()
                .openapi({ description: 'Indicates whether the PDP is available.' }),
              message: z.string().exactOptional().openapi({ description: 'Health check message.' }),
              success: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates if the request was successful.' }),
            })
            .openapi({ required: [] }),
          examples: {
            'PDP Healthy': {
              value: { available: true, message: 'ABAC_PDP_Health_OK', success: true },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - PDP is unavailable or unhealthy',
      content: {
        'application/json': {
          schema: z
            .object({
              available: z
                .literal(false)
                .exactOptional()
                .openapi({ description: 'Indicates whether the PDP is available.' }),
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error message describing why the PDP is unavailable.' }),
              success: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates if the request was successful.' }),
            })
            .openapi({ required: [] }),
          examples: {
            'PDP Unavailable': {
              value: { available: false, message: 'ABAC_PDP_Health_Not_OK', success: false },
            },
            'Connection Error': {
              value: {
                available: false,
                message: 'Failed to connect to external PDP service',
                success: false,
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: { success: false, error: 'You do not have permission to manage ABAC' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1SubscriptionsGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/subscriptions.get',
  tags: ['Subscriptions'],
  summary: 'Get All Subscriptions',
  description:
    "Get the room notification subscription details and the latest updates. Note that the unread counter value depends on your settings in the **Manage** > **Workspace** > <a href='https://docs.rocket.chat/docs/general' target='_blank'>**General**</a> section.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|8.8.0             | Added the `threadDrafts` field |\n|0.60.0            | Added       |",
  operationId: 'get-api-v1-subscriptions.get',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      updatedSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: '2017-11-25T15:08:17.248Z' },
            in: 'query',
            name: 'updatedSince',
            description:
              'Date and time from which to fetch changes. Format: ISO 8601 datetime. Optional seconds, optional milliseconds, optional timezone, always with colon time separators.',
            required: false,
          },
          example: '2017-11-25T15:08:17.248Z',
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
              update: z.array(SubscriptionSchema).exactOptional(),
              remove: z.array(z.looseObject({})).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                update: [
                  {
                    t: 'c',
                    ts: '2017-11-25T15:08:17.249Z',
                    name: 'general',
                    fname: null,
                    rid: 'GENERAL',
                    u: { _id: 'EoyAmF4mxx5HxJHJB', username: 'rocket.cat', name: 'Rocket Cat' },
                    open: true,
                    alert: true,
                    unread: 1,
                    userMentions: 1,
                    groupMentions: 0,
                    _updatedAt: '2017-11-25T15:08:17.249Z',
                    _id: '5ALsG3QhpJfdMpyc8',
                  },
                ],
                remove: [],
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

export const getApiV1SubscriptionsGetOneRoute = createRoute({
  method: 'get',
  path: '/api/v1/subscriptions.getOne',
  tags: ['Subscriptions'],
  summary: 'Get Subscription Room',
  description:
    "Get the notification subscription details for a specific room. Note that the unread counter value depends on your settings at the **Manage** > **Workspace** > <a href='https://docs.rocket.chat/docs/general' target='_blank'>**General**</a> section.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|8.8.0             | Added the `threadDrafts` field |\n|0.63.0            | Added       |",
  operationId: 'get-api-v1-subscriptions.getOne',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'ByehQjC44FwMeiLbX' },
            in: 'query',
            name: 'roomId',
            description: 'The room ID.',
            required: true,
          },
          example: 'ByehQjC44FwMeiLbX',
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
              subscription: SubscriptionSchema.exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Success Example': {
                  subscription: {
                    _id: '65cdba92f581e473b5647051',
                    open: true,
                    alert: true,
                    unread: 1,
                    userMentions: 1,
                    groupMentions: 0,
                    ts: '2024-02-15T07:17:38.547Z',
                    rid: 'GENERAL',
                    name: 'general',
                    t: 'c',
                    u: { _id: 'fZ3bvXC72pobjFPLJ', username: 'funke' },
                    _updatedAt: '2024-07-02T18:07:35.267Z',
                    ls: '2024-05-30T16:47:36.993Z',
                    draft: 'Remember to share the report',
                    threadDrafts: { '7aDSXtjMA3KPLxLjt': 'I will check this and reply' },
                  },
                  success: true,
                },
              },
              required: [],
            }),
          examples: {
            'Success Example': {
              value: {
                result: [
                  {
                    _id: 'jRca8kibJx8NkLJxt',
                    createdAt: '2018-04-13T12:46:26.517Z',
                    emails: [{ address: 'user.test.1523623548558@rocket.chat', verified: false }],
                    name: 'EditedRealNameuser.test.1523623548558',
                    username: 'editedusernameuser.test.1523623548558',
                    avatarETag: '6YbLtc4v9b4conXon',
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
            'Invalid Parameter': {
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

export const postApiV1SubscriptionsReadRoute = createRoute({
  method: 'post',
  path: '/api/v1/subscriptions.read',
  tags: ['Subscriptions'],
  summary: 'Mark Channel as Read',
  description:
    '### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.11.0            | `roomId` can be used as argument instead of `rid`.       |\n|0.61.0            | Added       |',
  operationId: 'post-api-v1-subscriptions.read',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                roomId: z
                  .string()
                  .openapi({
                    description: 'The room ID.',
                    example: 'L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y',
                  }),
                readThreads: z.boolean().exactOptional(),
              })
              .openapi({ required: ['roomId'] }),
            z
              .object({
                rid: z
                  .string()
                  .openapi({
                    description: 'The room ID.',
                    example: 'L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y',
                  }),
                readThreads: z.boolean().exactOptional(),
              })
              .openapi({ required: ['rid'] }),
          ]),
          examples: {
            RoomId: { value: { roomId: 'L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y' } },
            Rid: { value: { rid: 'L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y' } },
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
            'Invalid Parameter': {
              value: {
                success: false,
                error:
                  "must have required property 'rid'\n must have required property 'roomId'\n must match a schema in anyOf [error-invalid-params]",
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

export const postApiV1SubscriptionsUnreadRoute = createRoute({
  method: 'post',
  path: '/api/v1/subscriptions.unread',
  tags: ['Subscriptions'],
  summary: 'Mark Channel as Unread',
  description:
    'Mark messages as unread by room ID or from a message. \n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.65.0            | Added       |',
  operationId: 'post-api-v1-subscriptions.unread',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({ roomId: z.string().openapi({ description: 'The room ID.' }) })
              .openapi({ required: ['roomId'] }),
            z
              .object({
                firstUnreadMessage: z
                  .object({
                    _id: z.string().exactOptional().openapi({ description: 'The message ID.' }),
                  })
                  .openapi({ required: [' _id'] }),
              })
              .openapi({ required: ['firstUnreadMessage'] }),
          ]),
          examples: {
            Example: { value: { roomId: 'L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y' } },
            'Example 2': {
              value: { firstUnreadMessage: { _id: 'L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y' } },
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
            'Invalid Parameter': {
              value: {
                success: false,
                error:
                  "must have required property 'roomId'\n must have required property 'firstUnreadMessage'\n must match a schema in anyOf [error-invalid-params]",
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
