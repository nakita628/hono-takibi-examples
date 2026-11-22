import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
