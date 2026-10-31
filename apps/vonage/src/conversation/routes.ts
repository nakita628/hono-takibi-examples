import { createRoute, z } from '@hono/zod-openapi'

const LegIdSchema = z
  .string()
  .openapi({
    description: 'The id of the leg. rtc_id and call_id are leg id',
    example: 'a595959595959595995',
  })
  .openapi('LegId')

const ChannelTypeSchema = z
  .enum(['app', 'phone', 'sip', 'websocket', 'vbc'])
  .openapi({ description: 'Channel type', example: 'phone' })
  .openapi('ChannelType')

type ChannelType = {
  from?:
    | { type: string; user: string }
    | { number: string; type: string }
    | { type: string; uri?: string }
    | {
        'content-type': 'audio/l16;rate=8000' | 'audio/l16;rate=16000'
        headers?: { customer_id?: string }
        type: string
        uri?: string
      }
    | { extension: string; type: string }
  leg_id?: z.infer<typeof LegIdSchema>
  leg_ids?: { leg_id?: z.infer<typeof LegIdSchema> }[]
  to?:
    | ChannelType
    | { dtmfAnswer?: string; number: ChannelType; type: string }
    | ChannelType
    | ChannelType
    | ChannelType
  type?: z.infer<typeof ChannelTypeSchema>
}

const HrefConversationSchema = z
  .url()
  .openapi({
    description: 'A link towards a conversation included in Conversation API',
    example: 'https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391',
  })
  .openapi('HrefConversation')

const LinksConversationSchema = z
  .object({
    self: z
      .object({ href: HrefConversationSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('LinksConversation')

const HrefConversationsListSchema = z
  .url()
  .openapi({
    description: 'A link towards a conversations list included in Conversation API',
    example: 'https://api.nexmo.com/v0.1/conversations?page_size=2&record_index=10&',
  })
  .openapi('HrefConversationsList')

const LinksConversationsListSchema = z
  .object({ self: z.object({ href: HrefConversationsListSchema }).openapi({ required: ['href'] }) })
  .openapi({
    description:
      'A series of links between resources in this API in the http://stateless.co/hal_specification.html.',
    required: ['self'],
  })
  .openapi('LinksConversationsList')

const ActionSchema = z
  .enum(['start', 'stop'])
  .openapi({ description: 'Recording Action', example: 'start' })
  .openapi('Action')

const ChannelSchema: z.ZodType<ChannelType> = z
  .lazy(() =>
    z
      .object({
        from: z
          .xor([
            z
              .object({
                type: z
                  .string()
                  .openapi({
                    description: 'The type of connection. Must be `app`',
                    example: 'app',
                  }),
                user: z
                  .string()
                  .openapi({ description: 'The username to connect to', example: 'jamie' }),
              })
              .openapi({ description: 'Connect to an App User', required: ['type', 'user'] }),
            z
              .object({
                number: z
                  .string()
                  .regex(/\d{7,15}/)
                  .min(7)
                  .max(15)
                  .openapi({
                    description: 'The phone number to connect to',
                    example: '14155550100',
                  }),
                type: z
                  .string()
                  .openapi({
                    description: 'The type of connection. Must be `phone`',
                    example: 'phone',
                  }),
              })
              .openapi({
                description: 'Connect to a Phone (PSTN) number',
                required: ['number', 'type'],
              }),
            z
              .object({
                type: z
                  .string()
                  .openapi({
                    description: 'The type of connection. Must be `sip`',
                    example: 'sip',
                  }),
                uri: z
                  .string()
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({
                    description: 'The SIP URI to connect to',
                    example: 'sip:rebekka@sip.example.com',
                  }),
              })
              .openapi({ description: 'Connect to a SIP Endpoint', required: ['type'] }),
            z
              .object({
                'content-type': z
                  .enum(['audio/l16;rate=8000', 'audio/l16;rate=16000'])
                  .openapi({ example: 'audio/l16;rate=16000' }),
                headers: z
                  .object({
                    customer_id: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'This is an example header. You can provide any headers you may need',
                        example: 'ABC123',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Details of the Websocket you want to connect to',
                    required: [],
                  }),
                type: z
                  .string()
                  .openapi({
                    description: 'The type of connection. Must be `websocket`',
                    example: 'websocket',
                  }),
                uri: z
                  .string()
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ example: 'wss://example.com/socket' }),
              })
              .openapi({
                description: 'Connect to a Websocket',
                required: ['type', 'content-type'],
              }),
            z
              .object({
                extension: z.string().openapi({ example: '1234' }),
                type: z
                  .string()
                  .openapi({
                    description: 'The type of connection. Must be `vbc`',
                    example: 'vbc',
                  }),
              })
              .openapi({
                description: 'Connect to a VBC extension',
                required: ['type', 'extension'],
              }),
          ])
          .exactOptional(),
        leg_id: LegIdSchema.exactOptional(),
        leg_ids: z
          .array(z.object({ leg_id: LegIdSchema.exactOptional() }).openapi({ required: [] }))
          .exactOptional()
          .openapi({
            description:
              'Leg ids associated with this Channel. The first item in the array represents the main active Leg. The second item, if exists, represents a screen-share Leg.',
          }),
        to: z
          .xor([
            z.lazy(() => ChannelSchema),
            z
              .object({
                dtmfAnswer: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered',
                    example: 'p*123#',
                  }),
                number: z.lazy(() => ChannelSchema),
                type: z
                  .string()
                  .openapi({
                    description: 'The type of connection. Must be `phone`',
                    example: 'phone',
                  }),
              })
              .openapi({
                description: 'Connect to a Phone (PSTN) number',
                required: ['number', 'type'],
              }),
            z.lazy(() => ChannelSchema),
            z.lazy(() => ChannelSchema),
            z.lazy(() => ChannelSchema),
          ])
          .exactOptional(),
        type: ChannelTypeSchema.exactOptional(),
      })
      .openapi({
        description:
          'A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`',
        required: [],
      }),
  )
  .openapi('Channel')

