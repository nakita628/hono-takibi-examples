import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceCreatePortfolioShareHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
