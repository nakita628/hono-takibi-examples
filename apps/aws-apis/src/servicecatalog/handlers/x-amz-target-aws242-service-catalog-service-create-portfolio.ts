import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceCreatePortfolioHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
