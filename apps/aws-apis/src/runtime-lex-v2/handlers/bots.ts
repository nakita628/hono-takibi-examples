import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
  getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextRoute,
  postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botsHandler = app
  .openapi(deleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
