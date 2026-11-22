import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
