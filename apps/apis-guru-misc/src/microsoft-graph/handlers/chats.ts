import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChatsChatIdInstalledAppsCountRoute,
  getChatsChatIdMembersCountRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsCountRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getChatsChatIdMessagesChatMessageIdRepliesCountRoute,
  getChatsChatIdMessagesCountRoute,
  getChatsChatIdPinnedMessagesCountRoute,
  getChatsChatIdTabsCountRoute,
  getChatsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsHandler = app
  .openapi(getChatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getChatsChatIdPinnedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
