import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListProvisioningArtifactsHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
