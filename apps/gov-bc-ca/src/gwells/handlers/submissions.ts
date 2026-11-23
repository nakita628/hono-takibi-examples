import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubmissionsOptionsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const submissionsHandler = app.openapi(getSubmissionsOptionsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
