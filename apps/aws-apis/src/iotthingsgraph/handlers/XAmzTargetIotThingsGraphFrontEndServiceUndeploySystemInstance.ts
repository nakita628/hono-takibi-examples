import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
