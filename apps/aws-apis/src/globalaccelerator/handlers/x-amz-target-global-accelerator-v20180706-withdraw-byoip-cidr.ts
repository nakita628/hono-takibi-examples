import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
