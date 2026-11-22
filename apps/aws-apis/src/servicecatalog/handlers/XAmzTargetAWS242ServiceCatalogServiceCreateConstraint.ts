import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreateConstraintRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceCreateConstraintHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreateConstraintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
