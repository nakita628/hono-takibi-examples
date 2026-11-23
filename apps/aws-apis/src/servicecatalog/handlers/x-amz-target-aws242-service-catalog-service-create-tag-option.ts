import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceCreateTagOptionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
