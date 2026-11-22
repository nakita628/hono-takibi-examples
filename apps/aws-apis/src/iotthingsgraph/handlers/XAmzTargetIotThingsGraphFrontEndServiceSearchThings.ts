import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceSearchThingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceSearchThingsHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceSearchThingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
