import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
