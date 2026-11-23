import { OpenAPIHono } from '@hono/zod-openapi'
import { postEdgeIssueTokenRoute, postEdgeValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const edgeHandler = app
  .openapi(postEdgeValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeIssueTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
