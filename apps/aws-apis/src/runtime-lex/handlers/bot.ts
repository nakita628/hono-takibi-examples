import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBotBotNameAliasBotAliasUserUserIdSessionRoute,
  getBotBotNameAliasBotAliasUserUserIdSessionIndexRoute,
  postBotBotNameAliasBotAliasUserUserIdContentContentTypeRoute,
  postBotBotNameAliasBotAliasUserUserIdSessionRoute,
  postBotBotNameAliasBotAliasUserUserIdTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botHandler = app
  .openapi(deleteBotBotNameAliasBotAliasUserUserIdSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotBotNameAliasBotAliasUserUserIdSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotBotNameAliasBotAliasUserUserIdSessionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotBotNameAliasBotAliasUserUserIdContentContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotBotNameAliasBotAliasUserUserIdTextRoute, (c) => {
    throw new Error('Not implemented')
  })
