import { createRoute, z } from '@hono/zod-openapi'

const EventSchema = z
  .object({
    _links: z
      .object({
        self: z
          .object({
            href: z
              .string()
              .exactOptional()
              .openapi({
                example:
                  'https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events/9',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    from: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The member ID of the sender',
        example: 'MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e',
      }),
    id: z.int().exactOptional().openapi({ description: 'The ID of the event', example: 9 }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time that the event happened',
        example: '2019-09-12T19:49:21.823Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('Event')

const TextEventSchema = z
  .object({
    body: z
      .object({
        text: z
          .string()
          .exactOptional()
          .openapi({ description: 'The text sent in this event', example: 'Hello World' }),
      })
      .exactOptional()
      .openapi({ description: 'The body of the `text` event', required: [] }),
    conversation_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the Conversation that the member belongs to',
        example: 'CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event type (`text`)', example: 'text' }),
  })
  .openapi({ description: 'Text', 'x-tab-id': 'text-event', required: [] })
  .and(EventSchema)
  .openapi('TextEvent')

const CustomEventSchema = z
  .object({
    body: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The body of your `custom` event', example: { my: 'Custom Data' } }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The event type (`custom:<YOUR_IDENTIFIER>`)',
        example: 'custom:my_event',
      }),
  })
  .openapi({ description: 'Custom', 'x-tab-id': 'custom-event', required: [] })
  .and(EventSchema)
  .openapi('CustomEvent')

const MemberListSchema = z
  .object({
    _links: z
      .object({
        self: z
          .object({
            href: z
              .string()
              .exactOptional()
              .openapi({
                example:
                  'https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/members/MEM-e784d5d1-dff2-424a-9de7-bc34f1901177',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the User', example: 'Ashley Arthur' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Member ID', example: 'MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the User', example: 'ashley' }),
    state: z
      .enum(['INVITED', 'JOINED'])
      .exactOptional()
      .openapi({
        description: 'The state that the member is in for this conversation',
        example: 'JOINED',
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the User',
        example: 'USR-2c52f0ec-7a48-4b52-9d47-df47482b2b7e',
      }),
  })
  .openapi({ required: [] })
  .openapi('MemberList')

const MemberSchema = MemberListSchema.and(
  z
    .object({
      channel: z
        .object({
          type: z
            .literal('app')
            .exactOptional()
            .openapi({ description: 'The channel that the member joins with', example: 'app' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
      initiator: z
        .object({
          invited: z
            .object({ is_system: z.boolean().exactOptional().openapi({ example: true }) })
            .exactOptional()
            .openapi({ required: [] }),
          joined: z
            .object({ is_system: z.boolean().exactOptional().openapi({ example: true }) })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .exactOptional()
        .openapi({ required: [] }),
      media: z
        .object({
          audio_settings: z
            .object({
              earmuffed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Can the member hear other participants?',
                  example: false,
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is audio enabled?', example: false }),
              muted: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Can the member speak to other participants?',
                  example: false,
                }),
            })
            .exactOptional()
            .openapi({ description: 'The current audio state for the member', required: [] }),
        })
        .exactOptional()
        .openapi({ description: 'The current media state for the member', required: [] }),
      timestamp: z
        .object({
          invited: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The time that an invitation was sent',
              example: '2019-09-03T18:40:24.324Z',
            }),
          joined: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The time that the conversation was joined',
              example: '2019-09-12T16:27:07.450Z',
            }),
          left: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The time that the member left the conversation',
              example: '2019-09-13T02:16:55.390Z',
            }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('Member')

const MemberInvitedEventSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event type (`member:invited`)', example: 'member:invited' }),
  })
  .openapi({ description: 'Member Invited', 'x-tab-id': 'member-invited', required: [] })
  .and(EventSchema)
  .and(z.object({ body: MemberSchema.exactOptional() }).openapi({ required: [] }))
  .openapi('MemberInvitedEvent')

const MemberLeftEventSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event type (`member:left`)', example: 'member:left' }),
  })
  .openapi({ description: 'Member Left', 'x-tab-id': 'member-left', required: [] })
  .and(EventSchema)
  .and(z.object({ body: MemberSchema.exactOptional() }).openapi({ required: [] }))
  .openapi('MemberLeftEvent')

const AllEventsSchema = z
  .union([TextEventSchema, CustomEventSchema, MemberInvitedEventSchema, MemberLeftEventSchema])
  .openapi('AllEvents')

const ConversationDisplayNameSchema = z
  .string()
  .openapi({
    description: 'The public facing name of the conversation',
    example: 'Conversation with Ashley',
  })
  .openapi('ConversationDisplayName')

const ConversationIdSchema = z
  .string()
  .openapi({
    description: 'Automatically generated conversation ID',
    example: 'CON-c4724477-72ac-438e-9fc0-1d3e2ff8728c',
  })
  .openapi('ConversationId')

const ConversationImageUrlSchema = z
  .string()
  .openapi({
    description: 'An image URL that you associate with the conversation',
    example: 'https://example.com/my-image.png',
  })
  .openapi('ConversationImageUrl')

const ConversationNameSchema = z
  .string()
  .openapi({
    description: 'Your internal conversation name. Must be unique',
    example: 'my-conversation',
  })
  .openapi('ConversationName')

const ConversationListSchema = z
  .object({
    _links: z
      .object({
        self: z
          .object({
            href: z
              .string()
              .exactOptional()
              .openapi({
                example:
                  'https://api.nexmo.com/v0.2/conversations/CON-c4724477-72ac-438e-9fc0-1d3e2ff8728c',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    display_name: ConversationDisplayNameSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the conversation',
        example: 'CON-afe887d8-d587-4280-9aae-dfa4c9227d5e',
      }),
    image_url: ConversationImageUrlSchema.exactOptional(),
    name: ConversationNameSchema.exactOptional(),
    timestamp: z
      .object({
        created: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The time that the conversation was created',
            example: '2019-09-03T18:40:24.324Z',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ConversationList')

const UserIdSchema = z
  .string()
  .openapi({
    description: 'The ID of the user',
    example: 'USR-e46d9542-752a-4786-8f12-25a2e623a793',
  })
  .openapi('UserId')

const UserLinksSchema = z
  .object({
    self: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({
            example: 'https://api.nexmo.com/v0.2/users/USR-e46d9542-752a-4786-8f12-25a2e623a793',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('UserLinks')

const UserNameSchema = z
  .string()
  .openapi({ description: 'The name of the user', example: 'ashley' })
  .openapi('UserName')

const UserListSchema = z
  .object({
    _links: UserLinksSchema.exactOptional(),
    id: UserIdSchema.exactOptional(),
    name: UserNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserList')

const ConversationIdParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of the conversation',
      example: 'CON-afe887d8-d587-4280-9aae-dfa4c9227d5e',
      in: 'path',
      name: 'conversation_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const CursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The cursor to start returning results from.\n\nYou are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value\n',
      in: 'query',
      name: 'cursor',
      required: false,
      schema: { type: 'string' },
    },
  })

const DateEndParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Search for conversations created before this ISO8601 date',
      in: 'query',
      name: 'date_end',
      required: false,
      schema: { type: 'string' },
    },
  })

const DateStartParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Search for conversations created after this ISO8601 date',
      in: 'query',
      name: 'date_start',
      required: false,
      schema: { type: 'string' },
    },
  })

const EndIdParameterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The ID to end returning events at',
      example: 19,
      in: 'query',
      name: 'end_id',
      required: false,
      schema: { type: 'string' },
    },
  })

const EventIdParameterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'The ID of the event',
      example: 9,
      in: 'path',
      name: 'event_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const EventTypeParameterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The type of event to search for. Does not currently support custom events',
      example: 'text',
      in: 'query',
      name: 'event_type',
      required: false,
      schema: { type: 'string' },
    },
  })

const MemberIdParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of the member',
      example: 'MEM-e46d9542-752a-4786-8f12-25a2e623a793',
      in: 'path',
      name: 'member_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const OrderParamsSchema = z
  .enum(['asc', 'desc'])
  .default('asc')
  .exactOptional()
  .openapi({
    param: {
      description: 'Show the most (`desc`) / least (`asc`) recently created entries first',
      in: 'query',
      name: 'order',
      required: false,
      schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
    },
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().max(100),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description:
        'The number of results returned per page.   The default value is `10`. The maximum value is `100`.',
      in: 'query',
      name: 'page_size',
      required: false,
      schema: { default: 10, maximum: 100, type: 'integer' },
    },
  })

const StartIdParameterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The ID to start returning events at',
      example: 13,
      in: 'query',
      name: 'start_id',
      required: false,
      schema: { type: 'string' },
    },
  })

const UserIdParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of the user',
      example: 'USR-e46d9542-752a-4786-8f12-25a2e623a793',
      in: 'path',
      name: 'user_id',
      required: true,
      schema: { type: 'string' },
    },
  })

