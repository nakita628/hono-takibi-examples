import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceCreateProvisionedProductPlanHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
