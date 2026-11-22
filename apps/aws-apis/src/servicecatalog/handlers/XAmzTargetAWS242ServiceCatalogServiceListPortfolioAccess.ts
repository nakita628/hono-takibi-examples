import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
