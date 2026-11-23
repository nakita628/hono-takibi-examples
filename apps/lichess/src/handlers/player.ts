import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlayerRoute } from '../routes'

const app = new OpenAPIHono()

export const playerHandler = app.openapi(getPlayerRoute, (c) => {
  throw new Error('Not implemented')
})
