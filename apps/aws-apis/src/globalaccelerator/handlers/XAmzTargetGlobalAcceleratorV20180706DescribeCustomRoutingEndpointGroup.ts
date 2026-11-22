import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupHandler =
  app.openapi(
    postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
