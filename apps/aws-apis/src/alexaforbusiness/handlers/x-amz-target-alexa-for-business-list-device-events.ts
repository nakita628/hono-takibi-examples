import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListDeviceEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessListDeviceEventsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListDeviceEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
