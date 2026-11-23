import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706CreateListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706CreateListenerHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706CreateListenerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
