import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
