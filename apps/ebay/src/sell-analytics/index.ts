import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeRoute,
  getSellerStandardsProfileProgramCycleRoute,
  getSellerStandardsProfileRoute,
  getTrafficReportRoute,
} from './routes'
import {
  getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeRouteHandler,
  getSellerStandardsProfileProgramCycleRouteHandler,
  getSellerStandardsProfileRouteHandler,
  getTrafficReportRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeRoute,
    getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeRouteHandler,
  )
  .openapi(getSellerStandardsProfileRoute, getSellerStandardsProfileRouteHandler)
  .openapi(
    getSellerStandardsProfileProgramCycleRoute,
    getSellerStandardsProfileProgramCycleRouteHandler,
  )
  .openapi(getTrafficReportRoute, getTrafficReportRouteHandler)

export default app
