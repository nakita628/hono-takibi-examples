import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupHandler =
  app.openapi(
    postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
