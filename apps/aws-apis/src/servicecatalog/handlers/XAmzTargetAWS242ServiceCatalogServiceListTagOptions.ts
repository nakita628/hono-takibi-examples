import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListTagOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceListTagOptionsHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListTagOptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
