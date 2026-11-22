import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
