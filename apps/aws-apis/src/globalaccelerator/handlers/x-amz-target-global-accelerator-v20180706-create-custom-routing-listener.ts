import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
