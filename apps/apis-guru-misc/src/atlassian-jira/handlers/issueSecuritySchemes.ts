import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3IssuesecurityschemesIdRoute,
  getRestApi3IssuesecurityschemesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueSecuritySchemesHandler = app
  .openapi(getRestApi3IssuesecurityschemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
