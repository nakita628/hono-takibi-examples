import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const searchSearchEntityActionsHandler = app.openapi(postSearchQueryRoute, (c) => {
  throw new Error('Not implemented')
})
