import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesHandler =
  app.openapi(
    postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
