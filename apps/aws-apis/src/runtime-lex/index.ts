import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBotBotNameAliasBotAliasUserUserIdSessionRoute,
  getBotBotNameAliasBotAliasUserUserIdSessionIndexRoute,
  postBotBotNameAliasBotAliasUserUserIdContentContentTypeRoute,
  postBotBotNameAliasBotAliasUserUserIdSessionRoute,
  postBotBotNameAliasBotAliasUserUserIdTextRoute,
} from './routes'
import {
  deleteBotBotNameAliasBotAliasUserUserIdSessionRouteHandler,
  getBotBotNameAliasBotAliasUserUserIdSessionIndexRouteHandler,
  postBotBotNameAliasBotAliasUserUserIdContentContentTypeRouteHandler,
  postBotBotNameAliasBotAliasUserUserIdSessionRouteHandler,
  postBotBotNameAliasBotAliasUserUserIdTextRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteBotBotNameAliasBotAliasUserUserIdSessionRoute,
    deleteBotBotNameAliasBotAliasUserUserIdSessionRouteHandler,
  )
  .openapi(
    postBotBotNameAliasBotAliasUserUserIdSessionRoute,
    postBotBotNameAliasBotAliasUserUserIdSessionRouteHandler,
  )
  .openapi(
    getBotBotNameAliasBotAliasUserUserIdSessionIndexRoute,
    getBotBotNameAliasBotAliasUserUserIdSessionIndexRouteHandler,
  )
  .openapi(
    postBotBotNameAliasBotAliasUserUserIdContentContentTypeRoute,
    postBotBotNameAliasBotAliasUserUserIdContentContentTypeRouteHandler,
  )
  .openapi(
    postBotBotNameAliasBotAliasUserUserIdTextRoute,
    postBotBotNameAliasBotAliasUserUserIdTextRouteHandler,
  )

export default app
