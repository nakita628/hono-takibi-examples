import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DescribeEndpointHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
