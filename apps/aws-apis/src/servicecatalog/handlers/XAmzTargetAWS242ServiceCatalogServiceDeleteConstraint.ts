import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDeleteConstraintHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
