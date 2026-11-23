import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShuttleJobSchedulesShuttleJobScheduleIdRoute,
  getShuttleJobSchedulesRoute,
  getShuttleJobSchedulesShuttleJobScheduleIdRoute,
  postShuttleJobSchedulesRoute,
  putShuttleJobSchedulesShuttleJobScheduleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shuttleJobSchedulesHandler = app
  .openapi(getShuttleJobSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleJobSchedulesShuttleJobScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttleJobSchedulesShuttleJobScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttleJobSchedulesShuttleJobScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
