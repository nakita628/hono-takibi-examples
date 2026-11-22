import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessGetDeviceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
