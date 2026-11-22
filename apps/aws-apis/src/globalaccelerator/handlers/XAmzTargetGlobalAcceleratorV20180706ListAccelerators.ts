import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706ListAcceleratorsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
