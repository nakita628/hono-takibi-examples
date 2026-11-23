import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceUpdateConstraintHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
