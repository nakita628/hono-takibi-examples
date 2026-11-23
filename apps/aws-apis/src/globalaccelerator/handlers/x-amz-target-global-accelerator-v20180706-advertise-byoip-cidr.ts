import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
