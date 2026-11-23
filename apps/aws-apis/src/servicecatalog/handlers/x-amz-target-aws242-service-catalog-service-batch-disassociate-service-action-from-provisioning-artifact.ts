import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
