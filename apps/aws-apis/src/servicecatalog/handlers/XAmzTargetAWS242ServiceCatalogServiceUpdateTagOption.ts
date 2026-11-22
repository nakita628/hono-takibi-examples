import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
