import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListProvisioningArtifactsForServiceActionHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
