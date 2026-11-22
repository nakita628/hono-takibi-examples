import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
