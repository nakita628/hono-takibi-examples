import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProductRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDescribeProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
