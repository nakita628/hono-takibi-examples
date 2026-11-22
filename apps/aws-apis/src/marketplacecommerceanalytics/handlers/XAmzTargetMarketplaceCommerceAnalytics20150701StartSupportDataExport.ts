import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportHandler =
  app.openapi(
    postXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
