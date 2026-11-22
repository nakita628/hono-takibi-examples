import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
