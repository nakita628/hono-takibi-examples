type PageSize = number
type RecordIndex = number
type HrefConversation = string
type NameConversation = string
type ConversationId = string
type HrefConversationsList = string
type LinksConversationsList = { self: { href: HrefConversationsList } }
type DisplayName = string
type ImageUrl = string
type ConversationProperties = { ttl?: number | undefined }
type LinksConversation = { self?: { href?: HrefConversation | undefined } | undefined }
type LegId = string
type ChannelType = 'app' | 'phone' | 'sip' | 'websocket' | 'vbc'
type Channel = {
  from?:
    | { type: string; user: string }
    | { number: string; type: string }
    | { type: string; uri?: string | undefined }
    | {
        'content-type': 'audio/l16;rate=8000' | 'audio/l16;rate=16000'
        headers?: { customer_id?: string | undefined } | undefined
        type: string
        uri?: string | undefined
      }
    | { extension: string; type: string }
    | undefined
  leg_id?: LegId | undefined
  leg_ids?: { leg_id?: LegId | undefined }[] | undefined
  to?:
    | unknown
    | { dtmfAnswer?: string | undefined; number: unknown; type: string }
    | unknown
    | unknown
    | unknown
    | undefined
  type?: ChannelType | undefined
}
type MemberId = string
type UserId = string
type Initiator = {
  joined?:
    | {
        isSystem?: boolean | undefined
        member_id?: MemberId | undefined
        user_id?: UserId | undefined
      }
    | undefined
}
type NameUser = string
type MemberState = 'invited' | 'joined' | 'left' | 'unknown'
type Timestamp = string
type TimestampResMember = {
  invited?: Timestamp | undefined
  joined?: Timestamp | undefined
  left?: Timestamp | undefined
}
type TimestampCreated = string
type TimestampDestroyed = string
type TimestampUpdated = string
type TimestampResConversation = {
  created?: TimestampCreated | undefined
  destroyed?: TimestampDestroyed | undefined
  updated?: TimestampUpdated | undefined
}
type EventBody = { [x: string]: unknown }
type HrefEvent = string
type EventId = string
type EventType = string
type EventRetrieved = {
  body: EventBody
  from?: MemberId | undefined
  href: HrefEvent
  id: EventId
  state?: MemberState | undefined
  timestamp: TimestampCreated
  to?: MemberId | undefined
  type: EventType
}
type TimestampResEvent = string
type MemberAction = 'invite' | 'join'
type KnockerId = string
type Media = { [x: string]: unknown }
type MemberIdInviting = string
type HrefMember = string
type Action = 'start' | 'stop'
type EventMethod = string
type EventUrl = string[]
type Format = 'mp3' | 'wav'
type Split = string
type TimestampLegEndTime = string
type TimestampLegStartTime = string
type LegState = 'terminated'
type HrefUser = string
type DisplayNameUser = string
type Href = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/conversations': {
      $get: {
        input: {
          query: {
            date_start?: string | undefined
            date_end?: string | undefined
            page_size?: PageSize | undefined
            record_index?: RecordIndex | undefined
            order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
          }
        }
        output: {
          _embedded: {
            conversations: {
              _links?: { self?: { href?: HrefConversation | undefined } | undefined } | undefined
              name: NameConversation
              uuid: ConversationId
            }[]
          }
          _links: LinksConversationsList
          count: number
          page_size: PageSize
          record_index: RecordIndex
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            display_name?: DisplayName | undefined
            image_url?: ImageUrl | undefined
            name?: NameConversation | undefined
            properties?: ConversationProperties | undefined
          }
        }
        output: { href: HrefConversation; id: ConversationId }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:conversation_id': {
      $delete: {
        input: { param: { conversation_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { conversation_id: string } }
        output: {
          _links?: LinksConversation | undefined
          api_key?: string | undefined
          display_name?: DisplayName | undefined
          members?:
            | {
                channel?: Channel | undefined
                initiator?: Initiator | undefined
                member_id?: MemberId | undefined
                name?: NameUser | undefined
                state?: MemberState | undefined
                timestamp?: TimestampResMember | undefined
                user_id?: UserId | undefined
              }[]
            | undefined
          name?: NameConversation | undefined
          numbers?: { [x: string]: unknown } | undefined
          properties?: { video?: boolean | undefined } | undefined
          sequence_number?: string | undefined
          timestamp?: TimestampResConversation | undefined
          uuid: ConversationId
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { conversation_id: string } } & {
          json: {
            display_name?: DisplayName | undefined
            image_url?: ImageUrl | undefined
            name?: NameConversation | undefined
            properties?: ConversationProperties | undefined
          }
        }
        output: { href: HrefConversation; id: ConversationId }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:conversation_id/events': {
      $get: {
        input: { param: { conversation_id: string } }
        output: EventRetrieved[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { conversation_id: string } } & {
          json: {
            body?: EventBody | undefined
            from: MemberId
            to?: MemberId | undefined
            type: EventType
          }
        }
        output: {
          href?: HrefEvent | undefined
          id?: EventId | undefined
          timestamp?: TimestampResEvent | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/conversations/:conversation_id/events/:event_id': {
      $delete: {
        input: { param: { conversation_id: string; event_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { conversation_id: string; event_id: string } }
        output: EventRetrieved
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:conversation_id/members': {
      $get: {
        input: { param: { conversation_id: string } }
        output: { name: NameUser; state: MemberState; user_id: UserId; user_name: NameUser }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { conversation_id: string } } & {
          json: {
            action?: MemberAction | undefined
            channel: Channel
            knocking_id?: KnockerId | undefined
            media?: Media | undefined
            member_id?: MemberId | undefined
            member_id_inviting?: MemberIdInviting | undefined
            user_id: UserId
          }
        }
        output: {
          channel?: Channel | undefined
          href?: HrefMember | undefined
          id?: MemberId | undefined
          initiator?: Initiator | undefined
          state?: MemberState | undefined
          timestamp?: TimestampResMember | undefined
          user_id?: UserId | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/conversations/:conversation_id/members/:member_id': {
      $delete: {
        input: { param: { conversation_id: string; member_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { conversation_id: string; member_id: string } }
        output: { href?: HrefMember | undefined; id?: MemberId | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { conversation_id: string; member_id: string } } & {
          json: { action?: MemberAction | undefined; channel?: Channel | undefined }
        }
        output: { href?: HrefMember | undefined; id?: MemberId | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:conversation_id/record': {
      $put:
        | {
            input: { param: { conversation_id: string } } & {
              json: {
                action: Action
                event_method?: EventMethod | undefined
                event_url?: EventUrl | undefined
                format?: Format | undefined
                split?: Split | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { conversation_id: string } } & {
              json: {
                action: Action
                event_method?: EventMethod | undefined
                event_url?: EventUrl | undefined
                format?: Format | undefined
                split?: Split | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              json: {
                action: Action
                event_method?: EventMethod | undefined
                event_url?: EventUrl | undefined
                format?: Format | undefined
                split?: Split | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/legs': {
      $get: {
        input: {}
        output: {
          _embedded: {
            legs: {
              _embedded?: { [x: string]: unknown } | undefined
              _links?: { [x: string]: unknown } | undefined
              conversation_uuid?: ConversationId | undefined
              from?: { [x: string]: unknown } | undefined
              start_end?: TimestampLegEndTime | undefined
              start_time?: TimestampLegStartTime | undefined
              state?: LegState | undefined
              to?: { [x: string]: unknown } | undefined
              type?: ChannelType | undefined
              uuid: LegId
            }[]
          }
          _links: { self: { href?: string | undefined } }
          count: number
          page_size: PageSize
          record_index: RecordIndex
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/legs/:leg_id': {
      $delete: {
        input: { param: { leg_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $get: {
        input: {}
        output: {
          href?: HrefUser | undefined
          id?: UserId | undefined
          name?: NameUser | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            display_name?: DisplayNameUser | undefined
            image_url?: ImageUrl | undefined
            name?: NameUser | undefined
          }
        }
        output: { href?: HrefUser | undefined; id?: UserId | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id': {
      $delete: {
        input: { param: { user_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { user_id: string } }
        output: { href?: string | undefined; id?: UserId | undefined; name?: NameUser | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_id: string } } & {
          json: {
            channels?: Channel | undefined
            display_name?: DisplayNameUser | undefined
            image_url?: ImageUrl | undefined
            name?: NameUser | undefined
          }
        }
        output: { href?: HrefUser | undefined; id?: UserId | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/conversations': {
      $get: {
        input: { param: { user_id: string } }
        output: {
          display_name?: DisplayName | undefined
          href?: Href | undefined
          id?: ConversationId | undefined
          image_url?: ImageUrl | undefined
          member_id?: MemberId | undefined
          name?: NameConversation | undefined
          sequence_number?: number | undefined
          state?: MemberState | undefined
          timestamp?: { created?: Timestamp | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
