import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
