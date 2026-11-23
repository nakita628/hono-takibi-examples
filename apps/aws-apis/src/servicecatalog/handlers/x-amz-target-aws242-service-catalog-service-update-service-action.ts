import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceUpdateServiceActionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
