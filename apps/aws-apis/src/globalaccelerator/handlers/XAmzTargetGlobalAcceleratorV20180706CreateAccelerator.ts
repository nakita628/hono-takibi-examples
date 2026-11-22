import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706CreateAcceleratorHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
