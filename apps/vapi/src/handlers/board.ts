import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportingBoardIdRoute,
  getReportingBoardDefaultMetricsOverviewRoute,
  getReportingBoardIdRoute,
  getReportingBoardRoute,
  patchReportingBoardIdRoute,
  postReportingBoardRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boardHandler = app
  .openapi(postReportingBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportingBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportingBoardDefaultMetricsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportingBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportingBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportingBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
