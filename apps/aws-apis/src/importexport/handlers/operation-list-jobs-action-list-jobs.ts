import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationListJobsActionListJobsRoute,
  postOperationListJobsActionListJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationListJobsActionListJobsHandler = app
  .openapi(getOperationListJobsActionListJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationListJobsActionListJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
