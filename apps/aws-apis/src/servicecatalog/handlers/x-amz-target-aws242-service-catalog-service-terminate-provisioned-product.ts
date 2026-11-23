import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceTerminateProvisionedProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
