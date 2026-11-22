import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsHandler =
  app.openapi(postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
