import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceSearchProductsAsAdminHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
