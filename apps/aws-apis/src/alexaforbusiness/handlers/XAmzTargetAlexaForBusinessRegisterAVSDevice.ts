import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessRegisterAVSDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessRegisterAVSDeviceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessRegisterAVSDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
