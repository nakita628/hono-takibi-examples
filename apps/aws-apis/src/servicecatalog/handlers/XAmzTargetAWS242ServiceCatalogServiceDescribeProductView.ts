import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDescribeProductViewHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
