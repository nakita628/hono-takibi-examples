import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorHandler =
  app.openapi(postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorRoute, (c) => {
    throw new Error('Not implemented')
  })
