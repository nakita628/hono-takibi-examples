import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdTabsTeamsTabIdRoute,
  getChatsChatIdTabsCountRoute,
  getChatsChatIdTabsRoute,
  getChatsChatIdTabsTeamsTabIdRoute,
  getChatsChatIdTabsTeamsTabIdTeamsAppRoute,
  patchChatsChatIdTabsTeamsTabIdRoute,
  postChatsChatIdTabsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsTeamsTabHandler = app
  .openapi(getChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
