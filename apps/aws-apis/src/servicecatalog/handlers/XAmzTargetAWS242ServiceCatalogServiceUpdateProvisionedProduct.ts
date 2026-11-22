import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
