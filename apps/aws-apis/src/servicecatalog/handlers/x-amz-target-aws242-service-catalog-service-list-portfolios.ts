import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListPortfoliosRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListPortfoliosHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListPortfoliosRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
