import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
