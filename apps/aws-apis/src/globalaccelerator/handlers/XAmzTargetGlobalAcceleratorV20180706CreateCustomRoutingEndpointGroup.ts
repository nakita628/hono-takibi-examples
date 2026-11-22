import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupHandler =
  app.openapi(
    postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
