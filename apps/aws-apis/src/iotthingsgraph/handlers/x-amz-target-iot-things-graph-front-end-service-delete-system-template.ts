import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
