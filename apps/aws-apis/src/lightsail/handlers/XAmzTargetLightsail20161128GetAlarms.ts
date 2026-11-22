import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetAlarmsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetAlarmsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetAlarmsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
