import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiIssuesIdRoute,
  getApiIssuesIdRoute,
  getApiIssuesRoute,
  patchApiIssuesIdRoute,
  postApiIssuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app
  .openapi(getApiIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
