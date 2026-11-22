type App = {
  about?:
    | {
        description?: string | undefined
        name?: string | undefined
        website?: { thumbshot?: string | undefined; url?: string | undefined } | undefined
      }
    | undefined
  id: number
  legal?: { privacy_url?: string | undefined; tos_url?: string | undefined } | undefined
}
type ApiPagination = {
  limit?: number | undefined
  offset?: number | undefined
  total_records?: number | undefined
}
type EndpointGetApps = { data?: App[] | undefined; pagination?: ApiPagination | undefined }
type EndpointGetAppsID = { data?: App[] | undefined }
type Bubble = { about?: { name?: string | undefined } | undefined; id: number }
type EndpointGetAudiences = { data?: Bubble[] | undefined; pagination?: ApiPagination | undefined }
type EndpointGetAudiencesID = { data?: Bubble[] | undefined }
type Member = {
  id: number
  identity?:
    | {
        avatar_uri?: string | undefined
        badge?: string | undefined
        profile_url?: string | undefined
        username?: string | undefined
      }
    | undefined
  location?: { free_form?: string | undefined } | undefined
  personal?:
    | {
        about_me?: string | undefined
        birthday?: string | undefined
        interests?: string | undefined
        pc_specs?: string | undefined
      }
    | undefined
  signature?: { parsed?: string | undefined; raw?: string | undefined } | undefined
  stats?:
    | {
        answered_count?: number | undefined
        endorsements_count?: number | undefined
        posts_count?: number | undefined
        reputation_count?: number | undefined
      }
    | undefined
}
type User = {
  business_card?:
    | {
        company_name?: string | undefined
        company_size?: string | undefined
        headline?: string | undefined
        industry?: string | undefined
        interest_tags?: string[] | undefined
        job_position?: string | undefined
        summary?: string | undefined
        website?: { thumbshot_uri?: string | undefined; url?: string | undefined } | undefined
      }
    | undefined
  community_persona?: Member | undefined
  id: number
  profile?: { first_name?: string | undefined; last_name?: string | undefined } | undefined
  usage?:
    | {
        available_status?: boolean | undefined
        joined_timestamp?: string | undefined
        last_activity_timestamp?: string | undefined
        online_status?: boolean | undefined
      }
    | undefined
}
type EndpointPostAudiencesIDMemberships = {
  data?:
    | { audience?: { id?: number | undefined } | undefined; member?: User | undefined }
    | undefined
  success?: boolean | undefined
}
type EndpointGetAutocompletes = {
  data?:
    | {
        conversations?: string[] | undefined
        locations?: string[] | undefined
        matches?: string[] | undefined
        people?: string[] | undefined
      }
    | undefined
}
type Conversation = {
  first_message?: { author?: User | undefined; timestamp?: string | undefined } | undefined
  id: number
  latest_message?: Message | undefined
  user_a?: User | undefined
  user_b?: User | undefined
}
type Message = {
  author?: User | undefined
  conversation?: Conversation | undefined
  id: number
  last_seen?: { timestamp?: string | undefined; user?: User | undefined } | undefined
  text?: { parsed?: string | undefined } | undefined
  timestamp?: string | undefined
}
type EndpointPostConversationsSchedules = {
  data?:
    | {
        author_count?: number | undefined
        conversation_count?: number | undefined
        conversation_id?: number | undefined
        date?: string | undefined
        first_message?: Message | undefined
        last_message?: Message | undefined
        message_count?: number | undefined
        my_message_count?: number | undefined
        navigation?:
          | {
              earliest_date?: string | undefined
              next_date?: string | undefined
              previous_date?: string | undefined
            }
          | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostConversationsSearches = {
  data?:
    | { message?: Message | undefined; relevance?: { score?: number | undefined } | undefined }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetConversationsStatuses = {
  data?:
    | {
        archived_status?: boolean | undefined
        bubbled?: { latest_message?: Message | undefined } | undefined
        conversation?: Conversation | undefined
        earliest_unseen_message?: Message | undefined
        new_message_count?: number | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetConversationsID = { data?: Conversation[] | undefined }
type EndpointGetConversationsIDMessages = {
  data?: Message[] | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostConversationsIDMessages = {
  data?: Message | undefined
  success?: boolean | undefined
}
type EndpointPostConversationsIDSchedules = {
  data?:
    | {
        author_count?: number | undefined
        conversation_count?: number | undefined
        conversation_id?: number | undefined
        date?: string | undefined
        first_message?: Message | undefined
        last_message?: Message | undefined
        message_count?: number | undefined
        my_message_count?: number | undefined
        navigation?:
          | {
              earliest_date?: string | undefined
              next_date?: string | undefined
              previous_date?: string | undefined
            }
          | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostConversationsIDSearches = {
  data?:
    | { message?: Message | undefined; relevance?: { score?: number | undefined } | undefined }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetConversationsIDStatuses = {
  data?:
    | {
        archived_status?: boolean | undefined
        bubbled?: { latest_message?: Message | undefined } | undefined
        conversation?: Conversation | undefined
        earliest_unseen_message?: Message | undefined
        new_message_count?: number | undefined
      }[]
    | undefined
}
type EndpointPatchConversationsIDStatuses = {
  data?:
    | { archived_status?: boolean | undefined; conversation?: Conversation | undefined }
    | undefined
  success?: boolean | undefined
}
type GroupMessage = {
  author?: User | undefined
  group?: Group | undefined
  id: number
  last_seen?: { timestamp?: string | undefined; user?: User | undefined } | undefined
  moderated?: { deleted_status?: boolean | undefined } | undefined
  text?: { parsed?: string | undefined } | undefined
  timestamp?: string | undefined
}
type Group = {
  first_message?: { timestamp?: string | undefined } | undefined
  id: number
  latest_message?: GroupMessage | undefined
  member_count?: number | undefined
  owner?: User | undefined
  properties?:
    | {
        description?: string | undefined
        name?: string | undefined
        privacy?: string | undefined
        slug?: string | undefined
      }
    | undefined
}
type EndpointGetGroups = { data?: Group[] | undefined; pagination?: ApiPagination | undefined }
type EndpointPostGroups = { data?: Group | undefined; success?: boolean | undefined }
type EndpointPostGroupsMessagesMetadataFilters = {
  data?:
    | {
        matched_metadata?: { [x: string]: string[] } | undefined
        message?: GroupMessage | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointDeleteGroupsMessagesID = {
  data?: GroupMessage[] | undefined
  status?: boolean | undefined
}
type EndpointGetGroupsMessagesID = { data?: GroupMessage[] | undefined }
type GroupMessageData = {
  app?: App | undefined
  content?: { key?: string | undefined; value?: string | undefined } | undefined
  id: number
  message?: GroupMessage | undefined
  owner?: User | undefined
  settings?: { privacy?: string | undefined } | undefined
  status?: { last_updated_timestamp?: string | undefined } | undefined
}
type EndpointGetGroupsMessagesIDMetadata = {
  data?: GroupMessageData[] | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostGroupsMessagesIDMetadata = {
  data?: { [x: string]: string[] } | undefined
  success?: boolean | undefined
}
type EndpointGetGroupsMessagesIDMetadataCollections = {
  data?: { [x: string]: string[] } | undefined
}
type EndpointPostGroupsSchedules = {
  data?:
    | {
        author_count?: number | undefined
        date?: string | undefined
        first_message?: GroupMessage | undefined
        group_count?: number | undefined
        group_id?: number | undefined
        last_message?: GroupMessage | undefined
        message_count?: number | undefined
        my_message_count?: number | undefined
        navigation?:
          | {
              earliest_date?: string | undefined
              next_date?: string | undefined
              previous_date?: string | undefined
            }
          | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetGroupsStatuses = {
  data?:
    | {
        earliest_unseen_message?: GroupMessage | undefined
        group?: Group | undefined
        new_message_count?: number | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetGroupsID = { data?: Group[] | undefined }
type EndpointPatchGroupsID = { data?: Group | undefined; success?: boolean | undefined }
type EndpointDeleteGroupsIDMemberships = { success?: boolean | undefined }
type EndpointGetGroupsIDMemberships = {
  data?:
    | {
        group?: Group | undefined
        member?: User | undefined
        privileges?: { moderator?: boolean | undefined; owner?: boolean | undefined } | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPatchGroupsIDMemberships = {
  data?:
    | {
        group?: Group | undefined
        member?: User | undefined
        privileges?: { moderator?: boolean | undefined } | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
  success?: boolean | undefined
}
type EndpointPostGroupsIDMemberships = {
  data?: { group?: Group | undefined; member?: User | undefined } | undefined
  success?: boolean | undefined
}
type EndpointGetGroupsIDMessages = {
  data?: GroupMessage[] | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostGroupsIDMessages = {
  data?: GroupMessage[] | undefined
  success?: boolean | undefined
}
type EndpointPostGroupsIDSchedules = {
  data?:
    | {
        author_count?: number | undefined
        date?: string | undefined
        first_message?: GroupMessage | undefined
        group_count?: number | undefined
        group_id?: number | undefined
        last_message?: GroupMessage | undefined
        message_count?: number | undefined
        my_message_count?: number | undefined
        navigation?:
          | {
              earliest_date?: string | undefined
              next_date?: string | undefined
              previous_date?: string | undefined
            }
          | undefined
      }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetGroupsIDStatuses = {
  data?:
    | {
        earliest_unseen_message?: GroupMessage | undefined
        group?: Group | undefined
        membership_status?: boolean | undefined
        new_message_count?: number | undefined
      }[]
    | undefined
}
type EndpointGetIndustries = { data?: string[] | undefined }
type EndpointPostMarkdown = {
  data?: { parsed?: string | undefined; raw?: string | undefined } | undefined
}
type EndpointGetMarkdownEmoticons = {
  data?:
    | { alt?: string | undefined; emoticon?: string | undefined; image?: string | undefined }[]
    | undefined
}
type EndpointPostMessagesMetadataFilters = {
  data?:
    | { matched_metadata?: { [x: string]: string[] } | undefined; message?: Message | undefined }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetMessagesID = { data?: Message[] | undefined }
type MessageData = {
  app?: App | undefined
  content?: { key?: string | undefined; value?: string | undefined } | undefined
  id: number
  message?: Message | undefined
  owner?: User | undefined
  settings?: { privacy?: string | undefined } | undefined
  status?: { last_updated_timestamp?: string | undefined } | undefined
}
type EndpointGetMessagesIDMetadata = {
  data?: MessageData[] | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostMessagesIDMetadata = {
  data?: { [x: string]: string[] } | undefined
  success?: boolean | undefined
}
type EndpointGetMessagesIDMetadataCollections = { data?: { [x: string]: string[] } | undefined }
type Position = {
  app?: App | undefined
  category?: string | undefined
  id: number
  organization?:
    | {
        industry?: string | undefined
        name?: string | undefined
        size?: string | undefined
        ticker?: string | undefined
        type?: string | undefined
        url?: string | undefined
      }
    | undefined
  role?:
    | {
        end_date?: string | undefined
        start_date?: string | undefined
        summary?: string | undefined
        title?: string | undefined
      }
    | undefined
  user?: User | undefined
}
type EndpointPostPositions = { data?: Position | undefined; success?: boolean | undefined }
type EndpointDeletePositionsID = { success?: boolean | undefined }
type EndpointPatchPositionsID = { data?: Position | undefined; success?: boolean | undefined }
type EndpointGetUsers = { data?: User[] | undefined; pagination?: ApiPagination | undefined }
type EndpointPostUsersInvites = {
  data?:
    | {
        discovered?: { users?: User[] | undefined } | undefined
        emailed?: { emails?: string[] | undefined } | undefined
        existing?: { conversations?: User[] | undefined } | undefined
        invalid?: { emails?: string[] | undefined } | undefined
      }
    | undefined
  success?: boolean | undefined
}
type EndpointPostUsersMetadataFilters = {
  data?:
    | { matched_metadata?: { [x: string]: string[] } | undefined; user?: User | undefined }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetUsersNearby = {
  data?:
    | { distance_away?: { miles?: number | undefined } | undefined; user?: User | undefined }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostUsersSearches = {
  data?:
    | { relevance?: { score?: number | undefined } | undefined; user?: User | undefined }[]
    | undefined
  pagination?: ApiPagination | undefined
}
type EndpointGetUsersID = { data?: User[] | undefined }
type EndpointGetUsersIDGroups = { data?: Group[] | undefined }
type EndpointGetUsersIDGroupsMessages = {
  data?: GroupMessage[] | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostUsersIDMessages = { data?: Message | undefined; success?: boolean | undefined }
type UserData = {
  app?: App | undefined
  content?: { key?: string | undefined; value?: string | undefined } | undefined
  id: number
  owner?: User | undefined
  settings?: { privacy?: string | undefined } | undefined
  status?: { last_updated_timestamp?: string | undefined } | undefined
  user?: User | undefined
}
type EndpointGetUsersIDMetadata = {
  data?: UserData[] | undefined
  pagination?: ApiPagination | undefined
}
type EndpointPostUsersIDMetadata = {
  data?: { [x: string]: string[] } | undefined
  success?: boolean | undefined
}
type EndpointGetUsersIDMetadataCollections = { data?: { [x: string]: string[] } | undefined }
type EndpointGetUsersIDPositions = { data?: Position[] | undefined }
type EndpointGetUsersIDSynergies = {
  data?:
    | {
        additional?:
          | { metadata_count?: number | undefined; positions_count?: number | undefined }
          | undefined
        conversation?: Conversation | undefined
        match?:
          | {
              algorithmic_match?: boolean | undefined
              complementary_goals?: string[] | undefined
              distance_away?: { miles?: number | undefined } | undefined
              industry?:
                | {
                    complementary?: boolean | undefined
                    mutual_match?: boolean | undefined
                    similar?: boolean | undefined
                  }
                | undefined
              mutual_connections?: { count?: number | undefined } | undefined
              recommendation_strength?: number | undefined
            }
          | undefined
        meet?:
          | {
              payment?: { paypal?: { url?: string | undefined } | undefined } | undefined
              price_usd?: number | undefined
            }
          | undefined
        relationship?:
          | {
              existing_bubbled_conversation?: boolean | undefined
              existing_conversation?: boolean | undefined
              muted?: boolean | undefined
              skipped?: boolean | undefined
            }
          | undefined
      }[]
    | undefined
}
type EndpointPatchUsersIDSynergies = {
  data?:
    | { relationship?: { muted?: boolean | undefined; skipped?: boolean | undefined } | undefined }
    | undefined
  success?: boolean | undefined
}
type Me = {
  business_card?:
    | {
        company_name?: string | undefined
        company_size?: string | undefined
        headline?: string | undefined
        industry?: string | undefined
        interest_tags?: string[] | undefined
        job_position?: string | undefined
        summary?: string | undefined
        website?: { thumbshot_uri?: string | undefined; url?: string | undefined } | undefined
      }
    | undefined
  community_persona?: Member | undefined
  id: number
  location?:
    | {
        city?: string | undefined
        country?: number | undefined
        ip_address?: string | undefined
        latitude?: string | undefined
        longitude?: string | undefined
        region?: string | undefined
      }
    | undefined
  matching?:
    | {
        goals?: string[] | undefined
        interest_tags?: string[] | undefined
        location_importance?: string | undefined
        targeted_industry?: string | undefined
      }
    | undefined
  profile?:
    | {
        first_name?: string | undefined
        introduction?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  settings?:
    | {
        email?: string | undefined
        email_verified?: boolean | undefined
        notifications?: string | undefined
        timezone?: number | undefined
      }
    | undefined
  usage?:
    | {
        available_status?: boolean | undefined
        joined_timestamp?: string | undefined
        last_activity_timestamp?: string | undefined
        online_status?: boolean | undefined
      }
    | undefined
}
type EndpointGetUsers_2 = { data?: Me | undefined }
type EndpointPatchUsers = { data?: Me | undefined; success?: boolean | undefined }
type Webhook = {
  app?: App | undefined
  event?: { action?: string | undefined } | undefined
  id: number
  name?: string | undefined
  object?: { id?: number | undefined; type?: string | undefined } | undefined
  uri?: string | undefined
  user?: User | undefined
}
type EndpointGetWebhooks = { data?: Webhook[] | undefined }
type EndpointPostWebhooks = { data?: Webhook | undefined; success?: boolean | undefined }
type EndpointDeleteWebhooksID = { success?: boolean | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apps': {
      $get: {
        input: { query: { offset?: number | undefined; limit?: number | undefined } }
        output: EndpointGetApps
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:ID': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetAppsID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audiences': {
      $get: {
        input: { query: { offset?: number | undefined; limit?: number | undefined } }
        output: EndpointGetAudiences
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audiences/:ID': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetAudiencesID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audiences/:ID/memberships': {
      $post: {
        input: { param: { ID: number } }
        output: EndpointPostAudiencesIDMemberships
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/autocompletes': {
      $get: {
        input: { query: { query?: string | undefined } }
        output: EndpointGetAutocompletes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/schedules': {
      $post: {
        input: {
          form: {
            date?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            roll_up?: boolean | undefined
            sort?: 'asc' | 'desc' | undefined
          }
        }
        output: EndpointPostConversationsSchedules
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/searches': {
      $post: {
        input: {
          form: {
            date?: string | undefined
            gt_message_id?: number | undefined
            limit?: number | undefined
            offset?: number | undefined
            query: string
          }
        }
        output: EndpointPostConversationsSearches
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/statuses': {
      $get: {
        input: {
          query: {
            filter?: 'new' | 'introductions' | 'unreplied' | 'notifications' | undefined
            include_archived?: boolean | undefined
            bubbled?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: EndpointGetConversationsStatuses
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:ID': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetConversationsID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:ID/messages': {
      $get: {
        input: { param: { ID: number } } & {
          query: {
            gt_message_id?: number | undefined
            exclude_self?: boolean | undefined
            date?: string | undefined
            bubbled?: boolean | undefined
            record_seen?: boolean | undefined
            timeout?: number | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: EndpointGetConversationsIDMessages
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ID: number } } & {
          form: {
            bubbled?: boolean | undefined
            metadata_0_key?: string | undefined
            metadata_0_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            metadata_1_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            metadata_2_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_2_values[]'?: string[] | undefined
            text_emoticons?: boolean | undefined
            text_raw: string
          }
        }
        output: EndpointPostConversationsIDMessages
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:ID/schedules': {
      $post: {
        input: { param: { ID: number[] } } & {
          form: {
            date?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            roll_up?: boolean | undefined
            sort?: 'asc' | 'desc' | undefined
          }
        }
        output: EndpointPostConversationsIDSchedules
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:ID/searches': {
      $post: {
        input: { param: { ID: number[] } } & {
          form: {
            date?: string | undefined
            gt_message_id?: number | undefined
            limit?: number | undefined
            offset?: number | undefined
            query: string
          }
        }
        output: EndpointPostConversationsIDSearches
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:ID/statuses': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetConversationsIDStatuses
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ID: number } } & { form: { archived_status: boolean } }
        output: EndpointPatchConversationsIDStatuses
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups': {
      $get: {
        input: { query: { offset?: number | undefined; limit?: number | undefined } }
        output: EndpointGetGroups
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          form: {
            description: string
            name: string
            passphrase?: string | undefined
            privacy: 'Public' | 'Unlisted' | 'Private'
            slug: string
          }
        }
        output: EndpointPostGroups
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/messages/metadata/filters': {
      $post: {
        input: {
          form: {
            limit?: number | undefined
            metadata_0_key?: string | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            'metadata_2_values[]'?: string[] | undefined
            offset?: number | undefined
          }
        }
        output: EndpointPostGroupsMessagesMetadataFilters
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/messages/:ID': {
      $delete: {
        input: { param: { ID: number[] } }
        output: EndpointDeleteGroupsMessagesID
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetGroupsMessagesID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/messages/:ID/metadata': {
      $get: {
        input: { param: { ID: number } } & {
          query: { offset?: number | undefined; limit?: number | undefined }
        }
        output: EndpointGetGroupsMessagesIDMetadata
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ID: number } } & {
          form: {
            metadata_0_key?: string | undefined
            metadata_0_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            metadata_1_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            metadata_2_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_2_values[]'?: string[] | undefined
          }
        }
        output: EndpointPostGroupsMessagesIDMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/messages/:ID/metadata/collections': {
      $get: {
        input: { param: { ID: number } }
        output: EndpointGetGroupsMessagesIDMetadataCollections
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/schedules': {
      $post: {
        input: {
          form: {
            date?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            roll_up?: boolean | undefined
            sort?: 'asc' | 'desc' | undefined
          }
        }
        output: EndpointPostGroupsSchedules
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/statuses': {
      $get: {
        input: {
          query: {
            existing_membership?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: EndpointGetGroupsStatuses
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:ID': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetGroupsID
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ID: number } } & {
          form: {
            description?: string | undefined
            name?: string | undefined
            passphrase?: string | undefined
            privacy?: 'Public' | 'Unlisted' | 'Private' | undefined
            slug?: string | undefined
          }
        }
        output: EndpointPatchGroupsID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:ID/memberships': {
      $delete: {
        input: { param: { ID: number } }
        output: EndpointDeleteGroupsIDMemberships
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { ID: number[] } } & {
          query: { moderators_only?: boolean | undefined; offset?: number | undefined }
        }
        output: EndpointGetGroupsIDMemberships
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ID: number } } & {
          form: { moderator?: boolean | undefined; user_id: number }
        }
        output: EndpointPatchGroupsIDMemberships
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ID: number } } & {
          form: { passphrase?: string | undefined; user_id?: number | undefined }
        }
        output: EndpointPostGroupsIDMemberships
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:ID/messages': {
      $get: {
        input: { param: { ID: number } } & {
          query: {
            gt_message_id?: number | undefined
            exclude_self?: boolean | undefined
            include_deleted?: boolean | undefined
            date?: string | undefined
            bubbled?: boolean | undefined
            record_seen?: boolean | undefined
            timeout?: number | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: EndpointGetGroupsIDMessages
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ID: number } } & {
          form: {
            metadata_0_key?: string | undefined
            metadata_0_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            metadata_1_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            metadata_2_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_2_values[]'?: string[] | undefined
            text_emoticons?: boolean | undefined
            text_raw: string
          }
        }
        output: EndpointPostGroupsIDMessages
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:ID/schedules': {
      $post: {
        input: { param: { ID: number[] } } & {
          form: {
            date?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            roll_up?: boolean | undefined
            sort?: 'asc' | 'desc' | undefined
          }
        }
        output: EndpointPostGroupsIDSchedules
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:ID/statuses': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetGroupsIDStatuses
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/industries': {
      $get: { input: {}; output: EndpointGetIndustries; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/markdown': {
      $post: {
        input: { form: { text_emoticons?: boolean | undefined; text_raw: string } }
        output: EndpointPostMarkdown
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/markdown/emoticons': {
      $get: { input: {}; output: EndpointGetMarkdownEmoticons; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/messages/metadata/filters': {
      $post: {
        input: {
          form: {
            limit?: number | undefined
            metadata_0_key?: string | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            'metadata_2_values[]'?: string[] | undefined
            offset?: number | undefined
          }
        }
        output: EndpointPostMessagesMetadataFilters
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages/:ID': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetMessagesID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages/:ID/metadata': {
      $get: {
        input: { param: { ID: number } } & {
          query: { offset?: number | undefined; limit?: number | undefined }
        }
        output: EndpointGetMessagesIDMetadata
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ID: number } } & {
          form: {
            metadata_0_key?: string | undefined
            metadata_0_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            metadata_1_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            metadata_2_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_2_values[]'?: string[] | undefined
          }
        }
        output: EndpointPostMessagesIDMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages/:ID/metadata/collections': {
      $get: {
        input: { param: { ID: number } }
        output: EndpointGetMessagesIDMetadataCollections
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/positions': {
      $post: {
        input: {
          form: {
            category: 'Experience' | 'Education' | 'Awards' | 'Affiliations' | 'Portfolio'
            end_date?: string | undefined
            organization: string
            organization_size?:
              | 'Self-employed'
              | '2 - 9 Employees'
              | '10 - 49 Employees'
              | '50 - 99 Employees'
              | '100 - 499 Employees'
              | '500 - 999 Employees'
              | '1000 - 4999 Employees'
              | '5000+ Employees'
              | "Don't Know"
              | undefined
            position?:
              | 'Executive Management (C-level)'
              | 'VP-level Executive'
              | 'Manager / Director / Supervisor'
              | 'Systems Development'
              | 'Software Development'
              | 'Web Developer'
              | 'IT Consultant'
              | 'Technical Support'
              | 'Sales'
              | 'Other technology related'
              | 'Other non-technology related'
              | 'Student'
              | 'Retired'
              | undefined
            role: string
            start_date: string
            summary?: string | undefined
            url?: string | undefined
          }
        }
        output: EndpointPostPositions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/positions/:ID': {
      $delete: {
        input: { param: { ID: number } }
        output: EndpointDeletePositionsID
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ID: number } } & {
          form: {
            category: 'Experience' | 'Education' | 'Awards' | 'Affiliations' | 'Portfolio'
            end_date?: string | undefined
            organization: string
            organization_size?:
              | 'Self-employed'
              | '2 - 9 Employees'
              | '10 - 49 Employees'
              | '50 - 99 Employees'
              | '100 - 499 Employees'
              | '500 - 999 Employees'
              | '1000 - 4999 Employees'
              | '5000+ Employees'
              | "Don't Know"
              | undefined
            position?:
              | 'Executive Management (C-level)'
              | 'VP-level Executive'
              | 'Manager / Director / Supervisor'
              | 'Systems Development'
              | 'Software Development'
              | 'Web Developer'
              | 'IT Consultant'
              | 'Technical Support'
              | 'Sales'
              | 'Other technology related'
              | 'Other non-technology related'
              | 'Student'
              | 'Retired'
              | undefined
            role: string
            start_date: string
            summary?: string | undefined
            url?: string | undefined
          }
        }
        output: EndpointPatchPositionsID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $get: {
        input: {
          query: {
            filter?: 'connections' | 'matches' | 'skipped' | 'muted' | undefined
            order_by?: 'id' | 'last_activity' | 'first_name' | 'last_name' | 'industry' | undefined
            bubbled?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: EndpointGetUsers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/invites': {
      $post: {
        input: { form: { csv?: File | undefined; 'emails[]'?: string[] | undefined } }
        output: EndpointPostUsersInvites
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/metadata/filters': {
      $post: {
        input: {
          form: {
            limit?: number | undefined
            metadata_0_key?: string | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            'metadata_2_values[]'?: string[] | undefined
            offset?: number | undefined
          }
        }
        output: EndpointPostUsersMetadataFilters
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/nearby': {
      $get: {
        input: {
          query: {
            latitude?: number | undefined
            longitude?: number | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: EndpointGetUsersNearby
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/searches': {
      $post: {
        input: {
          form: {
            active_within_x_days?: number | undefined
            'audience_ids[]'?: number[] | undefined
            bubbled?: boolean | undefined
            exclude_connections?: boolean | undefined
            exclude_matches?: boolean | undefined
            exclude_muted?: boolean | undefined
            exclude_skipped?: boolean | undefined
            geo_latitude?: number | undefined
            geo_longitude?: number | undefined
            geo_miles_away?: number | undefined
            group_id?: number | undefined
            limit?: number | undefined
            location_city_query?: string | undefined
            location_city_weight?: number | undefined
            location_country_query?: string | undefined
            location_country_weight?: number | undefined
            location_region_query?: string | undefined
            location_region_weight?: number | undefined
            metadata_0_key?: string | undefined
            metadata_0_query?: string | undefined
            metadata_0_weight?: number | undefined
            metadata_1_key?: string | undefined
            metadata_1_query?: string | undefined
            metadata_1_weight?: number | undefined
            metadata_2_key?: string | undefined
            metadata_2_query?: string | undefined
            metadata_2_weight?: number | undefined
            offset?: number | undefined
            position_organization_query?: string | undefined
            position_organization_weight?: number | undefined
            position_role_query?: string | undefined
            position_role_weight?: number | undefined
            position_summary_query?: string | undefined
            position_summary_weight?: number | undefined
            profile_first_name_query?: string | undefined
            profile_first_name_weight?: number | undefined
            profile_goals_query?: string | undefined
            profile_goals_weight?: string | undefined
            profile_headline_query?: string | undefined
            profile_headline_weight?: number | undefined
            profile_industry_query?: string | undefined
            profile_industry_weight?: number | undefined
            profile_last_name_query?: string | undefined
            profile_last_name_weight?: number | undefined
            profile_pitch_query?: string | undefined
            profile_pitch_weight?: number | undefined
          }
        }
        output: EndpointPostUsersSearches
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:ID': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetUsersID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:ID/groups': {
      $get: {
        input: { param: { ID: number } }
        output: EndpointGetUsersIDGroups
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:ID/groups/messages': {
      $get: {
        input: { param: { ID: number } } & {
          query: { offset?: number | undefined; limit?: number | undefined }
        }
        output: EndpointGetUsersIDGroupsMessages
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:ID/messages': {
      $post: {
        input: { param: { ID: number } } & {
          form: {
            bubbled?: boolean | undefined
            metadata_0_key?: string | undefined
            metadata_0_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            metadata_1_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            metadata_2_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_2_values[]'?: string[] | undefined
            text_emoticons?: boolean | undefined
            text_raw?: string | undefined
          }
        }
        output: EndpointPostUsersIDMessages
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:ID/metadata': {
      $get: {
        input: { param: { ID: number } } & {
          query: { offset?: number | undefined; limit?: number | undefined }
        }
        output: EndpointGetUsersIDMetadata
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ID: number } } & {
          form: {
            metadata_0_key?: string | undefined
            metadata_0_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_0_values[]'?: string[] | undefined
            metadata_1_key?: string | undefined
            metadata_1_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_1_values[]'?: string[] | undefined
            metadata_2_key?: string | undefined
            metadata_2_privacy?: 'Public' | 'Private' | 'Bubbled' | 'User' | undefined
            'metadata_2_values[]'?: string[] | undefined
          }
        }
        output: EndpointPostUsersIDMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:ID/metadata/collections': {
      $get: {
        input: { param: { ID: number } }
        output: EndpointGetUsersIDMetadataCollections
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:ID/positions': {
      $get: {
        input: { param: { ID: number } } & { query: { bubbled?: boolean | undefined } }
        output: EndpointGetUsersIDPositions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:ID/synergies': {
      $get: {
        input: { param: { ID: number[] } }
        output: EndpointGetUsersIDSynergies
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ID: number } } & {
          form: {
            relationship_muted?: boolean | undefined
            relationship_skipped?: boolean | undefined
          }
        }
        output: EndpointPatchUsersIDSynergies
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/~': {
      $get: { input: {}; output: EndpointGetUsers_2; outputFormat: 'json'; status: 200 }
      $patch: {
        input: {
          form: {
            company?: string | undefined
            company_size?:
              | 'Self-employed'
              | '2 - 9 Employees'
              | '10 - 49 Employees'
              | '50 - 99 Employees'
              | '100 - 499 Employees'
              | '500 - 999 Employees'
              | '1000 - 4999 Employees'
              | '5000+ Employees'
              | "Don't Know"
              | undefined
            first_name?: string | undefined
            'goals[]'?:
              | 'Find business partnerships'
              | 'Find prospective clients'
              | 'Hire employees'
              | 'Find a job'
              | 'Find a co-founder'
              | 'Receive mentorship from others'
              | 'Mentor others'
              | undefined
            headline?: string | undefined
            industry?:
              | 'Accounting'
              | 'Airlines/Aviation'
              | 'Alternative Dispute Resolution'
              | 'Alternative Medicine'
              | 'Animation'
              | 'Apparel & Fashion'
              | 'Architecture & Planning'
              | 'Arts and Crafts'
              | 'Automotive'
              | 'Aviation & Aerospace'
              | 'Banking'
              | 'Biotechnology'
              | 'Broadcast Media'
              | 'Building Materials'
              | 'Business Supplies and Equipment'
              | 'Capital Markets'
              | 'Chemicals'
              | 'Civic & Social Organization'
              | 'Civil Engineering'
              | 'Commercial Real Estate'
              | 'Computer & Network Security'
              | 'Computer Games'
              | 'Computer Hardware'
              | 'Computer Networking'
              | 'Computer Software'
              | 'Construction'
              | 'Consumer Electronics'
              | 'Consumer Goods'
              | 'Consumer Services'
              | 'Cosmetics'
              | 'Dairy'
              | 'Defense & Space'
              | 'Design'
              | 'E-Learning'
              | 'Education Management'
              | 'Electrical/Electronic Manufacturing'
              | 'Entertainment'
              | 'Environmental Services'
              | 'Events Services'
              | 'Executive Office'
              | 'Facilities Services'
              | 'Farming'
              | 'Financial Services'
              | 'Fine Art'
              | 'Fishery'
              | 'Food & Beverages'
              | 'Food Production'
              | 'Fund-Raising'
              | 'Furniture'
              | 'Gambling & Casinos'
              | 'Glass, Ceramics & Concrete'
              | 'Government Administration'
              | 'Government Relations'
              | 'Graphic Design'
              | 'Health, Wellness and Fitness'
              | 'Higher Education'
              | 'Hospital & Health Care'
              | 'Hospitality'
              | 'Human Resources'
              | 'Import and Export'
              | 'Individual & Family Services'
              | 'Industrial Automation'
              | 'Information Services'
              | 'Information Technology and Services'
              | 'Insurance'
              | 'International Affairs'
              | 'International Trade and Development'
              | 'Internet'
              | 'Investment Banking'
              | 'Investment Management'
              | 'Judiciary'
              | 'Law Enforcement'
              | 'Law Practice'
              | 'Legal Services'
              | 'Legislative Office'
              | 'Leisure, Travel & Tourism'
              | 'Libraries'
              | 'Logistics and Supply Chain'
              | 'Luxury Goods & Jewelry'
              | 'Machinery'
              | 'Management Consulting'
              | 'Maritime'
              | 'Market Research'
              | 'Marketing and Advertising'
              | 'Mechanical or Industrial Engineering'
              | 'Media Production'
              | 'Medical Devices'
              | 'Medical Practice'
              | 'Mental Health Care'
              | 'Military'
              | 'Mining & Metals'
              | 'Motion Pictures and Film'
              | 'Museums and Institutions'
              | 'Music'
              | 'Nanotechnology'
              | 'Newspapers'
              | 'Non-Profit Organization Management'
              | 'Oil & Energy'
              | 'Online Media'
              | 'Outsourcing/Offshoring'
              | 'Package/Freight Delivery'
              | 'Packaging and Containers'
              | 'Paper & Forest Products'
              | 'Performing Arts'
              | 'Pharmaceuticals'
              | 'Philanthropy'
              | 'Photography'
              | 'Plastics'
              | 'Political Organization'
              | 'Primary/Secondary Education'
              | 'Printing'
              | 'Professional Training & Coaching'
              | 'Program Development'
              | 'Public Policy'
              | 'Public Relations and Communications'
              | 'Public Safety'
              | 'Publishing'
              | 'Railroad Manufacture'
              | 'Ranching'
              | 'Real Estate'
              | 'Recreational Facilities and Services'
              | 'Religious Institutions'
              | 'Renewables & Environment'
              | 'Research'
              | 'Restaurants'
              | 'Retail'
              | 'Security and Investigations'
              | 'Semiconductors'
              | 'Shipbuilding'
              | 'Sporting Goods'
              | 'Sports'
              | 'Staffing and Recruiting'
              | 'Supermarkets'
              | 'Telecommunications'
              | 'Textiles'
              | 'Think Tanks'
              | 'Tobacco'
              | 'Translation and Localization'
              | 'Transportation/Trucking/Railroad'
              | 'Utilities'
              | 'Venture Capital & Private Equity'
              | 'Veterinary'
              | 'Warehousing'
              | 'Wholesale'
              | 'Wine and Spirits'
              | 'Wireless'
              | 'Writing and Editing'
              | undefined
            introduction?: string | undefined
            job_position?:
              | 'Executive Management (C-level)'
              | 'VP-level Executive'
              | 'Manager / Director / Supervisor'
              | 'Systems Development'
              | 'Software Development'
              | 'Web Developer'
              | 'IT Consultant'
              | 'Technical Support'
              | 'Sales'
              | 'Other technology related'
              | 'Other non-technology related'
              | 'Student'
              | 'Retired'
              | undefined
            last_name?: string | undefined
            location_importance?: 'Yes' | 'Somewhat' | 'No' | undefined
            'match_tags[]'?: string[] | undefined
            pitch?: string | undefined
            'tags[]'?: string[] | undefined
            targeted_industry?:
              | 'Accounting'
              | 'Airlines/Aviation'
              | 'Alternative Dispute Resolution'
              | 'Alternative Medicine'
              | 'Animation'
              | 'Apparel & Fashion'
              | 'Architecture & Planning'
              | 'Arts and Crafts'
              | 'Automotive'
              | 'Aviation & Aerospace'
              | 'Banking'
              | 'Biotechnology'
              | 'Broadcast Media'
              | 'Building Materials'
              | 'Business Supplies and Equipment'
              | 'Capital Markets'
              | 'Chemicals'
              | 'Civic & Social Organization'
              | 'Civil Engineering'
              | 'Commercial Real Estate'
              | 'Computer & Network Security'
              | 'Computer Games'
              | 'Computer Hardware'
              | 'Computer Networking'
              | 'Computer Software'
              | 'Construction'
              | 'Consumer Electronics'
              | 'Consumer Goods'
              | 'Consumer Services'
              | 'Cosmetics'
              | 'Dairy'
              | 'Defense & Space'
              | 'Design'
              | 'E-Learning'
              | 'Education Management'
              | 'Electrical/Electronic Manufacturing'
              | 'Entertainment'
              | 'Environmental Services'
              | 'Events Services'
              | 'Executive Office'
              | 'Facilities Services'
              | 'Farming'
              | 'Financial Services'
              | 'Fine Art'
              | 'Fishery'
              | 'Food & Beverages'
              | 'Food Production'
              | 'Fund-Raising'
              | 'Furniture'
              | 'Gambling & Casinos'
              | 'Glass, Ceramics & Concrete'
              | 'Government Administration'
              | 'Government Relations'
              | 'Graphic Design'
              | 'Health, Wellness and Fitness'
              | 'Higher Education'
              | 'Hospital & Health Care'
              | 'Hospitality'
              | 'Human Resources'
              | 'Import and Export'
              | 'Individual & Family Services'
              | 'Industrial Automation'
              | 'Information Services'
              | 'Information Technology and Services'
              | 'Insurance'
              | 'International Affairs'
              | 'International Trade and Development'
              | 'Internet'
              | 'Investment Banking'
              | 'Investment Management'
              | 'Judiciary'
              | 'Law Enforcement'
              | 'Law Practice'
              | 'Legal Services'
              | 'Legislative Office'
              | 'Leisure, Travel & Tourism'
              | 'Libraries'
              | 'Logistics and Supply Chain'
              | 'Luxury Goods & Jewelry'
              | 'Machinery'
              | 'Management Consulting'
              | 'Maritime'
              | 'Market Research'
              | 'Marketing and Advertising'
              | 'Mechanical or Industrial Engineering'
              | 'Media Production'
              | 'Medical Devices'
              | 'Medical Practice'
              | 'Mental Health Care'
              | 'Military'
              | 'Mining & Metals'
              | 'Motion Pictures and Film'
              | 'Museums and Institutions'
              | 'Music'
              | 'Nanotechnology'
              | 'Newspapers'
              | 'Non-Profit Organization Management'
              | 'Oil & Energy'
              | 'Online Media'
              | 'Outsourcing/Offshoring'
              | 'Package/Freight Delivery'
              | 'Packaging and Containers'
              | 'Paper & Forest Products'
              | 'Performing Arts'
              | 'Pharmaceuticals'
              | 'Philanthropy'
              | 'Photography'
              | 'Plastics'
              | 'Political Organization'
              | 'Primary/Secondary Education'
              | 'Printing'
              | 'Professional Training & Coaching'
              | 'Program Development'
              | 'Public Policy'
              | 'Public Relations and Communications'
              | 'Public Safety'
              | 'Publishing'
              | 'Railroad Manufacture'
              | 'Ranching'
              | 'Real Estate'
              | 'Recreational Facilities and Services'
              | 'Religious Institutions'
              | 'Renewables & Environment'
              | 'Research'
              | 'Restaurants'
              | 'Retail'
              | 'Security and Investigations'
              | 'Semiconductors'
              | 'Shipbuilding'
              | 'Sporting Goods'
              | 'Sports'
              | 'Staffing and Recruiting'
              | 'Supermarkets'
              | 'Telecommunications'
              | 'Textiles'
              | 'Think Tanks'
              | 'Tobacco'
              | 'Translation and Localization'
              | 'Transportation/Trucking/Railroad'
              | 'Utilities'
              | 'Venture Capital & Private Equity'
              | 'Veterinary'
              | 'Warehousing'
              | 'Wholesale'
              | 'Wine and Spirits'
              | 'Wireless'
              | 'Writing and Editing'
              | undefined
            url?: string | undefined
          }
        }
        output: EndpointPatchUsers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks': {
      $get: { input: {}; output: EndpointGetWebhooks; outputFormat: 'json'; status: 200 }
      $post: {
        input: {
          form: {
            bubbled?: boolean | undefined
            event:
              | 'conversation_message'
              | 'conversation_seen'
              | 'group_update'
              | 'group_message'
              | 'group_seen'
              | 'user_online'
              | 'user_update'
            name: string
            object_id?: number | undefined
            uri: string
          }
        }
        output: EndpointPostWebhooks
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:ID': {
      $delete: {
        input: { param: { ID: number } }
        output: EndpointDeleteWebhooksID
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
