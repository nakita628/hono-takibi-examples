import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDescribeConstraintHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
