import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRoute,
  postXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportRoute,
} from './routes'
import {
  postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRouteHandler,
  postXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRoute,
    postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRouteHandler,
  )
  .openapi(
    postXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportRoute,
    postXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportRouteHandler,
  )

export default app
