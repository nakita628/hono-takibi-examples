import { createRoute, z } from '@hono/zod-openapi'

const MemberSchema = z
  .object({
    id: z.number(),
    identity: z
      .object({
        avatar_uri: z.url().exactOptional(),
        badge: z.string().exactOptional(),
        profile_url: z.url().exactOptional(),
        username: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    location: z
      .object({ free_form: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    personal: z
      .object({
        about_me: z.string().exactOptional(),
        birthday: z.string().exactOptional(),
        interests: z.string().exactOptional(),
        pc_specs: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    signature: z
      .object({ parsed: z.string().exactOptional(), raw: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    stats: z
      .object({
        answered_count: z.number().exactOptional(),
        endorsements_count: z.number().exactOptional(),
        posts_count: z.number().exactOptional(),
        reputation_count: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id'] })
  .openapi('Member')

type UserType = {
  business_card?: {
    company_name?: string
    company_size?: string
    headline?: string
    industry?: string
    interest_tags?: string[]
    job_position?: string
    summary?: string
    website?: { thumbshot_uri?: string; url?: string }
  }
  community_persona?: z.infer<typeof MemberSchema>
  id: number
  profile?: { first_name?: string; last_name?: string }
  usage?: {
    available_status?: boolean
    joined_timestamp?: string
    last_activity_timestamp?: string
    online_status?: boolean
  }
}

const UserSchema: z.ZodType<UserType> = z
  .object({
    business_card: z
      .object({
        company_name: z.string().exactOptional(),
        company_size: z.string().exactOptional(),
        headline: z.string().exactOptional(),
        industry: z.string().exactOptional(),
        interest_tags: z.array(z.string()).exactOptional(),
        job_position: z.string().exactOptional(),
        summary: z.string().exactOptional(),
        website: z
          .object({ thumbshot_uri: z.url().exactOptional(), url: z.url().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    community_persona: MemberSchema.exactOptional(),
    id: z.number(),
    profile: z
      .object({ first_name: z.string().exactOptional(), last_name: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    usage: z
      .object({
        available_status: z.boolean().exactOptional(),
        joined_timestamp: z.iso.datetime({ offset: true }).exactOptional(),
        last_activity_timestamp: z.iso.datetime({ offset: true }).exactOptional(),
        online_status: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id'] })
  .openapi('User')

const MessageSchema: z.ZodType<MessageType> = z
  .lazy(() =>
    z
      .object({
        author: UserSchema.exactOptional(),
        conversation: ConversationSchema.exactOptional(),
        id: z.number(),
        last_seen: z
          .object({
            timestamp: z.iso.datetime({ offset: true }).exactOptional(),
            user: UserSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        text: z
          .object({ parsed: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        timestamp: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .openapi({ required: ['id'] }),
  )
  .openapi('Message')

type ConversationType = {
  first_message?: { author?: z.infer<typeof UserSchema>; timestamp?: string }
  id: number
  latest_message?: z.infer<typeof MessageSchema>
  user_a?: z.infer<typeof UserSchema>
  user_b?: z.infer<typeof UserSchema>
}

const GroupMessageSchema: z.ZodType<GroupMessageType> = z
  .lazy(() =>
    z
      .object({
        author: UserSchema.exactOptional(),
        group: GroupSchema.exactOptional(),
        id: z.number(),
        last_seen: z
          .object({
            timestamp: z.iso.datetime({ offset: true }).exactOptional(),
            user: UserSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        moderated: z
          .object({ deleted_status: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        text: z
          .object({ parsed: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        timestamp: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .openapi({ required: ['id'] }),
  )
  .openapi('GroupMessage')

type GroupType = {
  first_message?: { timestamp?: string }
  id: number
  latest_message?: z.infer<typeof GroupMessageSchema>
  member_count?: number
  owner?: z.infer<typeof UserSchema>
  properties?: { description?: string; name?: string; privacy?: string; slug?: string }
}

const GroupSchema: z.ZodType<GroupType> = z
  .lazy(() =>
    z
      .object({
        first_message: z
          .object({ timestamp: z.iso.datetime({ offset: true }).exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        id: z.number(),
        latest_message: GroupMessageSchema.exactOptional(),
        member_count: z.number().exactOptional(),
        owner: UserSchema.exactOptional(),
        properties: z
          .object({
            description: z.string().exactOptional(),
            name: z.string().exactOptional(),
            privacy: z.string().exactOptional(),
            slug: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .openapi({ required: ['id'] }),
  )
  .openapi('Group')

type GroupMessageType = {
  author?: z.infer<typeof UserSchema>
  group?: z.infer<typeof GroupSchema>
  id: number
  last_seen?: { timestamp?: string; user?: z.infer<typeof UserSchema> }
  moderated?: { deleted_status?: boolean }
  text?: { parsed?: string }
  timestamp?: string
}

const ConversationSchema: z.ZodType<ConversationType> = z
  .lazy(() =>
    z
      .object({
        first_message: z
          .object({
            author: UserSchema.exactOptional(),
            timestamp: z.iso.datetime({ offset: true }).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        id: z.number(),
        latest_message: MessageSchema.exactOptional(),
        user_a: UserSchema.exactOptional(),
        user_b: UserSchema.exactOptional(),
      })
      .openapi({ required: ['id'] }),
  )
  .openapi('Conversation')

type MessageType = {
  author?: z.infer<typeof UserSchema>
  conversation?: z.infer<typeof ConversationSchema>
  id: number
  last_seen?: { timestamp?: string; user?: z.infer<typeof UserSchema> }
  text?: { parsed?: string }
  timestamp?: string
}

const ApiPaginationSchema = z
  .object({
    limit: z.number().exactOptional(),
    offset: z.number().exactOptional(),
    total_records: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiPagination')

const AppSchema = z
  .object({
    about: z
      .object({
        description: z.string().exactOptional(),
        name: z.string().exactOptional(),
        website: z
          .object({ thumbshot: z.string().exactOptional(), url: z.url().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.number(),
    legal: z
      .object({ privacy_url: z.url().exactOptional(), tos_url: z.url().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id'] })
  .openapi('App')

const BubbleSchema = z
  .object({
    about: z.object({ name: z.string().exactOptional() }).exactOptional().openapi({ required: [] }),
    id: z.number(),
  })
  .openapi({ required: ['id'] })
  .openapi('Bubble')

const EndpointDeleteGroupsIDMembershipsSchema = z
  .object({ success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointDeleteGroupsIDMemberships')

const EndpointDeleteGroupsMessagesIDSchema = z
  .object({
    data: z.array(GroupMessageSchema).exactOptional(),
    status: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointDeleteGroupsMessagesID')

const EndpointDeletePositionsIDSchema = z
  .object({ success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointDeletePositionsID')

const EndpointDeleteWebhooksIDSchema = z
  .object({ success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointDeleteWebhooksID')

const EndpointGetAppsSchema = z
  .object({
    data: z.array(AppSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetApps')

const EndpointGetAppsIDSchema = z
  .object({ data: z.array(AppSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetAppsID')

const EndpointGetAudiencesSchema = z
  .object({
    data: z.array(BubbleSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetAudiences')

const EndpointGetAudiencesIDSchema = z
  .object({ data: z.array(BubbleSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetAudiencesID')

const EndpointGetAutocompletesSchema = z
  .object({
    data: z
      .object({
        conversations: z.array(z.string()).exactOptional(),
        locations: z.array(z.string()).exactOptional(),
        matches: z.array(z.string()).exactOptional(),
        people: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetAutocompletes')

const EndpointGetConversationsIDSchema = z
  .object({ data: z.array(ConversationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetConversationsID')

const EndpointGetConversationsIDMessagesSchema = z
  .object({
    data: z.array(MessageSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetConversationsIDMessages')

const EndpointGetConversationsIDStatusesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            archived_status: z.boolean().exactOptional(),
            bubbled: z
              .object({ latest_message: MessageSchema.exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            conversation: ConversationSchema.exactOptional(),
            earliest_unseen_message: MessageSchema.exactOptional(),
            new_message_count: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetConversationsIDStatuses')

const EndpointGetConversationsStatusesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            archived_status: z.boolean().exactOptional(),
            bubbled: z
              .object({ latest_message: MessageSchema.exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            conversation: ConversationSchema.exactOptional(),
            earliest_unseen_message: MessageSchema.exactOptional(),
            new_message_count: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetConversationsStatuses')

const EndpointGetGroupsSchema = z
  .object({
    data: z.array(GroupSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetGroups')

const EndpointGetGroupsIDSchema = z
  .object({ data: z.array(GroupSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetGroupsID')

const EndpointGetGroupsIDMembershipsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            group: GroupSchema.exactOptional(),
            member: UserSchema.exactOptional(),
            privileges: z
              .object({
                moderator: z.boolean().exactOptional(),
                owner: z.boolean().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetGroupsIDMemberships')

const EndpointGetGroupsIDMessagesSchema = z
  .object({
    data: z.array(GroupMessageSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetGroupsIDMessages')

const EndpointGetGroupsIDStatusesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            earliest_unseen_message: GroupMessageSchema.exactOptional(),
            group: GroupSchema.exactOptional(),
            membership_status: z.boolean().exactOptional(),
            new_message_count: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetGroupsIDStatuses')

const EndpointGetGroupsMessagesIDSchema = z
  .object({ data: z.array(GroupMessageSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetGroupsMessagesID')

const GroupMessageDataSchema = z
  .object({
    app: AppSchema.exactOptional(),
    content: z
      .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.number(),
    message: GroupMessageSchema.exactOptional(),
    owner: UserSchema.exactOptional(),
    settings: z
      .object({ privacy: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    status: z
      .object({ last_updated_timestamp: z.iso.datetime({ offset: true }).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id'] })
  .openapi('GroupMessageData')

const EndpointGetGroupsMessagesIDMetadataSchema = z
  .object({
    data: z.array(GroupMessageDataSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetGroupsMessagesIDMetadata')

const EndpointGetGroupsMessagesIDMetadataCollectionsSchema = z
  .object({ data: z.record(z.string(), z.array(z.string())).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetGroupsMessagesIDMetadataCollections')

const EndpointGetGroupsStatusesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            earliest_unseen_message: GroupMessageSchema.exactOptional(),
            group: GroupSchema.exactOptional(),
            new_message_count: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetGroupsStatuses')

const EndpointGetIndustriesSchema = z
  .object({ data: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetIndustries')

const EndpointGetMarkdownEmoticonsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            alt: z.string().exactOptional(),
            emoticon: z.string().exactOptional(),
            image: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetMarkdownEmoticons')

const EndpointGetMessagesIDSchema = z
  .object({ data: z.array(MessageSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetMessagesID')

const MessageDataSchema = z
  .object({
    app: AppSchema.exactOptional(),
    content: z
      .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.number(),
    message: MessageSchema.exactOptional(),
    owner: UserSchema.exactOptional(),
    settings: z
      .object({ privacy: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    status: z
      .object({ last_updated_timestamp: z.iso.datetime({ offset: true }).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id'] })
  .openapi('MessageData')

const EndpointGetMessagesIDMetadataSchema = z
  .object({
    data: z.array(MessageDataSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetMessagesIDMetadata')

const EndpointGetMessagesIDMetadataCollectionsSchema = z
  .object({ data: z.record(z.string(), z.array(z.string())).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetMessagesIDMetadataCollections')

const EndpointGetUsersSchema = z
  .object({
    data: z.array(UserSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetUsers')

const MeSchema = z
  .object({
    business_card: z
      .object({
        company_name: z.string().exactOptional(),
        company_size: z.string().exactOptional(),
        headline: z.string().exactOptional(),
        industry: z.string().exactOptional(),
        interest_tags: z.array(z.string()).exactOptional(),
        job_position: z.string().exactOptional(),
        summary: z.string().exactOptional(),
        website: z
          .object({ thumbshot_uri: z.url().exactOptional(), url: z.url().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    community_persona: MemberSchema.exactOptional(),
    id: z.number(),
    location: z
      .object({
        city: z.string().exactOptional(),
        country: z.number().exactOptional(),
        ip_address: z.string().exactOptional(),
        latitude: z.string().exactOptional(),
        longitude: z.string().exactOptional(),
        region: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    matching: z
      .object({
        goals: z.array(z.string()).exactOptional(),
        interest_tags: z.array(z.string()).exactOptional(),
        location_importance: z.string().exactOptional(),
        targeted_industry: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    profile: z
      .object({
        first_name: z.string().exactOptional(),
        introduction: z.string().exactOptional(),
        last_name: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    settings: z
      .object({
        email: z.string().exactOptional(),
        email_verified: z.boolean().exactOptional(),
        notifications: z.string().exactOptional(),
        timezone: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    usage: z
      .object({
        available_status: z.boolean().exactOptional(),
        joined_timestamp: z.iso.datetime({ offset: true }).exactOptional(),
        last_activity_timestamp: z.iso.datetime({ offset: true }).exactOptional(),
        online_status: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id'] })
  .openapi('Me')

const EndpointGetUsers_2Schema = z
  .object({ data: MeSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetUsers_2')

const EndpointGetUsersIDSchema = z
  .object({ data: z.array(UserSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetUsersID')

const EndpointGetUsersIDGroupsSchema = z
  .object({ data: z.array(GroupSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetUsersIDGroups')

const EndpointGetUsersIDGroupsMessagesSchema = z
  .object({
    data: z.array(GroupMessageSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetUsersIDGroupsMessages')

const UserDataSchema = z
  .object({
    app: AppSchema.exactOptional(),
    content: z
      .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.number(),
    owner: UserSchema.exactOptional(),
    settings: z
      .object({ privacy: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    status: z
      .object({ last_updated_timestamp: z.iso.datetime({ offset: true }).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    user: UserSchema.exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('UserData')

const EndpointGetUsersIDMetadataSchema = z
  .object({
    data: z.array(UserDataSchema).exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetUsersIDMetadata')

const EndpointGetUsersIDMetadataCollectionsSchema = z
  .object({ data: z.record(z.string(), z.array(z.string())).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetUsersIDMetadataCollections')

const PositionSchema = z
  .object({
    app: AppSchema.exactOptional(),
    category: z.string().exactOptional(),
    id: z.number(),
    organization: z
      .object({
        industry: z.string().exactOptional(),
        name: z.string().exactOptional(),
        size: z.string().exactOptional(),
        ticker: z.string().exactOptional(),
        type: z.string().exactOptional(),
        url: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    role: z
      .object({
        end_date: z.iso.date().exactOptional(),
        start_date: z.iso.date().exactOptional(),
        summary: z.string().exactOptional(),
        title: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    user: UserSchema.exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('Position')

const EndpointGetUsersIDPositionsSchema = z
  .object({ data: z.array(PositionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetUsersIDPositions')

const EndpointGetUsersIDSynergiesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            additional: z
              .object({
                metadata_count: z.number().exactOptional(),
                positions_count: z.number().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            conversation: ConversationSchema.exactOptional(),
            match: z
              .object({
                algorithmic_match: z.boolean().exactOptional(),
                complementary_goals: z.array(z.string()).exactOptional(),
                distance_away: z
                  .object({ miles: z.float32().exactOptional() })
                  .exactOptional()
                  .openapi({ required: [] }),
                industry: z
                  .object({
                    complementary: z.boolean().exactOptional(),
                    mutual_match: z.boolean().exactOptional(),
                    similar: z.boolean().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                mutual_connections: z
                  .object({ count: z.number().exactOptional() })
                  .exactOptional()
                  .openapi({ required: [] }),
                recommendation_strength: z.float32().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            meet: z
              .object({
                payment: z
                  .object({
                    paypal: z
                      .object({ url: z.url().exactOptional() })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                price_usd: z.float32().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            relationship: z
              .object({
                existing_bubbled_conversation: z.boolean().exactOptional(),
                existing_conversation: z.boolean().exactOptional(),
                muted: z.boolean().exactOptional(),
                skipped: z.boolean().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetUsersIDSynergies')

const EndpointGetUsersNearbySchema = z
  .object({
    data: z
      .array(
        z
          .object({
            distance_away: z
              .object({ miles: z.float32().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            user: UserSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointGetUsersNearby')

const WebhookSchema = z
  .object({
    app: AppSchema.exactOptional(),
    event: z
      .object({ action: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.number(),
    name: z.string().exactOptional(),
    object: z
      .object({ id: z.number().exactOptional(), type: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    uri: z.url().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('Webhook')

const EndpointGetWebhooksSchema = z
  .object({ data: z.array(WebhookSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointGetWebhooks')

const EndpointPatchConversationsIDStatusesSchema = z
  .object({
    data: z
      .object({
        archived_status: z.boolean().exactOptional(),
        conversation: ConversationSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPatchConversationsIDStatuses')

const EndpointPatchGroupsIDSchema = z
  .object({ data: GroupSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointPatchGroupsID')

const EndpointPatchGroupsIDMembershipsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            group: GroupSchema.exactOptional(),
            member: UserSchema.exactOptional(),
            privileges: z
              .object({ moderator: z.boolean().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPatchGroupsIDMemberships')

const EndpointPatchPositionsIDSchema = z
  .object({ data: PositionSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointPatchPositionsID')

const EndpointPatchUsersSchema = z
  .object({ data: MeSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointPatchUsers')

const EndpointPatchUsersIDSynergiesSchema = z
  .object({
    data: z
      .object({
        relationship: z
          .object({ muted: z.boolean().exactOptional(), skipped: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPatchUsersIDSynergies')

const EndpointPostAudiencesIDMembershipsSchema = z
  .object({
    data: z
      .object({
        audience: z
          .object({ id: z.number().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        member: UserSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostAudiencesIDMemberships')

const EndpointPostConversationsIDMessagesSchema = z
  .object({ data: MessageSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointPostConversationsIDMessages')

const EndpointPostConversationsIDSchedulesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            author_count: z.number().exactOptional(),
            conversation_count: z.number().exactOptional(),
            conversation_id: z.number().exactOptional(),
            date: z.iso.date().exactOptional(),
            first_message: MessageSchema.exactOptional(),
            last_message: MessageSchema.exactOptional(),
            message_count: z.number().exactOptional(),
            my_message_count: z.number().exactOptional(),
            navigation: z
              .object({
                earliest_date: z.iso.date().exactOptional(),
                next_date: z.iso.date().exactOptional(),
                previous_date: z.iso.date().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostConversationsIDSchedules')

const EndpointPostConversationsIDSearchesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            message: MessageSchema.exactOptional(),
            relevance: z
              .object({ score: z.float32().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostConversationsIDSearches')

const EndpointPostConversationsSchedulesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            author_count: z.number().exactOptional(),
            conversation_count: z.number().exactOptional(),
            conversation_id: z.number().exactOptional(),
            date: z.iso.date().exactOptional(),
            first_message: MessageSchema.exactOptional(),
            last_message: MessageSchema.exactOptional(),
            message_count: z.number().exactOptional(),
            my_message_count: z.number().exactOptional(),
            navigation: z
              .object({
                earliest_date: z.iso.date().exactOptional(),
                next_date: z.iso.date().exactOptional(),
                previous_date: z.iso.date().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostConversationsSchedules')

const EndpointPostConversationsSearchesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            message: MessageSchema.exactOptional(),
            relevance: z
              .object({ score: z.float32().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostConversationsSearches')

const EndpointPostGroupsSchema = z
  .object({ data: GroupSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointPostGroups')

const EndpointPostGroupsIDMembershipsSchema = z
  .object({
    data: z
      .object({ group: GroupSchema.exactOptional(), member: UserSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostGroupsIDMemberships')

const EndpointPostGroupsIDMessagesSchema = z
  .object({
    data: z.array(GroupMessageSchema).exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostGroupsIDMessages')

const EndpointPostGroupsIDSchedulesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            author_count: z.number().exactOptional(),
            date: z.iso.date().exactOptional(),
            first_message: GroupMessageSchema.exactOptional(),
            group_count: z.number().exactOptional(),
            group_id: z.number().exactOptional(),
            last_message: GroupMessageSchema.exactOptional(),
            message_count: z.number().exactOptional(),
            my_message_count: z.number().exactOptional(),
            navigation: z
              .object({
                earliest_date: z.iso.date().exactOptional(),
                next_date: z.iso.date().exactOptional(),
                previous_date: z.iso.date().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostGroupsIDSchedules')

const EndpointPostGroupsMessagesIDMetadataSchema = z
  .object({
    data: z.record(z.string(), z.array(z.string())).exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostGroupsMessagesIDMetadata')

const EndpointPostGroupsMessagesMetadataFiltersSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            matched_metadata: z.record(z.string(), z.array(z.string())).exactOptional(),
            message: GroupMessageSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostGroupsMessagesMetadataFilters')

const EndpointPostGroupsSchedulesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            author_count: z.number().exactOptional(),
            date: z.iso.date().exactOptional(),
            first_message: GroupMessageSchema.exactOptional(),
            group_count: z.number().exactOptional(),
            group_id: z.number().exactOptional(),
            last_message: GroupMessageSchema.exactOptional(),
            message_count: z.number().exactOptional(),
            my_message_count: z.number().exactOptional(),
            navigation: z
              .object({
                earliest_date: z.iso.date().exactOptional(),
                next_date: z.iso.date().exactOptional(),
                previous_date: z.iso.date().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostGroupsSchedules')

const EndpointPostMarkdownSchema = z
  .object({
    data: z
      .object({ parsed: z.string().exactOptional(), raw: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostMarkdown')

const EndpointPostMessagesIDMetadataSchema = z
  .object({
    data: z.record(z.string(), z.array(z.string())).exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostMessagesIDMetadata')

const EndpointPostMessagesMetadataFiltersSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            matched_metadata: z.record(z.string(), z.array(z.string())).exactOptional(),
            message: MessageSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostMessagesMetadataFilters')

const EndpointPostPositionsSchema = z
  .object({ data: PositionSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointPostPositions')

const EndpointPostUsersIDMessagesSchema = z
  .object({ data: MessageSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointPostUsersIDMessages')

const EndpointPostUsersIDMetadataSchema = z
  .object({
    data: z.record(z.string(), z.array(z.string())).exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostUsersIDMetadata')

const EndpointPostUsersInvitesSchema = z
  .object({
    data: z
      .object({
        discovered: z
          .object({ users: z.array(UserSchema).exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        emailed: z
          .object({ emails: z.array(z.string()).exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        existing: z
          .object({ conversations: z.array(UserSchema).exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        invalid: z
          .object({ emails: z.array(z.string()).exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostUsersInvites')

const EndpointPostUsersMetadataFiltersSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            matched_metadata: z.record(z.string(), z.array(z.string())).exactOptional(),
            user: UserSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostUsersMetadataFilters')

const EndpointPostUsersSearchesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            relevance: z
              .object({ score: z.float32().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            user: UserSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    pagination: ApiPaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostUsersSearches')

const EndpointPostWebhooksSchema = z
  .object({ data: WebhookSchema.exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointPostWebhooks')

const PostConversationsSchedulesRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          date: z.string().exactOptional(),
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
            .default(50)
            .exactOptional(),
          offset: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0)
            .exactOptional(),
          roll_up: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .default(false)
            .exactOptional(),
          sort: z.enum(['asc', 'desc']).default('desc').exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const PostConversationsSearchesRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          date: z.string().exactOptional(),
          gt_message_id: z
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
            .default(50)
            .exactOptional(),
          offset: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0)
            .exactOptional(),
          query: z.string(),
        })
        .openapi({ required: ['query'] }),
    },
  },
  required: true,
}

const PostGroupsMessagesMetadataFiltersRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
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
            .default(50)
            .exactOptional(),
          metadata_0_key: z.string().exactOptional(),
          'metadata_0_values[]': z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional(),
          metadata_1_key: z.string().exactOptional(),
          'metadata_1_values[]': z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional(),
          metadata_2_key: z.string().exactOptional(),
          'metadata_2_values[]': z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional(),
          offset: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0)
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const PostGroupsMessagesIdMetadataRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          metadata_0_key: z.string().exactOptional(),
          metadata_0_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
          'metadata_0_values[]': z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional(),
          metadata_1_key: z.string().exactOptional(),
          metadata_1_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
          'metadata_1_values[]': z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional(),
          metadata_2_key: z.string().exactOptional(),
          metadata_2_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
          'metadata_2_values[]': z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const PostPositionsRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          category: z.enum(['Experience', 'Education', 'Awards', 'Affiliations', 'Portfolio']),
          end_date: z.string().exactOptional(),
          organization: z.string(),
          organization_size: z
            .enum([
              'Self-employed',
              '2 - 9 Employees',
              '10 - 49 Employees',
              '50 - 99 Employees',
              '100 - 499 Employees',
              '500 - 999 Employees',
              '1000 - 4999 Employees',
              '5000+ Employees',
              "Don't Know",
            ])
            .exactOptional(),
          position: z
            .enum([
              'Executive Management (C-level)',
              'VP-level Executive',
              'Manager / Director / Supervisor',
              'Systems Development',
              'Software Development',
              'Web Developer',
              'IT Consultant',
              'Technical Support',
              'Sales',
              'Other technology related',
              'Other non-technology related',
              'Student',
              'Retired',
            ])
            .exactOptional(),
          role: z.string(),
          start_date: z.string(),
          summary: z.string().exactOptional(),
          url: z.string().exactOptional(),
        })
        .openapi({ required: ['category', 'role', 'organization', 'start_date'] }),
    },
  },
  required: true,
}

const ExplicitFlowSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://www.daniweb.com/connect/oauth/auth',
      scopes: {
        basic: '*Originally missing*',
        conversations_read: 'Access your DaniWeb conversations',
        conversations_write: 'Manage your DaniWeb conversations',
        groups_read: 'Access your DaniWeb groups',
        groups_write: 'Manage your DaniWeb groups',
        profile_read: 'Access your DaniWeb user profile',
        profile_write: 'Manage your DaniWeb user profile',
      },
      tokenUrl: 'https://www.daniweb.com/connect/oauth/access_token',
    },
  },
  type: 'oauth2',
}

const ImplicitFlowSecurityScheme = {
  flows: {
    implicit: {
      authorizationUrl: 'https://www.daniweb.com/connect/oauth/auth',
      scopes: {
        basic: '*Originally missing*',
        conversations_read: 'Access your DaniWeb conversations',
        conversations_write: 'Manage your DaniWeb conversations',
        groups_read: 'Access your DaniWeb groups',
        groups_write: 'Manage your DaniWeb groups',
        profile_read: 'Access your DaniWeb user profile',
        profile_write: 'Manage your DaniWeb user profile',
      },
    },
  },
  type: 'oauth2',
}

export const getAppsRoute = createRoute({
  method: 'get',
  path: '/apps',
  tags: ['apps'],
  description: 'Fetch all Daniapps that are currently in production mode.',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetAppsSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getAppsIDRoute = createRoute({
  method: 'get',
  path: '/apps/{ID}',
  tags: ['apps'],
  description: 'Fetch an array of Daniapps that are currently in production mode.',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetAppsIDSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getAudiencesRoute = createRoute({
  method: 'get',
  path: '/audiences',
  tags: ['audiences'],
  description:
    "Fetch all Daniapp audience segments that comprise the current access token's bubble.",
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetAudiencesSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getAudiencesIDRoute = createRoute({
  method: 'get',
  path: '/audiences/{ID}',
  tags: ['audiences'],
  description:
    "Fetch an array of Daniapp audience segments that comprise the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetAudiencesIDSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const postAudiencesIDMembershipsRoute = createRoute({
  method: 'post',
  path: '/audiences/{ID}/memberships',
  tags: ['audiences'],
  description:
    "Create a membership record for the OAuth'ed end-user based on the current audience segment/bubble combination.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostAudiencesIDMembershipsSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getAutocompletesRoute = createRoute({
  method: 'get',
  path: '/autocompletes',
  tags: ['autocompletes'],
  description:
    "Retrieve an array of names and locations, filtered by category, that begin with the query string passed in. Ideally used for search autocomplete dropdowns, as the search functionality filters against name and location. The four potential categories are: `conversations` for names of users you are in existing conversations with; `matches` for names of users you have previously skipped over; `people` for names of all other users; `locations` for locations of users. Only users and their locations who exist with the current access token's bubble are considered.",
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetAutocompletesSchema } },
    },
  },
  security: [{ explicit_flow: ['profile_read'] }, { implicit_flow: ['profile_read'] }],
})

export const postConversationsSchedulesRoute = createRoute({
  method: 'post',
  path: '/conversations/schedules',
  tags: ['conversations'],
  description:
    "Paginated report of information about messages contributed by conversation and date. Only conversations that exist within the current access token's bubble are considered in the calculations. Optionally roll up all conversations to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages.",
  request: { body: PostConversationsSchedulesRequestBody },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostConversationsSchedulesSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const postConversationsSearchesRoute = createRoute({
  method: 'post',
  path: '/conversations/searches',
  tags: ['conversations'],
  description:
    'Fetch messages authored from within the current bubble that match a query string passed in as a search parameter along with their relevancy score.',
  request: { body: PostConversationsSearchesRequestBody },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostConversationsSearchesSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const getConversationsStatusesRoute = createRoute({
  method: 'get',
  path: '/conversations/statuses',
  tags: ['conversations'],
  description:
    "Retrieve conversations that you are participating in with users who exists within the same bubble, along with your current relationship with the conversations. The user_a / user_b properties of the conversation are populated with as much data as is available if the user is not you. If the user is you, only the id field is populated. There is a separate status endpoint to retrieve relationship information for individual conversations. Optionally filter: 'new' to only show conversations with messages you haven't yet seen; 'introductions' to only show conversations where users have introduced themselves to you but nothing more; 'unreplied' to only show conversations where you have introduced yourself to other users but nothing more; 'notifications' to show all conversations where the other user was the last person to message. Optionally only show conversations engaging within the existing access token's bubble. This report is limited to your ~500-1000 most recently active conversations you've engaged in within current the access token's bubble.",
  request: {
    query: z.object({
      filter: z
        .enum(['new', 'introductions', 'unreplied', 'notifications'])
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'filter',
            required: false,
            schema: {
              enum: ['new', 'introductions', 'unreplied', 'notifications'],
              type: 'string',
            },
          },
        }),
      include_archived: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'include_archived',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      bubbled: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bubbled',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetConversationsStatusesSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const getConversationsIDRoute = createRoute({
  method: 'get',
  path: '/conversations/{ID}',
  tags: ['conversations'],
  description:
    "Fetch an array of conversations. You can only retrieve conversations with users who exist within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetConversationsIDSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const getConversationsIDMessagesRoute = createRoute({
  method: 'get',
  path: '/conversations/{ID}/messages',
  tags: ['conversations'],
  description:
    "Retrieve the last {limit} messages in the conversation, provided the conversations exist within the current access token's bubble. If a timeout is 0 or greater, the batch is sorted oldest first. Otherwise, if timeout is a negative number, the transcript is paginated and sorted newest first. Specify a timeout for long polling (which delays the server sending back results for up to n seconds or until results are available, whichever comes first), or default to 0 for immediate results. Optionally record your status as online along with sharing the latest message you've seen with the other conversation participant. Optionally specify a gt_message_id to retrieve only messages with an ID greater than that specified (such as greater than the latest message ID received in the last poll). Optionally only poll for messages authored by the other person in the conversation, and echo messages authored by you when sending, for a perceived increase in performance. Optionally only retrieve messages that were posted from within the current access token's bubble. Optionally specify a date formatted as YYYY-MM-DD to retrieve a transcript of messages from a single day. When record_seen is set to true, the new message count for the conversation is reset to zero.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      gt_message_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'gt_message_id',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      exclude_self: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'exclude_self',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bubbled: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bubbled',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      record_seen: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'record_seen',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      timeout: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'timeout',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetConversationsIDMessagesSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const postConversationsIDMessagesRoute = createRoute({
  method: 'post',
  path: '/conversations/{ID}/messages',
  tags: ['conversations'],
  description:
    "Post a message to a conversation that is with a user who exists within the current access token's bubble. Optionally specify whether emoticons should be parsed into smiley images. Optionally specify whether the message should be bubbled within the app. Additionally, optionally attach a single metadata key/value pair to the message upon submission.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              bubbled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              metadata_0_key: z.string().exactOptional(),
              metadata_0_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_0_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              metadata_1_key: z.string().exactOptional(),
              metadata_1_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_1_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              metadata_2_key: z.string().exactOptional(),
              metadata_2_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_2_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              text_emoticons: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              text_raw: z.string(),
            })
            .openapi({ required: ['text_raw'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostConversationsIDMessagesSchema } },
    },
  },
  security: [
    { explicit_flow: ['conversations_read', 'conversations_write'] },
    { implicit_flow: ['conversations_read', 'conversations_write'] },
  ],
})

export const postConversationsIDSchedulesRoute = createRoute({
  method: 'post',
  path: '/conversations/{ID}/schedules',
  tags: ['conversations'],
  description:
    "Paginated report of information about messages contributed by conversation and date. Only conversations that exist within the current access token's bubble are considered in the calculations. Optionally roll up all conversations to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages within the conversation(s).",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
    body: PostConversationsSchedulesRequestBody,
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostConversationsIDSchedulesSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const postConversationsIDSearchesRoute = createRoute({
  method: 'post',
  path: '/conversations/{ID}/searches',
  tags: ['conversations'],
  description:
    'Fetch messages authored from within specified conversations that match a query string passed in as a search parameter along with their relevancy score.',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
    body: PostConversationsSearchesRequestBody,
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostConversationsIDSearchesSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const getConversationsIDStatusesRoute = createRoute({
  method: 'get',
  path: '/conversations/{ID}/statuses',
  tags: ['conversations'],
  description:
    "Status information about your current relationship with one or more conversations you participating in, provided the conversations exist within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetConversationsIDStatusesSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const patchConversationsIDStatusesRoute = createRoute({
  method: 'patch',
  path: '/conversations/{ID}/statuses',
  tags: ['conversations'],
  description:
    'Archive or unarchive a conversation that is with a user who exists within the same bubble.',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              archived_status: z.preprocess(
                ((read) => (val: unknown) => {
                  const result = read.safeParse(val)
                  return result.success ? result.data : val
                })(z.stringbool()),
                z.boolean(),
              ),
            })
            .openapi({ required: ['archived_status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPatchConversationsIDStatusesSchema } },
    },
  },
  security: [
    { explicit_flow: ['conversations_read', 'conversations_write'] },
    { implicit_flow: ['conversations_read', 'conversations_write'] },
  ],
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['groups'],
  description:
    "Fetch an array of all groups that were created by users existing within the current access token's bubble. The groups must be either Public or you must be a member of them. Unlisted and Private groups that you are not a member of are not listed.",
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetGroupsSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  tags: ['groups'],
  description:
    "Create a new group for other members to join. Any user who is using an access token whose bubble you exist in can join your group provided it is not a private group. Private groups can only be joined by members who know its passphrase. Unlisted groups can be joined by anybody as long as they know the Group ID, but they are not referenced anywhere to non-members. Public groups can be joined by anybody, are discoverable, and anyone can see the public groups a user is a member of, provided the group owner exists in their access token's bubble. Groups each have their own discussions, transcripts, schedules, and ability to list and search their members.",
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              description: z.string(),
              name: z.string(),
              passphrase: z.string().exactOptional(),
              privacy: z.enum(['Public', 'Unlisted', 'Private']),
              slug: z.string(),
            })
            .openapi({ required: ['name', 'slug', 'description', 'privacy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostGroupsSchema } },
    },
  },
  security: [
    { explicit_flow: ['groups_read', 'groups_write'] },
    { implicit_flow: ['groups_read', 'groups_write'] },
  ],
})

export const postGroupsMessagesMetadataFiltersRoute = createRoute({
  method: 'post',
  path: '/groups/messages/metadata/filters',
  tags: ['groups'],
  description:
    'Paginated listing of messages filtered by arbitrary metadata criteria. Messages must match on all key/value pairs passed in. Messages may only match on one value of an array passed in. However, messages are sorted based on how many distinct values they match on (most matches first).',
  request: { body: PostGroupsMessagesMetadataFiltersRequestBody },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostGroupsMessagesMetadataFiltersSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getGroupsMessagesIDRoute = createRoute({
  method: 'get',
  path: '/groups/messages/{ID}',
  tags: ['groups'],
  description:
    "Fetch an array of group messages. You can only retrieve messages authored by you or by users existing within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetGroupsMessagesIDSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const deleteGroupsMessagesIDRoute = createRoute({
  method: 'delete',
  path: '/groups/messages/{ID}',
  tags: ['groups'],
  description:
    'Delete an array of group messages. You must be the owner or moderator of the group.',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointDeleteGroupsMessagesIDSchema } },
    },
  },
  security: [
    { explicit_flow: ['groups_read', 'groups_write'] },
    { implicit_flow: ['groups_read', 'groups_write'] },
  ],
})

export const getGroupsMessagesIDMetadataRoute = createRoute({
  method: 'get',
  path: '/groups/messages/{ID}/metadata',
  tags: ['groups'],
  description:
    "Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who created the group exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetGroupsMessagesIDMetadataSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const postGroupsMessagesIDMetadataRoute = createRoute({
  method: 'post',
  path: '/groups/messages/{ID}/metadata',
  tags: ['groups'],
  description:
    "Attach one-to-many key/value pairs of metadata to a group message, so long as the user who authored the message exists within the current access token's bubble and you are a member of their group. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by anyone using an access token which grants them access to the user who authored the message and who is also a member of the group the message belongs to; Bubbled metadata by anyone using an access token existing within the current bubble who is also a member of the group the message belongs to; User metadata by you, so long as you are using an access token which grants you access to the user who authored the message and you remain a member of the group; Private metadata by you, so long as you are using an access token existing within the current bubble and you remain a member of the group.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: PostGroupsMessagesIdMetadataRequestBody,
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostGroupsMessagesIDMetadataSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const getGroupsMessagesIDMetadataCollectionsRoute = createRoute({
  method: 'get',
  path: '/groups/messages/{ID}/metadata/collections',
  tags: ['groups'],
  description:
    "Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who created the group exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. Metadata will be grouped by key.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: {
        'application/json': { schema: EndpointGetGroupsMessagesIDMetadataCollectionsSchema },
      },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const postGroupsSchedulesRoute = createRoute({
  method: 'post',
  path: '/groups/schedules',
  tags: ['groups'],
  description:
    "Paginated report of information about messages contributed by group and date. Only groups you're a member of and group messages authored by users the current access token has access to are considered in the calculations. Optionally roll up all groups to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages.",
  request: { body: PostConversationsSchedulesRequestBody },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostGroupsSchedulesSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const getGroupsStatusesRoute = createRoute({
  method: 'get',
  path: '/groups/statuses',
  tags: ['groups'],
  description:
    "Retrieve groups that were created by users within the current access token's bubble, along with your current relationship with the groups. The groups must be either Public or you must be a member of them. Unlisted and Private groups that you are not a member of are not listed. Optionally only retrieve groups that you are a member of.",
  request: {
    query: z.object({
      existing_membership: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'existing_membership',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetGroupsStatusesSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const getGroupsIDRoute = createRoute({
  method: 'get',
  path: '/groups/{ID}',
  tags: ['groups'],
  description:
    "Fetch an array of groups. You can only retrieve groups created by users existing within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetGroupsIDSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const patchGroupsIDRoute = createRoute({
  method: 'patch',
  path: '/groups/{ID}',
  tags: ['groups'],
  description: 'Modify a group you previously created.',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              description: z.string().exactOptional(),
              name: z.string().exactOptional(),
              passphrase: z.string().exactOptional(),
              privacy: z.enum(['Public', 'Unlisted', 'Private']).exactOptional(),
              slug: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPatchGroupsIDSchema } },
    },
  },
  security: [
    { explicit_flow: ['groups_read', 'groups_write'] },
    { implicit_flow: ['groups_read', 'groups_write'] },
  ],
})

export const getGroupsIDMembershipsRoute = createRoute({
  method: 'get',
  path: '/groups/{ID}/memberships',
  tags: ['groups'],
  description:
    "Fetch an array of users who are members of specific groups that you are also a member of. You can only retrieve users existing within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      moderators_only: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'moderators_only',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetGroupsIDMembershipsSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const postGroupsIDMembershipsRoute = createRoute({
  method: 'post',
  path: '/groups/{ID}/memberships',
  tags: ['groups'],
  description:
    "Join a group that was created by a user who exists within the current access token's bubble, or join other users into a group that you created. If you are the group owner, you can pass in a user_id to create membership records for a user you are in a conversation with. The user must exist within the current access token's bubble. If the group is private, you must successfully pass in its passphrase in order to join. You can obtain the passphrase from the group's owner.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              passphrase: z.string().exactOptional(),
              user_id: z
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
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostGroupsIDMembershipsSchema } },
    },
  },
  security: [
    { explicit_flow: ['groups_read', 'groups_write'] },
    { implicit_flow: ['groups_read', 'groups_write'] },
  ],
})

export const deleteGroupsIDMembershipsRoute = createRoute({
  method: 'delete',
  path: '/groups/{ID}/memberships',
  tags: ['groups'],
  description:
    "Leave a group that you are a member of and that was created by a user who exists within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointDeleteGroupsIDMembershipsSchema } },
    },
  },
  security: [
    { explicit_flow: ['groups_read', 'groups_write'] },
    { implicit_flow: ['groups_read', 'groups_write'] },
  ],
})

export const patchGroupsIDMembershipsRoute = createRoute({
  method: 'patch',
  path: '/groups/{ID}/memberships',
  tags: ['groups'],
  description:
    "Promote or demote a member's privileges within a group that you created. The user must exist within the current access token's bubble and be an existing member of the group.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              moderator: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              user_id: z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32(),
              ),
            })
            .openapi({ required: ['user_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPatchGroupsIDMembershipsSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const getGroupsIDMessagesRoute = createRoute({
  method: 'get',
  path: '/groups/{ID}/messages',
  tags: ['groups'],
  description:
    "Retrieve the last {limit} messages in the group, for messages authored by users within the current access token's bubble. If a timeout is 0 or greater, the batch is sorted oldest first. Otherwise, if timeout is a negative number, the transcript is paginated and sorted newest first. Specify a timeout for long polling (which delays the server sending back results for up to n seconds or until results are available, whichever comes first), or default to 0 for immediate results. Optionally record your status as online along with sharing the latest message you've seen with other group members. Optionally specify a gt_message_id to retrieve only messages with an ID greater than that specified (such as greater than the latest message ID received in the last poll). Optionally only poll for messages authored by other members of the group, and echo messages authored by you when sending, for a perceived increase in performance. Optionally only retrieve messages that were posted from within the current access token's bubble. Optionally specify a date formatted as YYYY-MM-DD to retrieve a transcript of messages from a single day. When record_seen is set to true, the new message count for the group is reset to zero.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      gt_message_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'gt_message_id',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      exclude_self: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'exclude_self',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      include_deleted: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'include_deleted',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bubbled: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bubbled',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      record_seen: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'record_seen',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      timeout: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'timeout',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetGroupsIDMessagesSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const postGroupsIDMessagesRoute = createRoute({
  method: 'post',
  path: '/groups/{ID}/messages',
  tags: ['groups'],
  description:
    "Post a message to a group that you are a member of and that was created by a user who exists within the current access token's bubble. Optionally specify whether emoticons should be parsed into smiley images. Additionally, optionally attach a single metadata key/value pair to the group message upon submission.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              metadata_0_key: z.string().exactOptional(),
              metadata_0_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_0_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              metadata_1_key: z.string().exactOptional(),
              metadata_1_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_1_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              metadata_2_key: z.string().exactOptional(),
              metadata_2_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_2_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              text_emoticons: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              text_raw: z.string(),
            })
            .openapi({ required: ['text_raw'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostGroupsIDMessagesSchema } },
    },
  },
  security: [
    { explicit_flow: ['groups_read', 'groups_write'] },
    { implicit_flow: ['groups_read', 'groups_write'] },
  ],
})

export const postGroupsIDSchedulesRoute = createRoute({
  method: 'post',
  path: '/groups/{ID}/schedules',
  tags: ['groups'],
  description:
    "Paginated report of information about group messages contributed by conversation and date. Only groups you're a member of and group messages authored by users existing within the current access token's bubble are considered in the calculations. Optionally roll up all groups to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages within the group discussion(s).",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
    body: PostConversationsSchedulesRequestBody,
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostGroupsIDSchedulesSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const getGroupsIDStatusesRoute = createRoute({
  method: 'get',
  path: '/groups/{ID}/statuses',
  tags: ['groups'],
  description:
    "Status information about your current relationship with one or more groups you are a member of, provided the users who created the groups exist within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetGroupsIDStatusesSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const getIndustriesRoute = createRoute({
  method: 'get',
  path: '/industries',
  tags: ['industries'],
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetIndustriesSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const postMarkdownRoute = createRoute({
  method: 'post',
  path: '/markdown',
  tags: ['markdown'],
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              text_emoticons: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              text_raw: z.string(),
            })
            .openapi({ required: ['text_raw'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostMarkdownSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getMarkdownEmoticonsRoute = createRoute({
  method: 'get',
  path: '/markdown/emoticons',
  tags: ['markdown'],
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetMarkdownEmoticonsSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const postMessagesMetadataFiltersRoute = createRoute({
  method: 'post',
  path: '/messages/metadata/filters',
  tags: ['messages'],
  description:
    'Paginated listing of messages filtered by arbitrary metadata criteria. Messages must match on all key/value pairs passed in. Messages may only match on one value of an array passed in. However, messages are sorted based on how many distinct values they match on (most matches first).',
  request: { body: PostGroupsMessagesMetadataFiltersRequestBody },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostMessagesMetadataFiltersSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getMessagesIDRoute = createRoute({
  method: 'get',
  path: '/messages/{ID}',
  tags: ['messages'],
  description:
    "Fetch an array of messages. You can only retrieve messages authored by you or by users who exist within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetMessagesIDSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const getMessagesIDMetadataRoute = createRoute({
  method: 'get',
  path: '/messages/{ID}/metadata',
  tags: ['messages'],
  description:
    "Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who authored the message exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetMessagesIDMetadataSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const postMessagesIDMetadataRoute = createRoute({
  method: 'post',
  path: '/messages/{ID}/metadata',
  tags: ['messages'],
  description:
    "Attach one-to-many key/value pairs of metadata to a message, so long as the user who authored the message exists within the current access token's bubble. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by you or the other user in the message's conversation, using an access token which grants you access to the user who authored the message, if it wasn't you; Bubbled metadata by you or the other user in the message's conversation, using an access token existing within the current bubble; User metadata by you, so long as you are using an access token which grants you access to the user who authored the message, if it wasn't you; Private metadata by you, so long as you are using an access token existing within the current bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: PostGroupsMessagesIdMetadataRequestBody,
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostMessagesIDMetadataSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const getMessagesIDMetadataCollectionsRoute = createRoute({
  method: 'get',
  path: '/messages/{ID}/metadata/collections',
  tags: ['messages'],
  description:
    "Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who authored the message exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. Metadata will be grouped by key.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetMessagesIDMetadataCollectionsSchema } },
    },
  },
  security: [{ explicit_flow: ['conversations_read'] }, { implicit_flow: ['conversations_read'] }],
})

export const postPositionsRoute = createRoute({
  method: 'post',
  path: '/positions',
  tags: ['positions'],
  description: "Update the OAuth'ed end user's Curriculum Vitae by adding a position.",
  request: { body: PostPositionsRequestBody },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostPositionsSchema } },
    },
  },
  security: [
    { explicit_flow: ['profile_read', 'profile_write'] },
    { implicit_flow: ['profile_read', 'profile_write'] },
  ],
})

export const deletePositionsIDRoute = createRoute({
  method: 'delete',
  path: '/positions/{ID}',
  tags: ['positions'],
  description: "Remove an item from the OAuth'ed end user's Curriculum Vitae.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointDeletePositionsIDSchema } },
    },
  },
  security: [
    { explicit_flow: ['profile_read', 'profile_write'] },
    { implicit_flow: ['profile_read', 'profile_write'] },
  ],
})

export const patchPositionsIDRoute = createRoute({
  method: 'patch',
  path: '/positions/{ID}',
  tags: ['positions'],
  description: "Update the OAuth'ed end user's Curriculum Vitae by modifying an existing position.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: PostPositionsRequestBody,
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPatchPositionsIDSchema } },
    },
  },
  security: [
    { explicit_flow: ['profile_read', 'profile_write'] },
    { implicit_flow: ['profile_read', 'profile_write'] },
  ],
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['users'],
  description:
    "Fetch an array of users that you've been matched with, connected with, skipped, or muted. You can only retrieve users existing within the current access token's bubble. This report may be limited to the last ~500-1000 users you've communicated with within the access token's bubble. Matches are always ordered by synergy, and the order_by parameter is ignored. You can only retrieve bubbled users when retrieving matches, and the bubbled parameter is ignored otherwise. Your 100 best algorithmic matches are based on: Complementary data submitted to Profiles, CVs, and Metadata; Complementary data acquired from third-parties; Location information; Many behavioral data points, such as how responsive users are to connections; Degrees of separation (mutual connections); etc. You may connect with 3 of these algorithmic matches per day for free. However, new members are allowed a grace period of additional daily matches. Each time you choose to meet or mute one of your algorithmic matches, a new match is introduced.",
  request: {
    query: z.object({
      filter: z
        .enum(['connections', 'matches', 'skipped', 'muted'])
        .default('connections')
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'filter',
            required: false,
            schema: {
              default: 'connections',
              enum: ['connections', 'matches', 'skipped', 'muted'],
              type: 'string',
            },
          },
        }),
      order_by: z
        .enum(['id', 'last_activity', 'first_name', 'last_name', 'industry'])
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              default: 'id',
              enum: ['id', 'last_activity', 'first_name', 'last_name', 'industry'],
              type: 'string',
            },
          },
        }),
      bubbled: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bubbled',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersSchema } },
    },
  },
  security: [{ explicit_flow: ['profile_read'] }, { implicit_flow: ['profile_read'] }],
})

export const postUsersInvitesRoute = createRoute({
  method: 'post',
  path: '/users/invites',
  tags: ['users'],
  description:
    "Invite users to into your current access token's bubble by having Dazah send out email invitations on your behalf. The invitation sends users to begin the OAuth flow for the current application (based on the settings specified in the application's profile), and therefore they will be redirected to the application upon signing up / logging in. Upon doing so, if they aren't already, they will automatically be connected with you as well. If your current access token does not escape the bubble, the invitation will specify you wish to connect within the application's name. If your current access token escapes the bubble, the invitation will specify you wish to connect within Dazah. Submit either a list of emails, or a LinkedIn or Outlook CSV file. You can retrieve your LinkedIn CSV file by exporting your LinkedIn Connections at https://www.linkedin.com/people/export-settings. You can retrieve your Outlook CSV file by using the Outlook Import and Export Wizard. This endpoint buckets the invitations into four categories: Existing invites are existing users who are already connected with you within the current bubble, and are therefore not emailed; Discovered invites are existing Dazah users who are available to be connected with within the current bubble, and are therefore not emailed. Now that they have been discovered, the users/{:ID}/meet API endpoint may be used to connect with them; Invalid invites are existing Dazah users who are unavailable to be connected with, because they have deactivated accounts, are muting you, etc., and are therefore not emailed; Emailed invites are queued to receive an invitation within approximately 1 hour. Note that if you are attempting to invite an existing Dazah user who does not currently exist within your current access token's bubble, they will fall within the Discovered bucket if your current access token escapes the bubble, but will be emailed an invitation to join the application if your current access token does not escape the bubble.",
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              csv: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
              'emails[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostUsersInvitesSchema } },
    },
  },
  security: [
    { explicit_flow: ['profile_read', 'conversations_write'] },
    { implicit_flow: ['profile_read', 'conversations_write'] },
  ],
})

export const postUsersMetadataFiltersRoute = createRoute({
  method: 'post',
  path: '/users/metadata/filters',
  tags: ['users'],
  description:
    'Paginated listing of users filtered by arbitrary metadata criteria. Users must match on all key/value pairs passed in. Users may only match on one value of an array passed in. However, users are sorted based on how many distinct values they match on (most matches first).',
  request: { body: PostGroupsMessagesMetadataFiltersRequestBody },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostUsersMetadataFiltersSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getUsersNearbyRoute = createRoute({
  method: 'get',
  path: '/users/nearby',
  tags: ['users'],
  description:
    "Fetch an array of users that are geographically close to a set of coordinates. You can only retrieve users existing within the current access token's bubble.",
  request: {
    query: z.object({
      latitude: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersNearbySchema } },
    },
  },
  security: [{ explicit_flow: ['profile_read'] }, { implicit_flow: ['profile_read'] }],
})

export const postUsersSearchesRoute = createRoute({
  method: 'post',
  path: '/users/searches',
  tags: ['users'],
  description:
    "Filter and perform a weighted search against user profile fields, CV fields, and metadata by specifying a string to search on for each individual field. By default, results are filtered such that all words in the string must exist, unless you seprate the words with OR. To perform a weighted search (as opposed to filtering), specify the weight (from 0-100) the search algorithm should assign to the field. You can optionally exclude users who you are already in or not in conversations with, exclude users who you previously skipped, or exclude users who you are muting. By doing so, you can effectively customize your own matching algorithm. You can specify geo coordinates to only find users a certain distance away from a specific location, or only find users within a certain distance from the OAuth'ed end-user's last known location. If your app utilizes multiple audience segments, you can specify which audiences you would like to search. You can also limit users to just those who have been recently active. You can also choose to only receive users originating from the current access token's bubble. Only users existing within the current access token's bubble will be matched, and you can only search within a group created by a bubbled user.",
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              active_within_x_days: z
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
              'audience_ids[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z.preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    ),
                  ),
                )
                .exactOptional(),
              bubbled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              exclude_connections: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              exclude_matches: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              exclude_muted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              exclude_skipped: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              geo_latitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional(),
              geo_longitude: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional(),
              geo_miles_away: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional(),
              group_id: z
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
                .default(50)
                .exactOptional(),
              location_city_query: z.string().exactOptional(),
              location_city_weight: z
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
              location_country_query: z.string().exactOptional(),
              location_country_weight: z
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
              location_region_query: z.string().exactOptional(),
              location_region_weight: z
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
              metadata_0_key: z.string().exactOptional(),
              metadata_0_query: z.string().exactOptional(),
              metadata_0_weight: z
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
              metadata_1_key: z.string().exactOptional(),
              metadata_1_query: z.string().exactOptional(),
              metadata_1_weight: z
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
              metadata_2_key: z.string().exactOptional(),
              metadata_2_query: z.string().exactOptional(),
              metadata_2_weight: z
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
              offset: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(0)
                .exactOptional(),
              position_organization_query: z.string().exactOptional(),
              position_organization_weight: z
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
              position_role_query: z.string().exactOptional(),
              position_role_weight: z
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
              position_summary_query: z.string().exactOptional(),
              position_summary_weight: z
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
              profile_first_name_query: z.string().exactOptional(),
              profile_first_name_weight: z
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
              profile_goals_query: z.string().exactOptional(),
              profile_goals_weight: z.string().exactOptional(),
              profile_headline_query: z.string().exactOptional(),
              profile_headline_weight: z
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
              profile_industry_query: z.string().exactOptional(),
              profile_industry_weight: z
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
              profile_last_name_query: z.string().exactOptional(),
              profile_last_name_weight: z
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
              profile_pitch_query: z.string().exactOptional(),
              profile_pitch_weight: z
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
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostUsersSearchesSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getUsersIDRoute = createRoute({
  method: 'get',
  path: '/users/{ID}',
  tags: ['users'],
  description:
    "Fetch an array of users. You can only retrieve users existing within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersIDSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getUsersIDGroupsRoute = createRoute({
  method: 'get',
  path: '/users/{ID}/groups',
  tags: ['users'],
  description:
    "You can only retrieve groups that were created by users existing within the current access token's bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersIDGroupsSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getUsersIDGroupsMessagesRoute = createRoute({
  method: 'get',
  path: '/users/{ID}/groups/messages',
  tags: ['users'],
  description:
    "Paginated transcript of group messages authored by an individual user who exists within the current access token's bubble. Messages are sorted oldest to newest.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersIDGroupsMessagesSchema } },
    },
  },
  security: [{ explicit_flow: ['groups_read'] }, { implicit_flow: ['groups_read'] }],
})

export const postUsersIDMessagesRoute = createRoute({
  method: 'post',
  path: '/users/{ID}/messages',
  tags: ['users'],
  description:
    "Initiate a conversation with a user who exists within the current access token's bubble by sending them an introductory message. If you aren't already in a conversation with them, this endpoint meets them first, and then sends the message. Note that if you aren't in an existing conversation, you still must meet the criteria to meet them, meaning the user must currently be free for you to meet. You will receive an error message unless it is currently free for you to meet the user. You can use the users/{:IDS}/synergies endpoint to first determine if the user isn't already in a conversation with you and is free for you to meet and, if they aren't, how to pay to meet them. If you don't specify a message, it defaults to your custom introductory message defined in your settings.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              bubbled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              metadata_0_key: z.string().exactOptional(),
              metadata_0_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_0_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              metadata_1_key: z.string().exactOptional(),
              metadata_1_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_1_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              metadata_2_key: z.string().exactOptional(),
              metadata_2_privacy: z.enum(['Public', 'Private', 'Bubbled', 'User']).exactOptional(),
              'metadata_2_values[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              text_emoticons: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              text_raw: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostUsersIDMessagesSchema } },
    },
  },
  security: [
    { explicit_flow: ['profile_read', 'conversations_write'] },
    { implicit_flow: ['profile_read', 'conversations_write'] },
  ],
})

export const getUsersIDMetadataRoute = createRoute({
  method: 'get',
  path: '/users/{ID}/metadata',
  tags: ['users'],
  description:
    "Retrieve all key/value pairs attached to the current user that you have access to, so long as the user exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. However, you can always use the /users/metadata/filters endpoint to filter across all users, including those that are unmatched, existing within the current access token's bubble based on preknown metadata key/value pairs.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .default(50),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersIDMetadataSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const postUsersIDMetadataRoute = createRoute({
  method: 'post',
  path: '/users/{ID}/metadata',
  tags: ['users'],
  description:
    "Attach one-to-many key/value pairs of metadata to a user, so long as the user exists within the current access token's bubble. You can set one key at a time, with one or many values. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by anyone using an access token which grants them access to the user; Bubbled metadata by anyone using an access token existing within the current bubble; User metadata by you, so long as you are using an access token which grants you access to the user; Private metadata by you, so long as you are using an access token existing within the current bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: PostGroupsMessagesIdMetadataRequestBody,
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostUsersIDMetadataSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getUsersIDMetadataCollectionsRoute = createRoute({
  method: 'get',
  path: '/users/{ID}/metadata/collections',
  tags: ['users'],
  description:
    "Retrieve all key/value pairs attached to the current user that you have access to, so long as the user exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. However, you can always use the /users/metadata/filters endpoint to filter across all users, including those that are unmatched, existing within the current access token's bubble based on preknown metadata key/value pairs. Metadata will be grouped by key.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersIDMetadataCollectionsSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getUsersIDPositionsRoute = createRoute({
  method: 'get',
  path: '/users/{ID}/positions',
  tags: ['users'],
  description:
    "Retrieve the CV of a user who exists within the current access token's bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. You can only record CV data to your own account. However, any app that you have OAuth'ed against can do so. By default, you will receive CV data that all apps have recorded for the user. Optionally, you can choose to only receive data that the current access token's bubble has recorded.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      bubbled: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bubbled',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersIDPositionsSchema } },
    },
  },
  security: [{ explicit_flow: ['profile_read'] }, { implicit_flow: ['profile_read'] }],
})

export const getUsersIDSynergiesRoute = createRoute({
  method: 'get',
  path: '/users/{ID}/synergies',
  tags: ['users'],
  description:
    "Determine your match relationship with one or more users who exist within the current access token's bubble. Under some conditions, the price to meet the user will be $0. However, if this is not the case, the PayPal URL payment method will be provided along with the price to meet the user. The PayPal API can be leveraged to send payments programatically, provided the parameters passed in remain the same to ensure that the payment is correctly recorded. Once the payment has been recorded via PayPal IPN, the price to meet the user changes to $0. You can then call the users/{:ID}/meet endpoint to meet the user.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32().min(1),
              ),
            )
            .max(100),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: {
              items: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
              maxItems: 100,
              type: 'array',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsersIDSynergiesSchema } },
    },
  },
  security: [{ explicit_flow: ['profile_read'] }, { implicit_flow: ['profile_read'] }],
})

export const patchUsersIDSynergiesRoute = createRoute({
  method: 'patch',
  path: '/users/{ID}/synergies',
  tags: ['users'],
  description:
    "Skip, mute or unmute a user you've been matched with. Skipped matches are only presented as algorithmic matches after all other candidates have been exhausted. You cannot be matched with or meet muted users. You can only skip, mute or unmute users existing within the same bubble.",
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              relationship_muted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              relationship_skipped: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPatchUsersIDSynergiesSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const getUsersTildeRoute = createRoute({
  method: 'get',
  path: '/users/~',
  tags: ['users'],
  description:
    "Retrieve the currently OAuth'ed end-user, based on the access token being used, including private information and settings such as their email address.",
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetUsers_2Schema } },
    },
  },
  security: [{ explicit_flow: ['profile_read'] }, { implicit_flow: ['profile_read'] }],
})

export const patchUsersTildeRoute = createRoute({
  method: 'patch',
  path: '/users/~',
  tags: ['users'],
  description:
    "Update the OAuth'ed end user's account profile. At this time, for anti-spam reasons, restrictions preclude the ability to update email address and some other settings via the API.",
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              company: z.string().exactOptional(),
              company_size: z
                .enum([
                  'Self-employed',
                  '2 - 9 Employees',
                  '10 - 49 Employees',
                  '50 - 99 Employees',
                  '100 - 499 Employees',
                  '500 - 999 Employees',
                  '1000 - 4999 Employees',
                  '5000+ Employees',
                  "Don't Know",
                ])
                .exactOptional(),
              first_name: z.string().exactOptional(),
              'goals[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.union([
                    z.literal('Find business partnerships'),
                    z.literal('Find prospective clients'),
                    z.literal('Hire employees'),
                    z.literal('Find a job'),
                    z.literal('Find a co-founder'),
                    z.literal('Receive mentorship from others'),
                    z.literal('Mentor others'),
                  ]),
                )
                .exactOptional(),
              headline: z.string().exactOptional(),
              industry: z
                .enum([
                  'Accounting',
                  'Airlines/Aviation',
                  'Alternative Dispute Resolution',
                  'Alternative Medicine',
                  'Animation',
                  'Apparel & Fashion',
                  'Architecture & Planning',
                  'Arts and Crafts',
                  'Automotive',
                  'Aviation & Aerospace',
                  'Banking',
                  'Biotechnology',
                  'Broadcast Media',
                  'Building Materials',
                  'Business Supplies and Equipment',
                  'Capital Markets',
                  'Chemicals',
                  'Civic & Social Organization',
                  'Civil Engineering',
                  'Commercial Real Estate',
                  'Computer & Network Security',
                  'Computer Games',
                  'Computer Hardware',
                  'Computer Networking',
                  'Computer Software',
                  'Construction',
                  'Consumer Electronics',
                  'Consumer Goods',
                  'Consumer Services',
                  'Cosmetics',
                  'Dairy',
                  'Defense & Space',
                  'Design',
                  'E-Learning',
                  'Education Management',
                  'Electrical/Electronic Manufacturing',
                  'Entertainment',
                  'Environmental Services',
                  'Events Services',
                  'Executive Office',
                  'Facilities Services',
                  'Farming',
                  'Financial Services',
                  'Fine Art',
                  'Fishery',
                  'Food & Beverages',
                  'Food Production',
                  'Fund-Raising',
                  'Furniture',
                  'Gambling & Casinos',
                  'Glass, Ceramics & Concrete',
                  'Government Administration',
                  'Government Relations',
                  'Graphic Design',
                  'Health, Wellness and Fitness',
                  'Higher Education',
                  'Hospital & Health Care',
                  'Hospitality',
                  'Human Resources',
                  'Import and Export',
                  'Individual & Family Services',
                  'Industrial Automation',
                  'Information Services',
                  'Information Technology and Services',
                  'Insurance',
                  'International Affairs',
                  'International Trade and Development',
                  'Internet',
                  'Investment Banking',
                  'Investment Management',
                  'Judiciary',
                  'Law Enforcement',
                  'Law Practice',
                  'Legal Services',
                  'Legislative Office',
                  'Leisure, Travel & Tourism',
                  'Libraries',
                  'Logistics and Supply Chain',
                  'Luxury Goods & Jewelry',
                  'Machinery',
                  'Management Consulting',
                  'Maritime',
                  'Market Research',
                  'Marketing and Advertising',
                  'Mechanical or Industrial Engineering',
                  'Media Production',
                  'Medical Devices',
                  'Medical Practice',
                  'Mental Health Care',
                  'Military',
                  'Mining & Metals',
                  'Motion Pictures and Film',
                  'Museums and Institutions',
                  'Music',
                  'Nanotechnology',
                  'Newspapers',
                  'Non-Profit Organization Management',
                  'Oil & Energy',
                  'Online Media',
                  'Outsourcing/Offshoring',
                  'Package/Freight Delivery',
                  'Packaging and Containers',
                  'Paper & Forest Products',
                  'Performing Arts',
                  'Pharmaceuticals',
                  'Philanthropy',
                  'Photography',
                  'Plastics',
                  'Political Organization',
                  'Primary/Secondary Education',
                  'Printing',
                  'Professional Training & Coaching',
                  'Program Development',
                  'Public Policy',
                  'Public Relations and Communications',
                  'Public Safety',
                  'Publishing',
                  'Railroad Manufacture',
                  'Ranching',
                  'Real Estate',
                  'Recreational Facilities and Services',
                  'Religious Institutions',
                  'Renewables & Environment',
                  'Research',
                  'Restaurants',
                  'Retail',
                  'Security and Investigations',
                  'Semiconductors',
                  'Shipbuilding',
                  'Sporting Goods',
                  'Sports',
                  'Staffing and Recruiting',
                  'Supermarkets',
                  'Telecommunications',
                  'Textiles',
                  'Think Tanks',
                  'Tobacco',
                  'Translation and Localization',
                  'Transportation/Trucking/Railroad',
                  'Utilities',
                  'Venture Capital & Private Equity',
                  'Veterinary',
                  'Warehousing',
                  'Wholesale',
                  'Wine and Spirits',
                  'Wireless',
                  'Writing and Editing',
                ])
                .exactOptional(),
              introduction: z.string().exactOptional(),
              job_position: z
                .enum([
                  'Executive Management (C-level)',
                  'VP-level Executive',
                  'Manager / Director / Supervisor',
                  'Systems Development',
                  'Software Development',
                  'Web Developer',
                  'IT Consultant',
                  'Technical Support',
                  'Sales',
                  'Other technology related',
                  'Other non-technology related',
                  'Student',
                  'Retired',
                ])
                .exactOptional(),
              last_name: z.string().exactOptional(),
              location_importance: z.enum(['Yes', 'Somewhat', 'No']).exactOptional(),
              'match_tags[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              pitch: z.string().exactOptional(),
              'tags[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              targeted_industry: z
                .enum([
                  'Accounting',
                  'Airlines/Aviation',
                  'Alternative Dispute Resolution',
                  'Alternative Medicine',
                  'Animation',
                  'Apparel & Fashion',
                  'Architecture & Planning',
                  'Arts and Crafts',
                  'Automotive',
                  'Aviation & Aerospace',
                  'Banking',
                  'Biotechnology',
                  'Broadcast Media',
                  'Building Materials',
                  'Business Supplies and Equipment',
                  'Capital Markets',
                  'Chemicals',
                  'Civic & Social Organization',
                  'Civil Engineering',
                  'Commercial Real Estate',
                  'Computer & Network Security',
                  'Computer Games',
                  'Computer Hardware',
                  'Computer Networking',
                  'Computer Software',
                  'Construction',
                  'Consumer Electronics',
                  'Consumer Goods',
                  'Consumer Services',
                  'Cosmetics',
                  'Dairy',
                  'Defense & Space',
                  'Design',
                  'E-Learning',
                  'Education Management',
                  'Electrical/Electronic Manufacturing',
                  'Entertainment',
                  'Environmental Services',
                  'Events Services',
                  'Executive Office',
                  'Facilities Services',
                  'Farming',
                  'Financial Services',
                  'Fine Art',
                  'Fishery',
                  'Food & Beverages',
                  'Food Production',
                  'Fund-Raising',
                  'Furniture',
                  'Gambling & Casinos',
                  'Glass, Ceramics & Concrete',
                  'Government Administration',
                  'Government Relations',
                  'Graphic Design',
                  'Health, Wellness and Fitness',
                  'Higher Education',
                  'Hospital & Health Care',
                  'Hospitality',
                  'Human Resources',
                  'Import and Export',
                  'Individual & Family Services',
                  'Industrial Automation',
                  'Information Services',
                  'Information Technology and Services',
                  'Insurance',
                  'International Affairs',
                  'International Trade and Development',
                  'Internet',
                  'Investment Banking',
                  'Investment Management',
                  'Judiciary',
                  'Law Enforcement',
                  'Law Practice',
                  'Legal Services',
                  'Legislative Office',
                  'Leisure, Travel & Tourism',
                  'Libraries',
                  'Logistics and Supply Chain',
                  'Luxury Goods & Jewelry',
                  'Machinery',
                  'Management Consulting',
                  'Maritime',
                  'Market Research',
                  'Marketing and Advertising',
                  'Mechanical or Industrial Engineering',
                  'Media Production',
                  'Medical Devices',
                  'Medical Practice',
                  'Mental Health Care',
                  'Military',
                  'Mining & Metals',
                  'Motion Pictures and Film',
                  'Museums and Institutions',
                  'Music',
                  'Nanotechnology',
                  'Newspapers',
                  'Non-Profit Organization Management',
                  'Oil & Energy',
                  'Online Media',
                  'Outsourcing/Offshoring',
                  'Package/Freight Delivery',
                  'Packaging and Containers',
                  'Paper & Forest Products',
                  'Performing Arts',
                  'Pharmaceuticals',
                  'Philanthropy',
                  'Photography',
                  'Plastics',
                  'Political Organization',
                  'Primary/Secondary Education',
                  'Printing',
                  'Professional Training & Coaching',
                  'Program Development',
                  'Public Policy',
                  'Public Relations and Communications',
                  'Public Safety',
                  'Publishing',
                  'Railroad Manufacture',
                  'Ranching',
                  'Real Estate',
                  'Recreational Facilities and Services',
                  'Religious Institutions',
                  'Renewables & Environment',
                  'Research',
                  'Restaurants',
                  'Retail',
                  'Security and Investigations',
                  'Semiconductors',
                  'Shipbuilding',
                  'Sporting Goods',
                  'Sports',
                  'Staffing and Recruiting',
                  'Supermarkets',
                  'Telecommunications',
                  'Textiles',
                  'Think Tanks',
                  'Tobacco',
                  'Translation and Localization',
                  'Transportation/Trucking/Railroad',
                  'Utilities',
                  'Venture Capital & Private Equity',
                  'Veterinary',
                  'Warehousing',
                  'Wholesale',
                  'Wine and Spirits',
                  'Wireless',
                  'Writing and Editing',
                ])
                .exactOptional(),
              url: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPatchUsersSchema } },
    },
  },
  security: [
    { explicit_flow: ['profile_read', 'profile_write'] },
    { implicit_flow: ['profile_read', 'profile_write'] },
  ],
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['webhooks'],
  description: 'Fetch a listing of all webhooks owned by the current user/bubble combination.',
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointGetWebhooksSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['webhooks'],
  description:
    "Register a new webhook for the current user/bubble combination. Specify an object_id to only be notified on an event related to that specific Conversation ID, Group ID, or User ID. Your access token must have access to the user being tracked, user you are in the conversation with, or user who created the group. You must be connected with a user in order to keep track of their online status. Alternatively, do not specify an object_id to be notified on all events that are related to conversations you're in, groups you're a member of, or users you are in conversations with. You may only have one webhook for each object_id/event. The webhook URI must reside on your own server. Webhooks do not expire when the access token used to create them expires. However, they will temporarily cease to function if the user who created them deauthorizes access to the application (effectively no longer existing within the bubble), unless/until the user reauthorizes the application using OAuth.",
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              bubbled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional(),
              event: z.enum([
                'conversation_message',
                'conversation_seen',
                'group_update',
                'group_message',
                'group_seen',
                'user_online',
                'user_update',
              ]),
              name: z.string(),
              object_id: z
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
              uri: z.string(),
            })
            .openapi({ required: ['name', 'event', 'uri'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointPostWebhooksSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})

export const deleteWebhooksIDRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{ID}',
  tags: ['webhooks'],
  description:
    'Delete a webhook that was previously registered by the current user/bubble combination.',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { exclusiveMinimum: false, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: { 'application/json': { schema: EndpointDeleteWebhooksIDSchema } },
    },
  },
  security: [{ explicit_flow: ['basic'] }, { implicit_flow: ['basic'] }],
})
