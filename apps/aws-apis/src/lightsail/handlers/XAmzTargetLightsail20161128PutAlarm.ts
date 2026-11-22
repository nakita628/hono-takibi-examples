import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128PutAlarmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128PutAlarmHandler = app.openapi(
  postXAmzTargetLightsail20161128PutAlarmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
