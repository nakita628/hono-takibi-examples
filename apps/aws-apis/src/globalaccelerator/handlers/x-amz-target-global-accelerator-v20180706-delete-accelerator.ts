import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
