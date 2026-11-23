import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDeleteServiceActionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