const ChannelNumberSchema = z
  .string()
  .openapi({
    description: 'this can be a phone number or a random string',
    example: 'a447700900585',
  })
  .openapi('ChannelNumber')

const ConversationIdSchema = z
  .string()
  .openapi({
    description: 'The unique identifier for this conversation',
    example: 'CON-63f61863-4a51-4f6b-86e1-46edebio0391',
  })
  .openapi('ConversationId')

const ConversationPropertiesSchema = z
  .object({
    ttl: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Time to leave. After how many seconds an empty conversation is deleted.',
        example: 60,
      }),
  })
  .openapi({ description: 'Conversation properties', required: [] })
  .openapi('ConversationProperties')

const DisplayNameSchema = z
  .string()
  .openapi({
    description: 'The display name for the conversation. It does not have to be unique',
    example: 'Customer Chat',
  })
  .openapi('DisplayName')

const DisplayNameUserSchema = z
  .string()
  .openapi({
    description: 'A string to be displayed as user name. It does not need to be unique',
    example: 'My User Name',
  })
  .openapi('DisplayNameUser')

const EventBodySchema = z
  .object({})
  .openapi({ description: 'Event Body', example: { text: 'My Text' } })
  .openapi('EventBody')

const EventIdSchema = z
  .string()
  .openapi({ description: 'Event id. This is a progressive integer', example: '5' })
  .openapi('EventId')

const EventMethodSchema = z
  .string()
  .default('POST')
  .openapi({
    description: 'The HTTP method used to send event information to event_url.',
    example: 'POST',
  })
  .openapi('EventMethod')

const MemberIdSchema = z
  .string()
  .openapi({ description: 'Member ID', example: 'MEM-63f61863-4a51-4f6b-86e1-46edebio0391' })
  .openapi('MemberId')

const HrefEventSchema = z
  .url()
  .openapi({
    description: 'A link towards a conversation event included in Conversation API',
    example:
      'https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/events/1',
  })
  .openapi('HrefEvent')

const MemberStateSchema = z
  .enum(['invited', 'joined', 'left', 'unknown'])
  .openapi({
    description:
      'The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`',
    example: 'invited',
  })
  .openapi('MemberState')

const TimestampCreatedSchema = z
  .string()
  .openapi({ description: 'Time of creation', example: '2020-01-01T14:00:00.00Z' })
  .openapi('TimestampCreated')

const EventTypeSchema = z
  .string()
  .openapi({ description: 'Event type', example: 'text' })
  .openapi('EventType')

