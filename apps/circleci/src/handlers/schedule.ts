import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScheduleScheduleIdRoute,
  getScheduleScheduleIdRoute,
  patchScheduleScheduleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduleHandler = app
  .openapi(getScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
