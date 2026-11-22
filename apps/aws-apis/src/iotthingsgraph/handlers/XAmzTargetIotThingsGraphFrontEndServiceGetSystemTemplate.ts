import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
