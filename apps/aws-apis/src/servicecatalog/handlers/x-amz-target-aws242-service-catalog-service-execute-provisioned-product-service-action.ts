import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceExecuteProvisionedProductServiceActionHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
