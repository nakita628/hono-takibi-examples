import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceUpdateProvisionedProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
