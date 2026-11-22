import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706ListByoipCidrsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
