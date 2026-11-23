import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceRejectPortfolioShareHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
