import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceUpdatePortfolioShareHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
