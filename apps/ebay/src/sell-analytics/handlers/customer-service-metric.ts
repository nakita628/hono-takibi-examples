import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const customerServiceMetricHandler = app.openapi(
  getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
