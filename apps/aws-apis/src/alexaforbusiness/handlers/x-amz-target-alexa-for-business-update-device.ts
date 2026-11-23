import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateDeviceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