export const getConversationsRoute = createRoute({
  method: 'get',
  path: '/conversations',
  tags: ['conversation'],
  summary: 'List Conversations',
  description:
    "Please note that not all data is available in the list endpoint. Once \nyou've identified the conversation you need to work with, use the \n[GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details\n",
  operationId: 'get-conversations',
  request: {
    query: z.object({
      page_size: PageSizeParamsSchema,
      order: OrderParamsSchema,
      cursor: CursorParamsSchema,
      date_start: DateStartParamsSchema,
      date_end: DateEndParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z
                .object({
                  data: z
                    .object({
                      conversations: z
                        .array(ConversationListSchema)
                        .exactOptional()
                        .openapi({
                          description: 'List of conversations matching the provided filter',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ 'x-nexmo-developer-collection-description-shown': true, required: [] }),
              _links: z
                .object({
                  first: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/conversations?order=desc&page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  next: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/conversations?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b829a650e69a39197bfd4c949f4243f60dc4babb696afa404d2f44e7775e32b967f2a1a0bb8fb259c0999ba5a4e501eaab55',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  prev: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/conversations?order=desc&page_size=10&cursor=069626a3de11d2ec900dff5042197bd75f1ce41dafc3f2b2481eb9151086e59aae9dba3e3a8858dc355232d499c310fbfbec43923ff657c0de8d49ffed9f7edb',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  self: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/conversations?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Current cursor',
                  example:
                    '88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0',
                }),
              page_size: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The number of results returned on this page.',
                  example: 10,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getConversationsConversationIdEventsRoute = createRoute({
  method: 'get',
  path: '/conversations/{conversation_id}/events',
  tags: ['event'],
  summary: 'List Events',
  operationId: 'get-events',
  request: {
    params: z.object({ conversation_id: ConversationIdParameterParamsSchema }),
    query: z.object({
      page_size: PageSizeParamsSchema,
      order: OrderParamsSchema,
      cursor: CursorParamsSchema,
      start_id: StartIdParameterParamsSchema,
      end_id: EndIdParameterParamsSchema,
      event_type: EventTypeParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z
                .object({
                  data: z
                    .object({
                      events: z
                        .array(AllEventsSchema)
                        .exactOptional()
                        .openapi({ description: 'List of events matching the provided filter' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ 'x-nexmo-developer-collection-description-shown': true, required: [] }),
              _links: z
                .object({
                  first: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events?page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  next: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events?page_size=10&cursor=4db03d9254d1cdaecc7b1fc15b6bf1a81f3d3151191d784f1327893f8dc96416',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  prev: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events?page_size=10&cursor=84963f79fd25785be9706bd38bfd30c264f71964fa4edc8d8b4dd5f30bbd9f7c',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  self: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events?page_size=10&cursor=a30e3b7a3dcda1434f64bbb1a5fa489b',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              page_size: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The number of results returned on this page.',
                  example: 10,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getConversationsConversationIdMembersRoute = createRoute({
  method: 'get',
  path: '/conversations/{conversation_id}/members',
  tags: ['member'],
  summary: 'List Members',
  operationId: 'get-members',
  request: {
    params: z.object({ conversation_id: ConversationIdParameterParamsSchema }),
    query: z.object({
      page_size: PageSizeParamsSchema,
      order: OrderParamsSchema,
      cursor: CursorParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z
                .object({
                  data: z
                    .object({
                      members: z
                        .array(MemberListSchema)
                        .exactOptional()
                        .openapi({ description: 'List of members matching the provided filter' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ 'x-nexmo-developer-collection-description-shown': true, required: [] }),
              _links: z
                .object({
                  first: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: 'https://api.nexmo.com/v0.2/members?order=desc&page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  next: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/members?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b829a650e69a39197bfd4c949f4243f60dc4babb696afa404d2f44e7775e32b967f2a1a0bb8fb259c0999ba5a4e501eaab55',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  prev: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/members?order=desc&page_size=10&cursor=069626a3de11d2ec900dff5042197bd75f1ce41dafc3f2b2481eb9151086e59aae9dba3e3a8858dc355232d499c310fbfbec43923ff657c0de8d49ffed9f7edb',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  self: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/members?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              page_size: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The number of results returned on this page',
                  example: 10,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  summary: 'List Users',
  operationId: 'get-users',
  request: {
    query: z.object({
      page_size: PageSizeParamsSchema,
      order: OrderParamsSchema,
      cursor: CursorParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z
                .object({
                  data: z
                    .object({
                      users: z
                        .array(UserListSchema)
                        .exactOptional()
                        .openapi({ description: 'List of users matching the provided filter' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ 'x-nexmo-developer-collection-description-shown': true, required: [] }),
              _links: z
                .object({
                  first: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: 'https://api.nexmo.com/v0.2/users?order=desc&page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  next: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/users?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b829a650e69a39197bfd4c949f4243f60dc4babb696afa404d2f44e7775e32b967f2a1a0bb8fb259c0999ba5a4e501eaab55',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  prev: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/users?order=desc&page_size=10&cursor=069626a3de11d2ec900dff5042197bd75f1ce41dafc3f2b2481eb9151086e59aae9dba3e3a8858dc355232d499c310fbfbec43923ff657c0de8d49ffed9f7edb',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  self: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/v0.2/users?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Current cursor',
                  example:
                    '88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0',
                }),
              page_size: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The number of results returned on this page',
                  example: 10,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
