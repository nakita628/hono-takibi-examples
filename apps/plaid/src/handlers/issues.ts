import { OpenAPIHono } from '@hono/zod-openapi'
import { postIssuesGetRoute, postIssuesSearchRoute, postIssuesSubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app
  .openapi(postIssuesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssuesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssuesSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
