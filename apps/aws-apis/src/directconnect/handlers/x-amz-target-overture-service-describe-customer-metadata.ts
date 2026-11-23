import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeCustomerMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeCustomerMetadataHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeCustomerMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
