import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListResourcesForTagOptionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
