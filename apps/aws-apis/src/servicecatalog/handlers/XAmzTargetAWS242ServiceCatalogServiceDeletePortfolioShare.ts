import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
