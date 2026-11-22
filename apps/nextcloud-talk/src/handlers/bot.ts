import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBotTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBotTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