const EventRetrievedSchema = z
  .object({
    body: EventBodySchema,
    from: MemberIdSchema.exactOptional(),
    href: HrefEventSchema,
    id: EventIdSchema,
    state: MemberStateSchema.exactOptional(),
    timestamp: TimestampCreatedSchema,
    to: MemberIdSchema.exactOptional(),
    type: EventTypeSchema,
  })
  .openapi({
    description: 'Retrieve Events Response Payload Object Item',
    required: ['id', 'type', 'body', 'timestamp', 'href'],
  })
  .openapi('EventRetrieved')

const EventUrlSchema = z
  .array(z.url())
  .openapi({
    description: 'The webhook endpoint where recording progress events are sent to.',
    example: ['https://example.com/event'],
    'x-nexmo-developer-collection-description-shown': true,
  })
  .openapi('EventUrl')

const FormatSchema = z
  .enum(['mp3', 'wav'])
  .default('mp3')
  .openapi({ description: 'Record the Conversation in a specific format.', example: 'mp3' })
  .openapi('Format')

const HrefSchema = z
  .url()
  .openapi({
    description: 'A link towards a resources included in Conversation API',
    example: 'https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391',
  })
  .openapi('Href')

const HrefMemberSchema = z
  .url()
  .openapi({
    description: 'A link towards a member included in Conversation API',
    example:
      'https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/members/MEM-63f61863-4a51-4f6b-86e1-46edebio0391',
  })
  .openapi('HrefMember')

const HrefRtcSchema = z
  .url()
  .openapi({
    description: 'A link towards a rtc (leg) included in Conversation API',
    example:
      'https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/rtc/7777777777777',
  })
  .openapi('HrefRtc')

const HrefUserSchema = z
  .url()
  .openapi({
    description: 'A link towards a user included in Conversation API',
    example: 'https://api.nexmo.com/v0.1/users/USR-63f61863-4a51-4f6b-86e1-46edebio0391',
  })
  .openapi('HrefUser')

const ImageUrlSchema = z
  .url()
  .openapi({
    description: "A link to an image for conversations' and users' avatars",
    example: 'https://example.com/image.png',
  })
  .openapi('ImageUrl')

const UserIdSchema = z
  .string()
  .openapi({ description: 'User ID', example: 'USR-63f61863-4a51-4f6b-86e1-46edebio0391' })
  .openapi('UserId')

