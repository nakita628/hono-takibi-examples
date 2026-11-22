import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
