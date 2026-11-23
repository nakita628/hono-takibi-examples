import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceSearchProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceSearchProductsHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceSearchProductsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
