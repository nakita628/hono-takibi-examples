import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
  getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextRoute,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeRoute,
} from './routes'
import {
  deleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRouteHandler,
  getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRouteHandler,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRouteHandler,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextRouteHandler,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
    deleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRouteHandler,
  )
  .openapi(
    getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
    getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRouteHandler,
  )
  .openapi(
    postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
    postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRouteHandler,
  )
  .openapi(
    postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextRoute,
    postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextRouteHandler,
  )
  .openapi(
    postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeRoute,
    postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeRouteHandler,
  )

export default app
