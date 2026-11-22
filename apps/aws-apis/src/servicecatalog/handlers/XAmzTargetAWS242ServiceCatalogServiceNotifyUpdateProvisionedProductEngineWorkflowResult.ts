import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
