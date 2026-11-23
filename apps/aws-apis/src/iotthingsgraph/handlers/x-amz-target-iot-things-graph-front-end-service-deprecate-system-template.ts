import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
