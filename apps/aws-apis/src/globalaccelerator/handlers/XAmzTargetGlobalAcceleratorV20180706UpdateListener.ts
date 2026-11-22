import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706UpdateListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706UpdateListenerHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706UpdateListenerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
