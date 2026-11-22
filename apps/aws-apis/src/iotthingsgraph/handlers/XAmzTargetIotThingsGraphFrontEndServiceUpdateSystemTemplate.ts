import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
