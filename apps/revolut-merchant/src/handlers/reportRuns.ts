import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiReportRunsReportRunIdFileRoute,
  getApiReportRunsReportRunIdRoute,
  postApiReportRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportRunsHandler = app
  .openapi(postApiReportRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportRunsReportRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportRunsReportRunIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
