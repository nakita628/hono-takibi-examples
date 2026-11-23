import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiJobsSubmissionIdRoute,
  getApiJobsRoute,
  getApiJobsSubmissionIdLogsRoute,
  getApiJobsSubmissionIdLogsTailRoute,
  getApiJobsSubmissionIdRoute,
  getApiVersionRoute,
  postApiJobsRoute,
  postApiJobsSubmissionIdStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiJobsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsSubmissionIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsSubmissionIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsSubmissionIdLogsTailRoute, (c) => {
    throw new Error('Not implemented')
  })
