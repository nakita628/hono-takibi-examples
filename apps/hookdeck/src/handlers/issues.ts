import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssuesIdRoute,
  getIssuesCountRoute,
  getIssuesIdRoute,
  getIssuesRoute,
  putIssuesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app
  .openapi(getIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssuesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
