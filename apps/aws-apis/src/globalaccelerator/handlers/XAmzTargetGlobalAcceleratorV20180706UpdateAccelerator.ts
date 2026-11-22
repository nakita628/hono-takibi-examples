import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
