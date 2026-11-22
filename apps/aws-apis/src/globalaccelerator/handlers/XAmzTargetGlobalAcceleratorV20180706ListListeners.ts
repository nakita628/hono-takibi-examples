import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListListenersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706ListListenersHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ListListenersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
