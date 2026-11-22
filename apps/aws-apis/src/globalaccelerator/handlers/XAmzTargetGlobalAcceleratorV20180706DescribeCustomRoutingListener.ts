import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
