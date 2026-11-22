import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScheduleScheduleIdRoute,
  getProjectProjectSlugScheduleRoute,
  getScheduleScheduleIdRoute,
  patchScheduleScheduleIdRoute,
  postProjectProjectSlugScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduleHandler = app
  .openapi(postProjectProjectSlugScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
