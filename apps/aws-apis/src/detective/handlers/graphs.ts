import { OpenAPIHono } from '@hono/zod-openapi'
import { postGraphsListRoute } from '../routes'

const app = new OpenAPIHono()

export const graphsHandler = app.openapi(postGraphsListRoute, (c) => {
  throw new Error('Not implemented')
})
