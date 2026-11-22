import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetHandler = app.openapi(
  postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
