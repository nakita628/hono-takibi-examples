import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
