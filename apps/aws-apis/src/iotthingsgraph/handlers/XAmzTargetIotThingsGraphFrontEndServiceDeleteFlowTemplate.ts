import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
