import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
