import { OpenAPIHono } from '@hono/zod-openapi'
import { getIssuesProjectIdAlertKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app.openapi(getIssuesProjectIdAlertKeyRoute, (c) => {
  throw new Error('Not implemented')
})
