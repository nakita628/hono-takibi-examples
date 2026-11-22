import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionManagedIssuesIssueIdRoute, getApiVersionManagedIssuesRoute } from '../routes'

const app = new OpenAPIHono()

export const managedIssuesHandler = app
  .openapi(getApiVersionManagedIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
