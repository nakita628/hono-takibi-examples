import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceUntagResourceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
