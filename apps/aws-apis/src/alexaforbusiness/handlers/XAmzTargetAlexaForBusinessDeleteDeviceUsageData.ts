import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteDeviceUsageDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteDeviceUsageDataHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteDeviceUsageDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
