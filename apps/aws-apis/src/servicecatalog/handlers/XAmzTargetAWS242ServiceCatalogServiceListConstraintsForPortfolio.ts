import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
