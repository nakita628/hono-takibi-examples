import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribePortfolioHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
