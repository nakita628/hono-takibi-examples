import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeProvisionedProductPlanHandler =
  app.openapi(postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
