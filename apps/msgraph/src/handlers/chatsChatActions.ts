import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChatsChatIdCompleteMigrationRoute,
  postChatsChatIdHideForUserRoute,
  postChatsChatIdMarkChatReadForUserRoute,
  postChatsChatIdMarkChatUnreadForUserRoute,
  postChatsChatIdRemoveAllAccessForUserRoute,
  postChatsChatIdSendActivityNotificationRoute,
  postChatsChatIdStartMigrationRoute,
  postChatsChatIdUnhideForUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsChatActionsHandler = app
  .openapi(postChatsChatIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdHideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMarkChatReadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMarkChatUnreadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdRemoveAllAccessForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdUnhideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
