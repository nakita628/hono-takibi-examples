import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
