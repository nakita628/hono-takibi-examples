import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
