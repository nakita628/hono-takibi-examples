import { OpenAPIHono } from '@hono/zod-openapi'
import {
  customerServiceMetricHandler,
  sellerStandardsProfileHandler,
  trafficReportHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customerServiceMetricHandler)
  .route('/', sellerStandardsProfileHandler)
  .route('/', trafficReportHandler)

export default app
