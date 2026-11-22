import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
