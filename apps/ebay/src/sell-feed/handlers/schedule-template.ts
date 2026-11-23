import { OpenAPIHono } from '@hono/zod-openapi'
import { getScheduleTemplateRoute, getScheduleTemplateScheduleTemplateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const scheduleTemplateHandler = app
  .openapi(getScheduleTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduleTemplateScheduleTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
