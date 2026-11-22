import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
