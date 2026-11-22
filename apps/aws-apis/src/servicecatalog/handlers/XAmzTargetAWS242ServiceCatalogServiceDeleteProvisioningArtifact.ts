import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
