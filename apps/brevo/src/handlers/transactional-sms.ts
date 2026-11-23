import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionalSMSStatisticsAggregatedReportRoute,
  getTransactionalSMSStatisticsEventsRoute,
  getTransactionalSMSStatisticsReportsRoute,
  getTransactionalSMSTemplatesRoute,
  postTransactionalSMSSendRoute,
  postTransactionalSMSSmsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionalSmsHandler = app
  .openapi(postTransactionalSMSSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionalSMSSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionalSMSStatisticsAggregatedReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionalSMSStatisticsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionalSMSStatisticsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionalSMSTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
