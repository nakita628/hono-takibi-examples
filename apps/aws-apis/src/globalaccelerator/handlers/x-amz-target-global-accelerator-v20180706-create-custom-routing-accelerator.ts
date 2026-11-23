import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorHandler =
  app.openapi(postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorRoute, (c) => {
    throw new Error('Not implemented')
  })
