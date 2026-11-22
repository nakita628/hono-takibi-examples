import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
