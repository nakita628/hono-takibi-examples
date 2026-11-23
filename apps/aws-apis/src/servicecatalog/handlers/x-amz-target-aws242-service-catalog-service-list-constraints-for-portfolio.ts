import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListConstraintsForPortfolioHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
