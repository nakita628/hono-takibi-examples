import { OpenAPIHono } from '@hono/zod-openapi'
import { postDecisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const decisionsHandler = app.openapi(postDecisionsRoute, (c) => {
  throw new Error('Not implemented')
})
