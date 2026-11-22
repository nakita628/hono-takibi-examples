import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128TestAlarmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128TestAlarmHandler = app.openapi(
  postXAmzTargetLightsail20161128TestAlarmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
