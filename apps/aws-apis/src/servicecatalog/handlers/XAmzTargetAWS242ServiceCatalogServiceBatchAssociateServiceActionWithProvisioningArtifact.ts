import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
