import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeleteProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDeleteProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeleteProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
