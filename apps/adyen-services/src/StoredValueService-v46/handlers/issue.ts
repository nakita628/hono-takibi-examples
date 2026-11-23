import { OpenAPIHono } from '@hono/zod-openapi'
import { postIssueRoute } from '../routes'

const app = new OpenAPIHono()

export const issueHandler = app.openapi(postIssueRoute, (c) => {
  throw new Error('Not implemented')
})
