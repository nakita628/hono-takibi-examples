import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetHandler = app.openapi(
  postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
