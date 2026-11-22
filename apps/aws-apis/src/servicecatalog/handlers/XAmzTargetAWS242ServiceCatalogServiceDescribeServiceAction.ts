import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
