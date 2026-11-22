import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706TagResourceHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
