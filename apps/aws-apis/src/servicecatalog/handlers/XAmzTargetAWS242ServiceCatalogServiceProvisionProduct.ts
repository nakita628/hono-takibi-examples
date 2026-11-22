import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceProvisionProductRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceProvisionProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceProvisionProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
