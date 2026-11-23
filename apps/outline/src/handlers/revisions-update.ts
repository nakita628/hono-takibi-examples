import { OpenAPIHono } from '@hono/zod-openapi'
import { postRevisionsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const revisionsUpdateHandler = app.openapi(postRevisionsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
