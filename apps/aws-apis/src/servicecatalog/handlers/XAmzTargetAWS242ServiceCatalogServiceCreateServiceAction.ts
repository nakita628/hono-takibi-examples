import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceCreateServiceActionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
