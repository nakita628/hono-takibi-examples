import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DeleteListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706DeleteListenerHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DeleteListenerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
