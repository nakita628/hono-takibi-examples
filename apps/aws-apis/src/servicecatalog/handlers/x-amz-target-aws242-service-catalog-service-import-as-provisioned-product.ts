import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceImportAsProvisionedProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
