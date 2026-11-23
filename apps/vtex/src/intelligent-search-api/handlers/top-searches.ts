import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopSearchesRoute } from '../routes'

const app = new OpenAPIHono()

export const topSearchesHandler = app.openapi(getTopSearchesRoute, (c) => {
  throw new Error('Not implemented')
})
