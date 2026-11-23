import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListPortfoliosForProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
