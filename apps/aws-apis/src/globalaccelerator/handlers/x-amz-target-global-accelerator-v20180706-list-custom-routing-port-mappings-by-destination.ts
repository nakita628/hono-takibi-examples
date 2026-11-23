import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationHandler =
  app.openapi(
    postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
