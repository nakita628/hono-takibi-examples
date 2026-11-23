import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceAcceptPortfolioShareHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
