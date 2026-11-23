import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BotListRoute,
  postV2BotChannelDetachRoute,
  postV2BotChatChatIdControlAcquireRoute,
  postV2BotChatChatIdControlReleaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2BotChannelDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotChatChatIdControlAcquireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotChatChatIdControlReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotListRoute, (c) => {
    throw new Error('Not implemented')
  })
