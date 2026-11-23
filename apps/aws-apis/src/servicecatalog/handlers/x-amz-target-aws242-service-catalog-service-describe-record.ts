import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeRecordHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeRecordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
