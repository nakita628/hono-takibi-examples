import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceScanProvisionedProductsHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
