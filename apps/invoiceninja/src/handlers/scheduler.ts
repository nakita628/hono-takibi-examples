import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SchedulerRoute } from '../routes'

const app = new OpenAPIHono()

export const schedulerHandler = app.openapi(getApiV1SchedulerRoute, (c) => {
  throw new Error('Not implemented')
})
