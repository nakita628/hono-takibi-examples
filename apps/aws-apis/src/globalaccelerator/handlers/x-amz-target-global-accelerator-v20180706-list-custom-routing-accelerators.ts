import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
