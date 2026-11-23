import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCashflowReportGetRoute,
  postCashflowReportInsightsGetRoute,
  postCashflowReportRefreshRoute,
  postCashflowReportTransactionsGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cashflowReportHandler = app
  .openapi(postCashflowReportRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCashflowReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCashflowReportTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCashflowReportInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
