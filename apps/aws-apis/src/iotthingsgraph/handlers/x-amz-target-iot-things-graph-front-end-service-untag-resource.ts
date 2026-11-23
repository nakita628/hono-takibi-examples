import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceUntagResourceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
