import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
