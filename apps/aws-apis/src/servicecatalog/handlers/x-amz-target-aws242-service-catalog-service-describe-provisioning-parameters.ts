import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeProvisioningParametersHandler =
  app.openapi(postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
