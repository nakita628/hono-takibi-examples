import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
