import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
