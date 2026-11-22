import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceTagResourceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
