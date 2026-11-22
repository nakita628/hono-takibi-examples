import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersHandler =
  app.openapi(postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
