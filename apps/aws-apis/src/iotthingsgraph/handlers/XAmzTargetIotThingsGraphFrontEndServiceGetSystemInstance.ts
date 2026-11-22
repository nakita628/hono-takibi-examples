import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
