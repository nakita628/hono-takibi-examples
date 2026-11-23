import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribePortfolioShareStatusHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
