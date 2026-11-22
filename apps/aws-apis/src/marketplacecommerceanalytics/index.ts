import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetHandler,
  XAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetHandler)
  .route('/', XAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportHandler)

export default app