const InitiatorSchema = z
  .object({
    joined: z
      .object({
        isSystem: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              '`true` if the user was invited by an admin JWT. `user_id` and `member_id` will not exist if `true`',
          }),
        member_id: MemberIdSchema.exactOptional(),
        user_id: UserIdSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Initiator')

const KnockerIdSchema = z
  .string()
  .openapi({
    description: 'Knocker ID. A knocker is a pre-member of a conversation who does not exist yet',
    example: 'a972836a-450f-35fa-156c-52a2ab5b7d25',
  })
  .openapi('KnockerId')

const LegStateSchema = z
  .literal('terminated')
  .openapi({ description: 'Leg Status', example: 'terminated' })
  .openapi('LegState')

const MediaSchema = z
  .object({})
  .openapi({
    description: 'Media Object',
    example: { audio_settings: { earmuffed: false, enabled: false, muted: false } },
  })
  .openapi('Media')

const MemberActionSchema = z
  .enum(['invite', 'join'])
  .openapi({ description: 'Invite or join a member to a conversation', example: 'join' })
  .openapi('MemberAction')

const MemberIdInvitingSchema = z
  .string()
  .openapi({
    description: 'Member ID of the member that sends the invitation',
    example: 'MEM-63f61863-4a51-4f6b-86e1-46edebio0391',
  })
  .openapi('MemberIdInviting')

const NameSchema = z
  .string()
  .openapi({ description: 'Unique name', example: 'my_unique_name' })
  .openapi('Name')

const NameConversationSchema = z
  .string()
  .openapi({ description: 'Unique name for a conversation', example: 'customer_chat' })
  .openapi('NameConversation')

const NameUserSchema = z
  .string()
  .openapi({ description: 'Unique name for a user', example: 'my_user_name' })
  .openapi('NameUser')

const PageSizeSchema = z
  .number()
  .min(1)
  .max(100)
  .default(10)
  .openapi({ description: 'The amount of records returned in this response', example: 50 })
  .openapi('PageSize')

const RecordIndexSchema = z
  .number()
  .min(0)
  .default(0)
  .openapi({
    description:
      'Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.',
    example: 0,
  })
  .openapi('RecordIndex')

const SplitSchema = z
  .string()
  .default('conversation')
  .openapi({
    description: 'Record the sent and received audio in separate channels of a stereo recording',
    example: 'conversation',
  })
  .openapi('Split')

const TimestampSchema = z
  .string()
  .openapi({ description: 'Timestamp', example: '2020-01-01T14:00:00.00Z' })
  .openapi('Timestamp')

const TimestampDestroyedSchema = z
  .string()
  .openapi({ description: 'Time of last update', example: '2020-01-01T14:20:00.00Z' })
  .openapi('TimestampDestroyed')

const TimestampLegEndTimeSchema = z
  .string()
  .openapi({ description: 'Time of leg end', example: '2020-01-01T14:00:00.00Z' })
  .openapi('TimestampLegEndTime')

const TimestampLegStartTimeSchema = z
  .string()
  .openapi({ description: 'Time of leg start', example: '2020-01-01T14:00:00.00Z' })
  .openapi('TimestampLegStartTime')

const TimestampObjLegSchema = z
  .object({
    end: TimestampSchema.exactOptional(),
    request: TimestampSchema.exactOptional(),
    start: TimestampCreatedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimestampObjLeg')

const TimestampUpdatedSchema = z
  .string()
  .openapi({ description: 'Time of last update', example: '2020-01-01T14:05:00.00Z' })
  .openapi('TimestampUpdated')

const TimestampResConversationSchema = z
  .object({
    created: TimestampCreatedSchema.exactOptional(),
    destroyed: TimestampDestroyedSchema.exactOptional(),
    updated: TimestampUpdatedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimestampResConversation')

const TimestampResEventSchema = z
  .string()
  .openapi({ description: 'Time of event creation', example: '2020-01-01T14:00:00.00Z' })
  .openapi('TimestampResEvent')

const TimestampResMemberSchema = z
  .object({
    invited: TimestampSchema.exactOptional(),
    joined: TimestampSchema.exactOptional(),
    left: TimestampSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimestampResMember')

const UserIdOrUserNameSchema = z
  .string()
  .openapi({
    description: 'user name or user id of the inviter',
    example: 'someone_else_user_name',
  })
  .openapi('UserIdOrUserName')

const ConversationLiteResponse = {
  description: 'Create / Update Conversation Response Payload Object',
  content: {
    'application/json': {
      schema: z
        .object({ href: HrefConversationSchema, id: ConversationIdSchema })
        .openapi({ required: ['id', 'href'] }),
    },
  },
}

const SuccessEmptyJSONResponse = {
  description: 'Success response with empty JSON',
  content: {
    'application/json': {
      schema: z.object({}).openapi({ description: 'Empty JSON payload', example: {} }),
    },
  },
}

const ConversationIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Conversation ID',
      example: 'CON-f972836a-550f-45fa-956c-12a2ab5b7d22',
      in: 'path',
      name: 'conversation_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const DateEndParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Return the records that occurred before this point in time.',
      in: 'query',
      name: 'date_end',
      required: false,
      schema: { example: '2018-01-01 12:00:00', format: 'dateTime', type: 'string' },
    },
    example: '2018-01-01 12:00:00',
  })

const DateStartParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Return the records that occurred after this point in time.',
      in: 'query',
      name: 'date_start',
      required: false,
      schema: { example: '2018-01-01 10:00:00', format: 'dateTime', type: 'string' },
    },
    example: '2018-01-01 10:00:00',
  })

const EventIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Event ID',
      in: 'path',
      name: 'event_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const LegIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Leg ID',
      in: 'path',
      name: 'leg_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const MemberIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Member ID',
      in: 'path',
      name: 'member_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const OrderParamsSchema = z
  .enum(['asc', 'desc', 'ASC', 'DESC'])
  .default('asc')
  .exactOptional()
  .openapi({
    param: {
      description: 'Return the records in ascending or descending order.',
      in: 'query',
      name: 'order',
      required: false,
      schema: { default: 'asc', enum: ['asc', 'desc', 'ASC', 'DESC'], type: 'string' },
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
    PageSizeSchema.openapi({
      param: {
        description: 'Return this amount of records in the response',
        in: 'query',
        name: 'page_size',
        required: false,
        schema: { $ref: '#/components/schemas/page_size' },
      },
    }),
  )
  .exactOptional()

const RecordIndexParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    RecordIndexSchema.openapi({
      param: {
        description: 'Return calls from this index in the response',
        in: 'query',
        name: 'record_index',
        required: false,
        schema: { $ref: '#/components/schemas/record_index' },
      },
    }),
  )
  .exactOptional()

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'User ID',
      in: 'path',
      name: 'user_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConversationRequestBody = {
  description: 'Conversation Request Payload Object',
  content: {
    'application/json': {
      schema: z
        .object({
          display_name: DisplayNameSchema.exactOptional(),
          image_url: ImageUrlSchema.exactOptional(),
          name: NameConversationSchema.exactOptional(),
          properties: ConversationPropertiesSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const EmptyBodyRequestBody = {
  description: 'Conversation Request Payload Object',
  content: { 'application/json': { schema: z.object({}).openapi({ example: {} }) } },
  required: true,
}

const RecordConversationRequestBody = {
  description: 'Record Conversation Request Payload Object',
  content: {
    'application/json': {
      schema: z
        .object({
          action: ActionSchema,
          event_method: EventMethodSchema.exactOptional(),
          event_url: EventUrlSchema.exactOptional(),
          format: FormatSchema.exactOptional(),
          split: SplitSchema.exactOptional(),
        })
        .openapi({ required: ['action'] }),
    },
  },
}

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getConversationsRoute = createRoute({
  method: 'get',
  path: '/conversations',
  tags: ['conversation'],
  summary: 'List conversations',
  description:
    'This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).\n\nList all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)',
  operationId: 'listConversations',
  request: {
    query: z.object({
      date_start: DateStartParamsSchema,
      date_end: DateEndParamsSchema,
      page_size: PageSizeParamsSchema,
      record_index: RecordIndexParamsSchema,
      order: OrderParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List Conversations Response Payload Object.',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z
                .object({
                  conversations: z.array(
                    z
                      .object({
                        _links: z
                          .object({
                            self: z
                              .object({ href: HrefConversationSchema.exactOptional() })
                              .exactOptional()
                              .openapi({ required: [] }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        name: NameConversationSchema,
                        uuid: ConversationIdSchema,
                      })
                      .openapi({ required: ['uuid', 'name', 'href'] }),
                  ),
                })
                .openapi({
                  description:
                    'A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects',
                  required: ['conversations'],
                }),
              _links: LinksConversationsListSchema,
              count: z
                .number()
                .openapi({
                  description: 'The total number of records returned by your request.',
                  example: '100',
                }),
              page_size: PageSizeSchema,
              record_index: RecordIndexSchema,
            })
            .openapi({ required: ['count', 'page_size', 'record_index', '_links', '_embedded'] }),
        },
      },
    },
  },
  deprecated: true,
})

export const postConversationsRoute = createRoute({
  method: 'post',
  path: '/conversations',
  tags: ['conversation'],
  summary: 'Create a conversation',
  operationId: 'createConversation',
  request: { body: ConversationRequestBody },
  responses: { 200: ConversationLiteResponse },
})

export const getConversationsConversationIdRoute = createRoute({
  method: 'get',
  path: '/conversations/{conversation_id}',
  tags: ['conversation'],
  summary: 'Retrieve a conversation',
  operationId: 'retrieveConversation',
  request: { params: z.object({ conversation_id: ConversationIdParamsSchema }) },
  responses: {
    200: {
      description: 'Retrieve a conversation',
      content: {
        'application/json': {
          schema: z
            .object({
              _links: LinksConversationSchema.exactOptional(),
              api_key: z
                .string()
                .exactOptional()
                .openapi({ description: 'The API key for your account' }),
              display_name: DisplayNameSchema.exactOptional(),
              members: z
                .array(
                  z
                    .object({
                      channel: ChannelSchema.exactOptional(),
                      initiator: InitiatorSchema.exactOptional(),
                      member_id: MemberIdSchema.exactOptional(),
                      name: NameUserSchema.exactOptional(),
                      state: MemberStateSchema.exactOptional(),
                      timestamp: TimestampResMemberSchema.exactOptional(),
                      user_id: UserIdSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Users associated to this conversation as members' }),
              name: NameConversationSchema.exactOptional(),
              numbers: z.object({}).exactOptional(),
              properties: z
                .object({ video: z.boolean().exactOptional().openapi({ example: false }) })
                .exactOptional()
                .openapi({ required: [] }),
              sequence_number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The last Event ID in this conversation. This ID can be used to [retrieve a specific event](#getEvent)',
                  example: '1',
                }),
              timestamp: TimestampResConversationSchema.exactOptional(),
              uuid: ConversationIdSchema,
            })
            .openapi({ description: 'Conversation Object', required: ['uuid'] }),
        },
      },
    },
  },
})

export const putConversationsConversationIdRoute = createRoute({
  method: 'put',
  path: '/conversations/{conversation_id}',
  tags: ['conversation'],
  summary: 'Update a conversation',
  operationId: 'replaceConversation',
  request: {
    params: z.object({ conversation_id: ConversationIdParamsSchema }),
    body: ConversationRequestBody,
  },
  responses: { 200: ConversationLiteResponse },
})

export const deleteConversationsConversationIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/{conversation_id}',
  tags: ['conversation'],
  summary: 'Delete a conversation',
  operationId: 'deleteConversation',
  request: { params: z.object({ conversation_id: ConversationIdParamsSchema }) },
  responses: { 200: SuccessEmptyJSONResponse },
})

export const getConversationsConversationIdEventsRoute = createRoute({
  method: 'get',
  path: '/conversations/{conversation_id}/events',
  tags: ['event'],
  summary: 'List events',
  description:
    'This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).',
  operationId: 'getEvents',
  request: { params: z.object({ conversation_id: ConversationIdParamsSchema }) },
  responses: {
    200: {
      description: 'Retrieve Events Response Payload Object',
      content: { 'application/json': { schema: z.array(EventRetrievedSchema) } },
    },
  },
  deprecated: true,
})

export const postConversationsConversationIdEventsRoute = createRoute({
  method: 'post',
  path: '/conversations/{conversation_id}/events',
  tags: ['event'],
  summary: 'Create an event',
  operationId: 'createEvent',
  request: {
    params: z.object({ conversation_id: ConversationIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: EventBodySchema.exactOptional(),
              from: MemberIdSchema,
              to: MemberIdSchema.exactOptional(),
              type: EventTypeSchema,
            })
            .openapi({
              description: 'Create New Event Request Payload Object',
              required: ['type', 'from'],
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Create New Event Response Payload Object',
      content: {
        'application/json': {
          schema: z
            .object({
              href: HrefEventSchema.exactOptional(),
              id: EventIdSchema.exactOptional(),
              timestamp: TimestampResEventSchema.exactOptional(),
            })
            .openapi({ description: 'Create New Event Response Payload Object', required: [] }),
        },
      },
    },
  },
})

export const getConversationsConversationIdEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/conversations/{conversation_id}/events/{event_id}',
  tags: ['event'],
  summary: 'Retrieve an event',
  operationId: 'getEvent',
  request: {
    params: z.object({
      conversation_id: ConversationIdParamsSchema,
      event_id: EventIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Retrieve an event Content Payload',
      content: { 'application/json': { schema: EventRetrievedSchema } },
    },
  },
})

export const deleteConversationsConversationIdEventsEventIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/{conversation_id}/events/{event_id}',
  tags: ['event'],
  summary: 'Delete an event',
  operationId: 'deleteEvent',
  request: {
    params: z.object({
      conversation_id: ConversationIdParamsSchema,
      event_id: EventIdParamsSchema,
    }),
  },
  responses: { 200: SuccessEmptyJSONResponse },
})

export const getConversationsConversationIdMembersRoute = createRoute({
  method: 'get',
  path: '/conversations/{conversation_id}/members',
  tags: ['member'],
  summary: 'List members',
  description:
    'This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).',
  operationId: 'getMembers',
  request: { params: z.object({ conversation_id: ConversationIdParamsSchema }) },
  responses: {
    200: {
      description: 'Members List Object',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                name: NameUserSchema,
                state: MemberStateSchema,
                user_id: UserIdSchema,
                user_name: NameUserSchema,
              })
              .openapi({ required: ['user_id', 'name', 'user_name', 'state'] }),
          ),
        },
      },
    },
  },
  deprecated: true,
})

