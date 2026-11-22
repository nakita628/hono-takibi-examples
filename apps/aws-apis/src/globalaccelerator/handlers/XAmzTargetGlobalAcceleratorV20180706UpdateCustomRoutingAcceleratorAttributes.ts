import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesHandler =
  app.openapi(
    postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
