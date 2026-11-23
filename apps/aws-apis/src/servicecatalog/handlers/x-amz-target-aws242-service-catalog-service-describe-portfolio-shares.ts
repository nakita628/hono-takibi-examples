import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribePortfolioSharesHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
