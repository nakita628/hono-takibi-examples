import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1JobsJobIdRoute,
  getV1JobsJobIdReportsReportIdRoute,
  getV1JobsJobIdReportsRoute,
  getV1JobsJobIdRoute,
  getV1JobsRoute,
  postV1JobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobsJobIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobsJobIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
