import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceCreatePortfolioHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
