import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
