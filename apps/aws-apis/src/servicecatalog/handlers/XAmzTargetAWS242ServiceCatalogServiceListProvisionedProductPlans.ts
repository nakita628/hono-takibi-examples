import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
