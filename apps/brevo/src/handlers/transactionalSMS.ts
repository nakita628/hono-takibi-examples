import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionalSMSStatisticsAggregatedReportRoute,
  getTransactionalSMSStatisticsEventsRoute,
  getTransactionalSMSStatisticsReportsRoute,
  postTransactionalSMSSendRoute,
  postTransactionalSMSSmsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionalSMSHandler = app
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
