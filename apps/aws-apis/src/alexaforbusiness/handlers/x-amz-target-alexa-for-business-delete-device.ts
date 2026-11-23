import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDeleteDeviceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
