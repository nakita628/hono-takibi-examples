import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getChatsChatIdPermissionGrantsCountRoute,
  getChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getChatsChatIdPermissionGrantsRoute,
  patchChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  postChatsChatIdPermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsResourceSpecificPermissionGrantHandler = app
  .openapi(getChatsChatIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
