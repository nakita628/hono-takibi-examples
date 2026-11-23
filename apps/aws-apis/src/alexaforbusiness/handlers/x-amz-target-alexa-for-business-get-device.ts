import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetDeviceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
