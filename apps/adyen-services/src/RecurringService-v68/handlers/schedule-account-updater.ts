import { OpenAPIHono } from '@hono/zod-openapi'
import { postScheduleAccountUpdaterRoute } from '../routes'

const app = new OpenAPIHono()

export const scheduleAccountUpdaterHandler = app.openapi(postScheduleAccountUpdaterRoute, (c) => {
  throw new Error('Not implemented')
})
