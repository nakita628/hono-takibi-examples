import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessRegisterAVSDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessRegisterAvsDeviceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessRegisterAVSDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
