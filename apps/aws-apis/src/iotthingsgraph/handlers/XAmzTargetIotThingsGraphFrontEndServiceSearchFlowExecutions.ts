import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
