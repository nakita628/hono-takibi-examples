import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdateProductRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceUpdateProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdateProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
