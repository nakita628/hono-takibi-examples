import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListServiceActionsForProvisioningArtifactHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
