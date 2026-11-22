import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListServiceActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceListServiceActionsHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListServiceActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
