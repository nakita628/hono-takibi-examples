import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
