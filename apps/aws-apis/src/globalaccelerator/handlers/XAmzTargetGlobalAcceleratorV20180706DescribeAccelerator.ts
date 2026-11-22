import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
