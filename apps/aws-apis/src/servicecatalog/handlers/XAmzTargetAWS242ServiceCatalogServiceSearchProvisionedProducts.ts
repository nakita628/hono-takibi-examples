import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
