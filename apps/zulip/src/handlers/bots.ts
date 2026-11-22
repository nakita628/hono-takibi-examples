import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBotStorageRoute, getBotStorageRoute, putBotStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const botsHandler = app
  .openapi(getBotStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
