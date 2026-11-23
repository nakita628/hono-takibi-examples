import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeTagOptionHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
