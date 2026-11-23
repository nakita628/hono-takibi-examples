import { OpenAPIHono } from '@hono/zod-openapi'
import { postRevisionsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const revisionsDeleteHandler = app.openapi(postRevisionsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
