import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorHandler =
  app.openapi(postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorRoute, (c) => {
    throw new Error('Not implemented')
  })
