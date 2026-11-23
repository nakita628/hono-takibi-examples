import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBillableMetricsCodeRoute,
  getBillableMetricsCodeRoute,
  getBillableMetricsRoute,
  postBillableMetricsEvaluateExpressionRoute,
  postBillableMetricsRoute,
  putBillableMetricsCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billableMetricsHandler = app
  .openapi(postBillableMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillableMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillableMetricsEvaluateExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillableMetricsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBillableMetricsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillableMetricsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