export const postConversationsConversationIdMembersRoute = createRoute({
  method: 'post',
  path: '/conversations/{conversation_id}/members',
  tags: ['member'],
  summary: 'Create a member',
  operationId: 'createMember',
  request: {
    params: z.object({ conversation_id: ConversationIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: MemberActionSchema.exactOptional(),
              channel: ChannelSchema,
              knocking_id: KnockerIdSchema.exactOptional(),
              media: MediaSchema.exactOptional(),
              member_id: MemberIdSchema.exactOptional(),
              member_id_inviting: MemberIdInvitingSchema.exactOptional(),
              user_id: UserIdSchema,
            })
            .openapi({
              description: 'Create a Member in invite state ',
              required: ['user_id', 'channel'],
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Create or invite Member in invite state ',
      content: {
        'application/json': {
          schema: z
            .object({
              channel: ChannelSchema.exactOptional(),
              href: HrefMemberSchema.exactOptional(),
              id: MemberIdSchema.exactOptional(),
              initiator: InitiatorSchema.exactOptional(),
              state: MemberStateSchema.exactOptional(),
              timestamp: TimestampResMemberSchema.exactOptional(),
              user_id: UserIdSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getConversationsConversationIdMembersMemberIdRoute = createRoute({
  method: 'get',
  path: '/conversations/{conversation_id}/members/{member_id}',
  tags: ['member'],
  summary: 'Retrieve a member',
  operationId: 'getMember',
  request: {
    params: z.object({
      conversation_id: ConversationIdParamsSchema,
      member_id: MemberIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Retrieve member payload',
      content: {
        'application/json': {
          schema: z
            .object({ href: HrefMemberSchema.exactOptional(), id: MemberIdSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putConversationsConversationIdMembersMemberIdRoute = createRoute({
  method: 'put',
  path: '/conversations/{conversation_id}/members/{member_id}',
  tags: ['member'],
  summary: 'Update a member',
  operationId: 'updateMember',
  request: {
    params: z.object({
      conversation_id: ConversationIdParamsSchema,
      member_id: MemberIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: MemberActionSchema.exactOptional(),
              channel: ChannelSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Member retrieved',
      content: {
        'application/json': {
          schema: z
            .object({ href: HrefMemberSchema.exactOptional(), id: MemberIdSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteConversationsConversationIdMembersMemberIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/{conversation_id}/members/{member_id}',
  tags: ['member'],
  summary: 'Delete a member',
  operationId: 'deleteMember',
  request: {
    params: z.object({
      conversation_id: ConversationIdParamsSchema,
      member_id: MemberIdParamsSchema,
    }),
  },
  responses: { 200: SuccessEmptyJSONResponse },
})

export const putConversationsConversationIdRecordRoute = createRoute({
  method: 'put',
  path: '/conversations/{conversation_id}/record',
  tags: ['conversation'],
  summary: 'Record a conversation',
  operationId: 'recordConversation',
  request: {
    params: z.object({ conversation_id: ConversationIdParamsSchema }),
    body: RecordConversationRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getLegsRoute = createRoute({
  method: 'get',
  path: '/legs',
  tags: ['leg'],
  summary: 'List legs',
  operationId: 'listLegs',
  responses: {
    200: {
      description: 'List Legs Successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z
                .object({
                  legs: z.array(
                    z
                      .object({
                        _embedded: z.object({}).exactOptional(),
                        _links: z.object({}).exactOptional(),
                        conversation_uuid: ConversationIdSchema.exactOptional(),
                        from: z.object({}).exactOptional(),
                        start_end: TimestampLegEndTimeSchema.exactOptional(),
                        start_time: TimestampLegStartTimeSchema.exactOptional(),
                        state: LegStateSchema.exactOptional(),
                        to: z.object({}).exactOptional(),
                        type: ChannelTypeSchema.exactOptional(),
                        uuid: LegIdSchema,
                      })
                      .openapi({ required: ['uuid', 'name', 'href'] }),
                  ),
                })
                .openapi({
                  description:
                    'A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects',
                  required: ['legs'],
                }),
              _links: z
                .object({
                  self: z.object({ href: z.string().exactOptional() }).openapi({ required: [] }),
                })
                .openapi({ required: ['self'] }),
              count: z
                .number()
                .openapi({
                  description: 'The total number of records returned by your request.',
                  example: '100',
                }),
              page_size: PageSizeSchema,
              record_index: RecordIndexSchema,
            })
            .openapi({
              description: 'List Legs Response Payload Object',
              example: {
                _embedded: {
                  legs: [
                    {
                      _links: {
                        self: {
                          href: 'https://api.nexmo.com/v0.1/legs/2a71f8a1-b6f1-42b3-9eef-c69729e17513',
                        },
                      },
                      conversation_uuid: 'CON-511d076b-9d39-498c-baa7-b7a4bfbd6e32',
                      end_time: '',
                      from: { type: 'app' },
                      rtc: {
                        session_id: 'SES-84ebef0d-321a-47e6-8446-f4fcc5ca74b9',
                        state: 'terminated',
                      },
                      start_time: '',
                      status: 'completed',
                      to: { type: 'app' },
                      type: 'app',
                      uuid: '2a71f8a1-b6f1-42b3-9eef-c69729e17513',
                    },
                  ],
                },
                _links: { self: { href: 'https://api.nexmo.com/v0.1/legs' } },
                count: 1,
                page_size: 10,
                record_index: 0,
              },
              required: ['count', 'page_size', 'record_index', '_links', '_embedded'],
            }),
        },
      },
    },
  },
})

export const deleteLegsLegIdRoute = createRoute({
  method: 'delete',
  path: '/legs/{leg_id}',
  tags: ['leg'],
  summary: 'Delete a leg',
  operationId: 'deleteLeg',
  request: { params: z.object({ leg_id: LegIdParamsSchema }) },
  responses: { 200: SuccessEmptyJSONResponse },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['user'],
  summary: 'List users',
  description:
    'This endpoint is **DEPRECATED**. Please use [/v0.2/users](/api/conversation.v2#get-users).',
  operationId: 'getUsers',
  responses: {
    200: {
      description: 'List of users',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                href: HrefUserSchema.exactOptional(),
                id: UserIdSchema.exactOptional(),
                name: NameUserSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  deprecated: true,
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['user'],
  summary: 'Create a user',
  description: 'Note: Users must be created with an admin JWT.',
  operationId: 'createUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              display_name: DisplayNameUserSchema.exactOptional(),
              image_url: ImageUrlSchema.exactOptional(),
              name: NameUserSchema.exactOptional(),
            })
            .openapi({ description: 'Create a Member in invite state ', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create a user response',
      content: {
        'application/json': {
          schema: z
            .object({ href: HrefUserSchema.exactOptional(), id: UserIdSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}',
  tags: ['user'],
  summary: 'Retrieve a user',
  operationId: 'getUser',
  request: { params: z.object({ user_id: UserIdParamsSchema }) },
  responses: {
    200: {
      description: 'Retrieve a user',
      content: {
        'application/json': {
          schema: z
            .object({
              href: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'https://api.nexmo.com/v0.1/users/USR-63f61863-4a51-4f6b-86e1-46edebio0391',
                }),
              id: UserIdSchema.exactOptional(),
              name: NameUserSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/users/{user_id}',
  tags: ['user'],
  summary: 'Update a user',
  operationId: 'updateUser',
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              channels: ChannelSchema.exactOptional(),
              display_name: DisplayNameUserSchema.exactOptional(),
              image_url: ImageUrlSchema.exactOptional(),
              name: NameUserSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Retrieve a user',
      content: {
        'application/json': {
          schema: z
            .object({ href: HrefUserSchema.exactOptional(), id: UserIdSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}',
  tags: ['user'],
  summary: 'Delete a user',
  operationId: 'deleteUser',
  request: { params: z.object({ user_id: UserIdParamsSchema }) },
  responses: { 200: SuccessEmptyJSONResponse },
})

export const getUsersUserIdConversationsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/conversations',
  tags: ['user'],
  summary: 'List user conversations',
  operationId: 'getuserConversations',
  request: { params: z.object({ user_id: UserIdParamsSchema }) },
  responses: {
    200: {
      description: 'List user conversations',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                display_name: DisplayNameSchema.exactOptional(),
                href: HrefSchema.exactOptional(),
                id: ConversationIdSchema.exactOptional(),
                image_url: ImageUrlSchema.exactOptional(),
                member_id: MemberIdSchema.exactOptional(),
                name: NameConversationSchema.exactOptional(),
                sequence_number: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      "the id of the last event of the conversation (event's id is an incremental number",
                    example: '123',
                  }),
                state: MemberStateSchema.exactOptional(),
                timestamp: z
                  .object({ created: TimestampSchema.exactOptional() })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})
