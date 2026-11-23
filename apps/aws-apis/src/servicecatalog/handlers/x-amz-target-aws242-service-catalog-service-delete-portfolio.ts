import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDeletePortfolioHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
