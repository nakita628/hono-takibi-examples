import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
