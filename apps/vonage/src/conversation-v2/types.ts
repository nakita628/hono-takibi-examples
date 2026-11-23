type ConversationDisplayName = string
type ConversationImageUrl = string
type ConversationName = string
type ConversationList = {
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  display_name?: ConversationDisplayName | undefined
  id?: string | undefined
  image_url?: ConversationImageUrl | undefined
  name?: ConversationName | undefined
  timestamp?: { created?: string | undefined } | undefined
}
type TextEvent = {
  body?: { text?: string | undefined } | undefined
  conversation_id?: string | undefined
  type?: string | undefined
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  from?: string | undefined
  id?: number | undefined
  timestamp?: string | undefined
}
type CustomEvent = {
  body?: { [x: string]: unknown } | undefined
  type?: string | undefined
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  from?: string | undefined
  id?: number | undefined
  timestamp?: string | undefined
}
type Member = {
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  display_name?: string | undefined
  id?: string | undefined
  name?: string | undefined
  state?: 'INVITED' | 'JOINED' | undefined
  user_id?: string | undefined
  channel?: { type?: 'app' | undefined } | undefined
  initiator?:
    | {
        invited?: { is_system?: boolean | undefined } | undefined
        joined?: { is_system?: boolean | undefined } | undefined
      }
    | undefined
  media?:
    | {
        audio_settings?:
          | {
              earmuffed?: boolean | undefined
              enabled?: boolean | undefined
              muted?: boolean | undefined
            }
          | undefined
      }
    | undefined
  timestamp?:
    | { invited?: string | undefined; joined?: string | undefined; left?: string | undefined }
    | undefined
}
type MemberInvitedEvent = {
  type?: string | undefined
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  from?: string | undefined
  id?: number | undefined
  timestamp?: string | undefined
  body?: Member | undefined
}
type MemberLeftEvent = {
  type?: string | undefined
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  from?: string | undefined
  id?: number | undefined
  timestamp?: string | undefined
  body?: Member | undefined
}
type AllEvents = TextEvent | CustomEvent | MemberInvitedEvent | MemberLeftEvent
type MemberList = {
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  display_name?: string | undefined
  id?: string | undefined
  name?: string | undefined
  state?: 'INVITED' | 'JOINED' | undefined
  user_id?: string | undefined
}
type UserLinks = { self?: { href?: string | undefined } | undefined }
type UserId = string
type UserName = string
type UserList = {
  _links?: UserLinks | undefined
  id?: UserId | undefined
  name?: UserName | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/conversations': {
      $get: {
        input: {
          query: {
            page_size?: number | undefined
            order?: 'asc' | 'desc' | undefined
            cursor?: string | undefined
            date_start?: string | undefined
            date_end?: string | undefined
          }
        }
        output: {
          _embedded?:
            | { data?: { conversations?: ConversationList[] | undefined } | undefined }
            | undefined
          _links?:
            | {
                first?: { href?: string | undefined } | undefined
                next?: { href?: string | undefined } | undefined
                prev?: { href?: string | undefined } | undefined
                self?: { href?: string | undefined } | undefined
              }
            | undefined
          cursor?: string | undefined
          page_size?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:conversation_id/events': {
      $get: {
        input: { param: { conversation_id: string } } & {
          query: {
            page_size?: number | undefined
            order?: 'asc' | 'desc' | undefined
            cursor?: string | undefined
            start_id?: string | undefined
            end_id?: string | undefined
            event_type?: string | undefined
          }
        }
        output: {
          _embedded?: { data?: { events?: AllEvents[] | undefined } | undefined } | undefined
          _links?:
            | {
                first?: { href?: string | undefined } | undefined
                next?: { href?: string | undefined } | undefined
                prev?: { href?: string | undefined } | undefined
                self?: { href?: string | undefined } | undefined
              }
            | undefined
          page_size?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/:conversation_id/members': {
      $get: {
        input: { param: { conversation_id: string } } & {
          query: {
            page_size?: number | undefined
            order?: 'asc' | 'desc' | undefined
            cursor?: string | undefined
          }
        }
        output: {
          _embedded?: { data?: { members?: MemberList[] | undefined } | undefined } | undefined
          _links?:
            | {
                first?: { href?: string | undefined } | undefined
                next?: { href?: string | undefined } | undefined
                prev?: { href?: string | undefined } | undefined
                self?: { href?: string | undefined } | undefined
              }
            | undefined
          page_size?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $get: {
        input: {
          query: {
            page_size?: number | undefined
            order?: 'asc' | 'desc' | undefined
            cursor?: string | undefined
          }
        }
        output: {
          _embedded?: { data?: { users?: UserList[] | undefined } | undefined } | undefined
          _links?:
            | {
                first?: { href?: string | undefined } | undefined
                next?: { href?: string | undefined } | undefined
                prev?: { href?: string | undefined } | undefined
                self?: { href?: string | undefined } | undefined
              }
            | undefined
          cursor?: string | undefined
          page_size?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
