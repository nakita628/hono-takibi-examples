import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteDeviceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
