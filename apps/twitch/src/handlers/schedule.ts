import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScheduleSegmentRoute,
  getScheduleIcalendarRoute,
  getScheduleRoute,
  patchScheduleSegmentRoute,
  patchScheduleSettingsRoute,
  postScheduleSegmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduleHandler = app
  .openapi(getScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduleIcalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScheduleSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScheduleSegmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScheduleSegmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScheduleSegmentRoute, (c) => {
    throw new Error('Not implemented')
  })
