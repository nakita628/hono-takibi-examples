import { OpenAPIHono } from '@hono/zod-openapi'
import { getIssuesRoute } from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app.openapi(getIssuesRoute, (c) => {
  throw new Error('Not implemented')
})
