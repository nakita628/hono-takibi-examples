import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListDeviceEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessListDeviceEventsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListDeviceEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
