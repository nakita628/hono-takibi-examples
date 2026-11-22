import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
