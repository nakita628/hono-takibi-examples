import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreateProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceCreateProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreateProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
