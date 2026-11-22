import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
