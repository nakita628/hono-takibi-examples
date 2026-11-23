import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceExecuteProvisionedProductPlanHandler =
  app.openapi(postXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
