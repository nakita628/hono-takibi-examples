import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706RemoveEndpointsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
