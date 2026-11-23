import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetHandler,
  xAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetHandler)
  .route('/', xAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportHandler)

export default app
