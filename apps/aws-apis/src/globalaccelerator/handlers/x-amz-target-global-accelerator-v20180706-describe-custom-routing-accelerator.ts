import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorHandler =
  app.openapi(
    postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
