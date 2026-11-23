import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListStackInstancesForProvisionedProductHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
