import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDeleteTagOptionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
