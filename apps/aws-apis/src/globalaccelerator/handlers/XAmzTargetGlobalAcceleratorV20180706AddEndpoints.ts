import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706AddEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706AddEndpointsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706AddEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
