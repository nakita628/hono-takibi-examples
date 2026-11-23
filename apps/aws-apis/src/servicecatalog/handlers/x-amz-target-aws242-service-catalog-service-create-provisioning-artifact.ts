import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceCreateProvisioningArtifactHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
