import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
