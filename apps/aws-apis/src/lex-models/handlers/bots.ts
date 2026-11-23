import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBotsBotNameAliasesAliasNameChannelsNameRoute,
  deleteBotsBotNameAliasesNameRoute,
  deleteBotsBotNameUtterancesUserIdRoute,
  deleteBotsNameRoute,
  deleteBotsNameVersionsVersionRoute,
  getBotsBotNameAliasesAliasNameChannelsIndexRoute,
  getBotsBotNameAliasesAliasNameChannelsNameRoute,
  getBotsBotNameAliasesIndexRoute,
  getBotsBotNameAliasesNameRoute,
  getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeRoute,
  getBotsIndexRoute,
  getBotsNameVersionsIndexRoute,
  getBotsNameVersionsVersionoraliasRoute,
  postBotsNameVersionsRoute,
  putBotsBotNameAliasesNameRoute,
  putBotsNameVersionsLATESTRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botsHandler = app
  .openapi(postBotsNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotNameAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotNameAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotNameAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotNameAliasesAliasNameChannelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotNameAliasesAliasNameChannelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotNameUtterancesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsNameVersionsVersionoraliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotNameAliasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotNameAliasesAliasNameChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsNameVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsNameVersionsLATESTRoute, (c) => {
    throw new Error('Not implemented')
  })
