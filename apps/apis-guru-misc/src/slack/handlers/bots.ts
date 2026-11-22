import { OpenAPIHono } from '@hono/zod-openapi'
import { getBotsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const botsHandler = app.openapi(getBotsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
