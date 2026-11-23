import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
