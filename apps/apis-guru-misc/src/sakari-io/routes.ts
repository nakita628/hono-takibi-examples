import { createRoute, z } from '@hono/zod-openapi'

const AccountIdSchema = z.string().openapi('AccountId')

const EventTypeSchema = z
  .enum(['account', 'messageStatus', 'messageIncoming'])
  .openapi({ example: 'message' })
  .openapi('EventType')

const AccountEventSchema = z
  .object({ accountId: AccountIdSchema.exactOptional(), type: EventTypeSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AccountEvent')

const AccountEventPayloadSchema = z
  .object({ balance: z.float64().exactOptional() })
  .openapi({ required: [] })
  .openapi('AccountEventPayload')

const AttributeFilterSchema = z
  .object({
    comparator: z.enum(['=', '<', '<=', '>', '>=', '!=']).exactOptional(),
    name: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttributeFilter')

const CampaignSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Campaign')

const CampaignRequestSchema = z
  .object({
    filters: z
      .object({
        attributes: z.array(z.string()).exactOptional(),
        contacts: z.array(z.string()).exactOptional(),
        tags: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    template: z.string().exactOptional(),
    trigger: z
      .object({
        code: z
          .enum(['M', 'S', 'FU'])
          .exactOptional()
          .openapi({
            description:
              'Campaign type specifies how it sources contacts and what event triggers its execution  Sort order\n  * `M` - Manual\n  * `S` - Scheduled\n  * `FU` - File Upload\n',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CampaignRequest')

const CampaignResponseSchema = z
  .object({ data: CampaignSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('CampaignResponse')

const PaginatedResponseSchema = z
  .object({
    error: z
      .object({ code: z.string().exactOptional(), message: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    pagination: z
      .object({
        limit: z.int().exactOptional(),
        offset: z.int().exactOptional(),
        totalCount: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginatedResponse')

const CampaignsResponseSchema = PaginatedResponseSchema.and(
  z.object({ data: z.array(CampaignSchema).exactOptional() }).openapi({ required: [] }),
).openapi('CampaignsResponse')

const ContactIdentifiersSchema = z
  .object({
    email: z.string().exactOptional().openapi({ example: 'chris@sakari.io' }),
    firstName: z.string().exactOptional().openapi({ example: 'Chris' }),
    id: z.string().exactOptional(),
    lastName: z.string().exactOptional().openapi({ example: 'Bloggs' }),
    mobile: z
      .object({
        country: z.string().exactOptional(),
        number: z.string().exactOptional().openapi({ example: '123-456-7890' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ContactIdentifiers')

const TagSchema = z
  .object({ tag: z.string().exactOptional(), visible: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('Tag')

const ContactRequestSchema = ContactIdentifiersSchema.and(
  z
    .object({ attributes: z.object({}).exactOptional(), tags: z.array(TagSchema).exactOptional() })
    .openapi({ required: [] }),
).openapi('ContactRequest')

const UpdatedSchema = z
  .object({
    at: z.iso.datetime({ offset: true }).exactOptional(),
    by: z
      .object({
        firstName: z.string().exactOptional().openapi({ example: 'Joe' }),
        id: z.string().exactOptional(),
        lastName: z.string().exactOptional().openapi({ example: 'Bloggs' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Updated')

const ErrorSchema = z
  .object({
    code: z.string().exactOptional().openapi({ example: 'CONT-010' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Contact has requested no further communication' }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ContactSchema = ContactRequestSchema.and(
  z
    .object({
      created: UpdatedSchema.exactOptional(),
      error: ErrorSchema.exactOptional(),
      updated: UpdatedSchema.exactOptional(),
      valid: z.boolean().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Contact')

const ContactResponseSchema = z
  .object({
    data: ContactSchema.exactOptional(),
    success: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactResponse')

const ContactUploadResponseSchema = z
  .object({
    data: z
      .object({
        contacts: z
          .array(ContactSchema)
          .exactOptional()
          .openapi({ description: 'Uploaded contacts' }),
        errors: z
          .array(ContactSchema)
          .exactOptional()
          .openapi({ description: 'Contacts that failed validation' }),
        inserted: z.int().exactOptional(),
        submitted: z.int().exactOptional(),
        success: z.int().exactOptional(),
        updated: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactUploadResponse')

const ContactsResponseSchema = PaginatedResponseSchema.and(
  z.object({ data: z.array(ContactSchema).exactOptional() }).openapi({ required: [] }),
).openapi('ContactsResponse')

const MessageSchema = z
  .object({
    contact: ContactIdentifiersSchema.exactOptional(),
    conversation: z
      .object({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    created: UpdatedSchema.exactOptional(),
    error: ErrorSchema.exactOptional(),
    id: z.string().exactOptional(),
    media: z
      .array(
        z
          .object({
            filename: z.string().exactOptional(),
            type: z.string().exactOptional(),
            url: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of media objects attached to message' }),
    message: z.string().exactOptional(),
    outgoing: z.boolean().exactOptional(),
    phoneNumber: z.string().exactOptional().openapi({ example: '+1234567890' }),
    price: z.number().exactOptional(),
    read: z.boolean().exactOptional(),
    segments: z.number().exactOptional(),
    status: z.string().exactOptional(),
    template: z.string().exactOptional(),
    updated: UpdatedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Message')

const PhoneNumberSchema = z
  .object({
    active: z.boolean().exactOptional(),
    country: z.string().exactOptional(),
    number: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PhoneNumber')

const ConversationSchema = z
  .object({
    closed: z.boolean().exactOptional(),
    contact: ContactIdentifiersSchema.exactOptional(),
    created: UpdatedSchema.exactOptional(),
    id: z.string().exactOptional(),
    lastMessage: MessageSchema.exactOptional(),
    phoneNumber: PhoneNumberSchema.exactOptional(),
    unread: z.array(z.string()).exactOptional(),
    updated: UpdatedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Conversation')

const ConversationResponseSchema = z
  .object({ data: ConversationSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConversationResponse')

const ConversationsResponseSchema = PaginatedResponseSchema.and(
  z.object({ data: z.array(ConversationSchema).exactOptional() }).openapi({ required: [] }),
).openapi('ConversationsResponse')

const ErrorResponseSchema = z
  .object({
    error: z
      .object({
        code: z.string().exactOptional().openapi({ example: 'CONV-001' }),
        message: z.string().exactOptional().openapi({ example: 'Invalid conversation id' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().default(false).exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const MessageEventPayloadSchema = z
  .object({
    contact: ContactIdentifiersSchema.exactOptional(),
    error: z.string().exactOptional(),
    message: z.string().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MessageEventPayload')

const EventSchema = z
  .object({
    accountId: AccountIdSchema.exactOptional(),
    data: z.xor([AccountEventPayloadSchema, MessageEventPayloadSchema]).exactOptional(),
    eventId: z.string().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Event')

const MessageResponseSchema = z
  .object({ data: MessageSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('MessageResponse')

const MessagesResponseSchema = PaginatedResponseSchema.and(
  z.object({ data: z.array(MessageSchema).exactOptional() }).openapi({ required: [] }),
).openapi('MessagesResponse')

const SendMessagesRequestSchema = z
  .object({
    contacts: z.array(ContactRequestSchema).exactOptional(),
    conversationStrategy: z.string().exactOptional(),
    conversations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of conversation ids to send messages to' }),
    filters: z
      .object({
        attributes: z.array(z.object({})).exactOptional(),
        tags: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    media: z
      .array(z.object({ url: z.string().exactOptional() }).openapi({ required: [] }))
      .exactOptional()
      .openapi({ description: 'List of media objects to attach to message' }),
    phoneNumberFilter: z
      .object({
        group: z
          .object({ id: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    template: z.string().exactOptional(),
    type: z.enum(['SMS', 'MMS']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendMessagesRequest')

const SendMessagesResponseSchema = z
  .object({
    data: z
      .object({
        estimatedPrice: z.float64().exactOptional(),
        invalid: z.array(ContactSchema).exactOptional(),
        jobId: z.string().exactOptional(),
        messages: z.array(MessageSchema).exactOptional(),
        requested: z.int().exactOptional(),
        valid: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SendMessagesResponse')

const ShareFileResponseSchema = z
  .object({
    data: z
      .object({
        expires: z.iso.datetime({ offset: true }).exactOptional(),
        link: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ShareFileResponse')

const TemplateRequestSchema = z
  .object({
    name: z.string().exactOptional(),
    template: z
      .string()
      .exactOptional()
      .openapi({ example: 'Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes' }),
    type: z.enum(['SMS', 'Web']).exactOptional().openapi({ example: 'SMS' }),
  })
  .openapi({ required: [] })
  .openapi('TemplateRequest')

const TemplateSchema = TemplateRequestSchema.and(
  z.object({ id: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('Template')

const TemplateResponseSchema = z
  .object({ data: TemplateSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('TemplateResponse')

const TemplatesResponseSchema = PaginatedResponseSchema.and(
  z.object({ data: z.array(TemplateSchema).exactOptional() }).openapi({ required: [] }),
).openapi('TemplatesResponse')

const TokenRequestSchema = z
  .object({
    client_id: z
      .string()
      .exactOptional()
      .openapi({ example: '00000000-0000-0000-0000-00000000000' }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({ example: '00000000-0000-0000-0000-00000000000' }),
    grant_type: z.string().exactOptional().openapi({ example: 'client_credentials' }),
  })
  .openapi({ required: [] })
  .openapi('TokenRequest')

const TokenResponseSchema = z
  .object({ access_token: z.string().exactOptional(), token_type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TokenResponse')

const WebhookSchema = z
  .object({
    eventTypes: z
      .array(
        z.enum([
          'message-received',
          'message-status',
          'message-sent',
          'conversation-closed',
          'contact-created',
          'contact-updated',
          'contact-removed',
        ]),
      )
      .exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Webhook')

const WebhookResponseSchema = z
  .object({ data: WebhookSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('WebhookResponse')

const WebhooksResponseSchema = PaginatedResponseSchema.and(
  z.object({ data: z.array(WebhookSchema).exactOptional() }).openapi({ required: [] }),
).openapi('WebhooksResponse')

const AccountIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Account to apply operations to',
      in: 'path',
      name: 'accountId',
      required: true,
      schema: { type: 'string' },
    },
  })

const ContactIdFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'ID of contact',
      in: 'query',
      name: 'contactId',
      required: false,
      schema: { type: 'string' },
    },
  })

const ConversationIdFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'ID of conversation',
      in: 'query',
      name: 'conversationId',
      required: false,
      schema: { type: 'string' },
    },
  })

const EmailParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Email of contact',
      in: 'query',
      name: 'email',
      required: false,
      schema: { type: 'string' },
    },
  })

const EmailFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by email or part of',
      in: 'query',
      name: 'email',
      required: false,
      schema: { type: 'string' },
    },
  })

const FirstNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'First name of contact',
      in: 'query',
      name: 'firstName',
      required: false,
      schema: { type: 'string' },
    },
  })

const FirstNameFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by first name or part of',
      in: 'query',
      name: 'firstName',
      required: false,
      schema: { type: 'string' },
    },
  })

const LastNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Last name of contact',
      in: 'query',
      name: 'lastName',
      required: false,
      schema: { type: 'string' },
    },
  })

const LastNameFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by last name or part of',
      in: 'query',
      name: 'lastName',
      required: false,
      schema: { type: 'string' },
    },
  })

const LimitParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(1n).max(100n))
  .exactOptional()
  .openapi({
    param: {
      description: 'Maximum number of results to return',
      in: 'query',
      name: 'limit',
      required: false,
      schema: { format: 'int64', maximum: 100, minimum: 1, type: 'integer' },
    },
  })

const MobileParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Mobile of contact',
      in: 'query',
      name: 'mobile',
      required: false,
      schema: { type: 'string' },
    },
  })

const MobileFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by mobile or part of',
      in: 'query',
      name: 'mobile',
      required: false,
      schema: { type: 'string' },
    },
  })

const NameFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by name or part of',
      in: 'query',
      name: 'name',
      required: false,
      schema: { type: 'string' },
    },
  })

const OffsetParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(0n))
  .exactOptional()
  .openapi({
    param: {
      description: 'Results to skip when paginating through a result set',
      in: 'query',
      name: 'offset',
      required: false,
      schema: { format: 'int64', minimum: 0, type: 'integer' },
    },
  })

const TagsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Tag of contact',
      in: 'query',
      name: 'tags',
      required: false,
      schema: { type: 'string' },
    },
  })

const TagsFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by tag(s)',
      in: 'query',
      name: 'tags',
      required: false,
      schema: { type: 'string' },
    },
  })

const ContactRequestBody = {
  description: 'Pet object that needs to be added to the store',
  content: { 'application/json': { schema: ContactRequestSchema } },
  required: true,
}

const ContactsRequestBody = {
  description: 'List of contacts',
  content: { 'application/json': { schema: z.array(ContactRequestSchema) } },
  required: true,
}

const SakariAuthSecurityScheme = {
  flows: {
    clientCredentials: { scopes: { 'messages:send': 'Send messages' }, tokenUrl: '/oauth2/token' },
  },
  type: 'oauth2',
}

export const postOauth2TokenRoute = createRoute({
  method: 'post',
  path: '/oauth2/token',
  tags: ['authentication'],
  summary: 'Get token for accessing APIs',
  operationId: 'auth.token',
  request: { body: { content: { 'application/json': { schema: TokenRequestSchema } } } },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TokenResponseSchema } },
    },
  },
})

export const getV1AccountsAccountIdCampaignsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/campaigns',
  tags: ['campaigns'],
  summary: 'Fetch campaigns',
  operationId: 'campaigns.fetchAll',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      name: NameFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CampaignsResponseSchema } },
    },
    '4XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '5XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const postV1AccountsAccountIdCampaignsRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{accountId}/campaigns',
  tags: ['campaigns'],
  summary: 'Create campaign',
  operationId: 'campaigns.create',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    body: { content: { 'application/json': { schema: CampaignRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: CampaignResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdCampaignsCampaignIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/campaigns/{campaignId}',
  tags: ['campaigns'],
  summary: 'Fetch campaign by ID',
  operationId: 'campaigns.fetch',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      campaignId: z
        .string()
        .openapi({
          param: {
            description: 'ID of campaign to return',
            in: 'path',
            name: 'campaignId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CampaignResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const putV1AccountsAccountIdCampaignsCampaignIdRoute = createRoute({
  method: 'put',
  path: '/v1/accounts/{accountId}/campaigns/{campaignId}',
  tags: ['campaigns'],
  summary: 'Updates a campaign',
  operationId: 'campaigns.update',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      campaignId: z
        .string()
        .openapi({
          param: {
            description: 'ID of campaign',
            in: 'path',
            name: 'campaignId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CampaignResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const deleteV1AccountsAccountIdCampaignsCampaignIdRoute = createRoute({
  method: 'delete',
  path: '/v1/accounts/{accountId}/campaigns/{campaignId}',
  tags: ['campaigns'],
  summary: 'Deletes a campaign',
  operationId: 'campaigns.remove',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      campaignId: z
        .string()
        .openapi({
          param: {
            description: 'Campaign id to delete',
            in: 'path',
            name: 'campaignId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdContactsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/contacts',
  tags: ['contacts'],
  summary: 'Fetch contacts',
  operationId: 'contacts.fetchAll',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      firstName: FirstNameFilterParamsSchema,
      lastName: LastNameFilterParamsSchema,
      mobile: MobileFilterParamsSchema,
      email: EmailFilterParamsSchema,
      tags: TagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ContactsResponseSchema } },
    },
    '4XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '5XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const postV1AccountsAccountIdContactsRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{accountId}/contacts',
  tags: ['contacts'],
  summary: 'Create contact',
  operationId: 'contacts.create',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    query: z.object({
      mergeStrategy: z
        .enum(['append', 'core', 'remove'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines how existing contacts with matching mobile numbers are treated',
            in: 'query',
            name: 'mergeStrategy',
            required: false,
            schema: { enum: ['append', 'core', 'remove'], type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ContactRequestSchema },
        'text/csv': {
          schema: z
            .string()
            .openapi({
              example:
                'country,firstName,lastName,email,mobile,jobTitle,Address,City,State,ZipCode US,Joe,Bloggs,joebloggs@sakari.co,123-456-7890,mover,123 Text Street,San Francisco,CA,12345\n',
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.xor([ContactsResponseSchema, ContactUploadResponseSchema]),
        },
      },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdContactsContactIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/contacts/{contactId}',
  tags: ['contacts'],
  summary: 'Fetch contact by ID',
  operationId: 'contacts.fetch',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      contactId: z
        .string()
        .openapi({
          param: {
            description: 'ID of contact to return',
            in: 'path',
            name: 'contactId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ContactResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const putV1AccountsAccountIdContactsContactIdRoute = createRoute({
  method: 'put',
  path: '/v1/accounts/{accountId}/contacts/{contactId}',
  tags: ['contacts'],
  summary: 'Updates a contact',
  operationId: 'contacts.update',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      contactId: z
        .string()
        .openapi({
          param: {
            description: 'ID of contact',
            in: 'path',
            name: 'contactId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ContactResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const deleteV1AccountsAccountIdContactsContactIdRoute = createRoute({
  method: 'delete',
  path: '/v1/accounts/{accountId}/contacts/{contactId}',
  tags: ['contacts'],
  summary: 'Deletes a contact',
  operationId: 'contacts.remove',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      contactId: z
        .string()
        .openapi({
          param: {
            description: 'Contact id to delete',
            in: 'path',
            name: 'contactId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdConversationsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/conversations',
  tags: ['conversations'],
  summary: 'Fetch conversations',
  operationId: 'conversations.fetchAll',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    query: z.object({ offset: OffsetParamsSchema, limit: LimitParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConversationsResponseSchema } },
    },
    '4XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '5XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdConversationsConversationIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/conversations/{conversationId}',
  tags: ['conversations'],
  summary: 'Fetch conversation by ID',
  operationId: 'conversations.fetch',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      conversationId: z
        .string()
        .openapi({
          param: {
            description: 'ID of template to return',
            in: 'path',
            name: 'conversationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConversationResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const putV1AccountsAccountIdConversationsConversationIdCloseRoute = createRoute({
  method: 'put',
  path: '/v1/accounts/{accountId}/conversations/{conversationId}/close',
  tags: ['conversations'],
  summary: 'Closes a conversation',
  operationId: 'conversations.close',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      conversationId: z
        .string()
        .openapi({
          param: {
            description: 'ID of conversation',
            in: 'path',
            name: 'conversationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConversationResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdMessagesRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/messages',
  tags: ['messages'],
  summary: 'Fetch messages',
  operationId: 'messages.fetchAll',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      contactId: ContactIdFilterParamsSchema,
      conversationId: ConversationIdFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: MessagesResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const postV1AccountsAccountIdMessagesRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{accountId}/messages',
  tags: ['messages'],
  summary: 'Send Messages',
  operationId: 'messages.send',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    body: { content: { 'application/json': { schema: SendMessagesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SendMessagesResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdMessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/messages/{messageId}',
  tags: ['messages'],
  summary: 'Fetch message by id',
  description: 'Returns a single messag',
  operationId: 'messages.fetch',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'ID of message to return',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdTemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/templates',
  tags: ['templates'],
  summary: 'Fetch templates',
  operationId: 'templates.fetchAll',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      name: NameFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TemplatesResponseSchema } },
    },
    '4XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '5XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const postV1AccountsAccountIdTemplatesRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{accountId}/templates',
  tags: ['templates'],
  summary: 'Create template',
  operationId: 'templates.create',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    body: { content: { 'application/json': { schema: TemplateRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: TemplatesResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/templates/{templateId}',
  tags: ['templates'],
  summary: 'Fetch template by ID',
  operationId: 'templates.fetch',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      templateId: z
        .string()
        .openapi({
          param: {
            description: 'ID of template to return',
            in: 'path',
            name: 'templateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TemplateResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const putV1AccountsAccountIdTemplatesTemplateIdRoute = createRoute({
  method: 'put',
  path: '/v1/accounts/{accountId}/templates/{templateId}',
  tags: ['templates'],
  summary: 'Updates a template',
  operationId: 'templates.update',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      templateId: z
        .string()
        .openapi({
          param: {
            description: 'ID of template',
            in: 'path',
            name: 'templateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TemplateResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const deleteV1AccountsAccountIdTemplatesTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/v1/accounts/{accountId}/templates/{templateId}',
  tags: ['templates'],
  summary: 'Deletes a template',
  operationId: 'templates.remove',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      templateId: z
        .string()
        .openapi({
          param: {
            description: 'Template id to delete',
            in: 'path',
            name: 'templateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const getV1AccountsAccountIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{accountId}/webhooks',
  tags: ['webhooks'],
  summary: 'Fetch active webhooks',
  description:
    'When messages are acknowledge by carriers, a notification is sent to the specified URL',
  operationId: 'webhooks.fetchAll',
  request: { params: z.object({ accountId: AccountIdParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: WebhooksResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const postV1AccountsAccountIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{accountId}/webhooks',
  tags: ['webhooks'],
  summary: 'Subscribe to message events',
  description:
    'When messages are acknowledge by carriers, a notification is sent to the specified URL',
  operationId: 'webhooks.subscribe',
  request: {
    params: z.object({ accountId: AccountIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              eventTypes: z
                .array(
                  z.enum([
                    'contact-created',
                    'contact-updated',
                    'contact-removed',
                    'message-received',
                    'message-sent',
                    'message-status',
                    'conversation-started',
                    'contact-opt-out',
                    'contact-opt-in',
                    'list-opt-out',
                    'list-opt-in',
                  ]),
                )
                .exactOptional(),
              url: z
                .url()
                .exactOptional()
                .openapi({ example: 'https://myserver.com/send/callback/here' }),
            })
            .openapi({ required: ['callbackUrl'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const deleteV1AccountsAccountIdWebhooksUrlRoute = createRoute({
  method: 'delete',
  path: '/v1/accounts/{accountId}/webhooks/{url}',
  tags: ['webhooks'],
  summary: 'Unsubscribe to message events',
  description: 'Delete subscription for receiving notifications',
  operationId: 'webhooks.unsubscribe',
  request: {
    params: z.object({
      accountId: AccountIdParamsSchema,
      url: z
        .string()
        .openapi({
          param: {
            description: 'Account to apply operations to',
            in: 'path',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'successful operation' } },
  callbacks: {
    event: {
      '{$request.body#/callbackUrl}': {
        post: {
          requestBody: { content: { 'application/json': { schema: EventSchema } }, required: true },
          responses: {
            200: { description: 'Your server returns this code if it accepts the callback' },
          },
        },
      },
    },
  },
  security: [{ sakari_auth: [] }],
})

export const postV1ToolsSharefileRoute = createRoute({
  method: 'post',
  path: '/v1/tools/sharefile',
  tags: ['tools'],
  summary:
    'Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS',
  operationId: 'tools.shareFile',
  request: {
    body: {
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              media: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ShareFileResponseSchema } },
    },
    '4XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '5XX': {
      description: 'invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ sakari_auth: [] }],
})
