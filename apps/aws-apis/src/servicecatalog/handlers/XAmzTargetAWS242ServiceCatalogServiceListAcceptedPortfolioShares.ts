import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
