import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDeleteProvisioningArtifactHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
