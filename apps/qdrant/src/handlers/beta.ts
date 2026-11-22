import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteIssuesRoute, getIssuesRoute } from '../routes'

const app = new OpenAPIHono()

export const betaHandler = app
  .openapi(getIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
