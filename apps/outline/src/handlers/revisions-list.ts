import { OpenAPIHono } from '@hono/zod-openapi'
import { postRevisionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const revisionsListHandler = app.openapi(postRevisionsListRoute, (c) => {
  throw new Error('Not implemented')
})
