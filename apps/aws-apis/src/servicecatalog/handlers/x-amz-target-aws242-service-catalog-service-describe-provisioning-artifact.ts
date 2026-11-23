import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeProvisioningArtifactHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
