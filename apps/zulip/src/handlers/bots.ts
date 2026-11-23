import { OpenAPIHono } from '@hono/zod-openapi'
import { getBotsBotIdApiKeyRoute, postBotsBotIdApiKeyRegenerateRoute } from '../routes'

const app = new OpenAPIHono()

export const botsHandler = app
  .openapi(getBotsBotIdApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdApiKeyRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
