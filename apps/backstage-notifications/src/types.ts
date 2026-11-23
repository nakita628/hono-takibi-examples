type OrderField = string | string[]
type NotificationSeverity = 'critical' | 'high' | 'normal' | 'low'
type NotificationResponsePayload = {
  title: string
  description?: (string | null) | undefined
  link?: (string | null) | undefined
  severity?: NotificationSeverity | undefined
  topic?: (string | null) | undefined
  scope?: (string | null) | undefined
  icon?: (string | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type Notification = {
  id: string
  user: string | null
  created: string
  saved?: (string | null) | undefined
  read?: (string | null) | undefined
  updated?: (string | null) | undefined
  origin: string
  payload: NotificationResponsePayload
}
type ListNotificationsResponse = { totalCount: number; notifications: Notification[] }
type Error = {
  error: { name: string; message: string }
  request: { method: string; url: string }
  response: { statusCode: number }
}
type EntityRef = string | string[]
type NotificationRecipients =
  | { type: 'entity'; entityRef: EntityRef; excludeEntityRef?: EntityRef | undefined }
  | { type: 'broadcast' }
type NotificationPayload = {
  title: string
  description?: string | undefined
  link?: string | undefined
  severity?: NotificationSeverity | undefined
  topic?: string | undefined
  scope?: string | undefined
  icon?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type NotificationSendOptions = { recipients: NotificationRecipients; payload: NotificationPayload }
type UpdateNotificationsRequest = {
  ids: string[]
  read?: boolean | undefined
  saved?: boolean | undefined
}
type NotificationStatus = { unread: number; read: number }
type TopicSetting = { id: string; enabled: boolean }
type OriginSetting = { id: string; enabled: boolean; topics?: TopicSetting[] | undefined }
type ChannelSetting = { id: string; enabled?: boolean | undefined; origins: OriginSetting[] }
type NotificationSettings = { channels: ChannelSetting[] }
type GetTopicsResponse = { topics: string[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderField?: OrderField | undefined
                topic?: string | undefined
                search?: string | undefined
                read?: 'true' | 'false' | undefined
                saved?: 'true' | 'false' | undefined
                createdAfter?: string | undefined
                minimumSeverity?: NotificationSeverity | undefined
              }
            }
            output: ListNotificationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderField?: OrderField | undefined
                topic?: string | undefined
                search?: string | undefined
                read?: 'true' | 'false' | undefined
                saved?: 'true' | 'false' | undefined
                createdAfter?: string | undefined
                minimumSeverity?: NotificationSeverity | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: NotificationSendOptions }
            output: Notification[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationSendOptions }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/notifications': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderField?: OrderField | undefined
                topic?: string | undefined
                search?: string | undefined
                read?: 'true' | 'false' | undefined
                saved?: 'true' | 'false' | undefined
                createdAfter?: string | undefined
                minimumSeverity?: NotificationSeverity | undefined
              }
            }
            output: ListNotificationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderField?: OrderField | undefined
                topic?: string | undefined
                search?: string | undefined
                read?: 'true' | 'false' | undefined
                saved?: 'true' | 'false' | undefined
                createdAfter?: string | undefined
                minimumSeverity?: NotificationSeverity | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: NotificationSendOptions }
            output: Notification[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationSendOptions }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/update': {
      $post:
        | {
            input: { json: UpdateNotificationsRequest }
            output: Notification[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateNotificationsRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/notifications/update': {
      $post:
        | {
            input: { json: UpdateNotificationsRequest }
            output: Notification[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateNotificationsRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/status': {
      $get:
        | { input: {}; output: NotificationStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings': {
      $get:
        | { input: {}; output: NotificationSettings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: NotificationSettings }
            output: NotificationSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationSettings }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/topics': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                read?: 'true' | 'false' | undefined
                saved?: 'true' | 'false' | undefined
                createdAfter?: string | undefined
                minimumSeverity?: NotificationSeverity | undefined
              }
            }
            output: GetTopicsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                read?: 'true' | 'false' | undefined
                saved?: 'true' | 'false' | undefined
                createdAfter?: string | undefined
                minimumSeverity?: NotificationSeverity | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Notification
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/notifications/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Notification
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes
