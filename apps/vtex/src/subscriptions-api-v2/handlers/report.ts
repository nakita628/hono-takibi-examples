import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportReportStatusReportIdRoute,
  getReportSubscriptionsByDateRoute,
  getReportSubscriptionsByStatusRoute,
  getReportSubscriptionsOrderByDateRoute,
  getReportSubscriptionsScheduledRoute,
  getReportSubscriptionsUpdatedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportHandler = app
  .openapi(getReportReportStatusReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportSubscriptionsByDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportSubscriptionsByStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportSubscriptionsOrderByDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportSubscriptionsScheduledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportSubscriptionsUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
