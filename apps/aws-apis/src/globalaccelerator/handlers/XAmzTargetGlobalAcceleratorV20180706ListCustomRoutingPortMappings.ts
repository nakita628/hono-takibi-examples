import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
