import { OpenAPIHono } from '@hono/zod-openapi'
import { postRevisionsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const revisionsInfoHandler = app.openapi(postRevisionsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
