import { OpenAPIHono } from '@hono/zod-openapi'
import { getRevisionsIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const revisionsHandler = app.openapi(getRevisionsIdsRoute, (c) => {
  throw new Error('Not implemented')
})
