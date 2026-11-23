import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BotListRoute,
  postV2BotChannelDetachRoute,
  postV2BotChatChatIdControlAcquireRoute,
  postV2BotChatChatIdControlReleaseRoute,
} from './routes'
import {
  getV2BotListRouteHandler,
  postV2BotChannelDetachRouteHandler,
  postV2BotChatChatIdControlAcquireRouteHandler,
  postV2BotChatChatIdControlReleaseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2BotChannelDetachRoute, postV2BotChannelDetachRouteHandler)
  .openapi(postV2BotChatChatIdControlAcquireRoute, postV2BotChatChatIdControlAcquireRouteHandler)
  .openapi(postV2BotChatChatIdControlReleaseRoute, postV2BotChatChatIdControlReleaseRouteHandler)
  .openapi(getV2BotListRoute, getV2BotListRouteHandler)

export default app
