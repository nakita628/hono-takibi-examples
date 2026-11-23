import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
