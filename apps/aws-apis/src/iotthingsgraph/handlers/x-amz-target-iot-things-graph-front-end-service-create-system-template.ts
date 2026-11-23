import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
