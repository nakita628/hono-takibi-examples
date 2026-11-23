import { OpenAPIHono } from '@hono/zod-openapi'
import { getGameBoxAdvancedRoute } from '../routes'

const app = new OpenAPIHono()

export const gameHandler = app.openapi(getGameBoxAdvancedRoute, (c) => {
  throw new Error('Not implemented')
})
