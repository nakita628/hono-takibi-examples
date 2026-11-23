import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceCopyProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceCopyProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceCopyProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
