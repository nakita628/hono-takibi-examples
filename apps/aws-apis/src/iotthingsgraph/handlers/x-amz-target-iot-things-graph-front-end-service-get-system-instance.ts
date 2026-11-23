import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
