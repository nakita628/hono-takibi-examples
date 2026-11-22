import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DescribeListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DescribeListenerHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DescribeListenerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
