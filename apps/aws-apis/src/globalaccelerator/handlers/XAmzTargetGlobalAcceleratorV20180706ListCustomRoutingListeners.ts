import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
