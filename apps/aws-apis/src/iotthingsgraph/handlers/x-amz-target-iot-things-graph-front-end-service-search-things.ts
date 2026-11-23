import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceSearchThingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceSearchThingsHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceSearchThingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
