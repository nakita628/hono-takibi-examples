import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
