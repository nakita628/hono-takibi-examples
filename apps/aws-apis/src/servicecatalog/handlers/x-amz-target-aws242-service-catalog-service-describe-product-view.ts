import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeProductViewHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
