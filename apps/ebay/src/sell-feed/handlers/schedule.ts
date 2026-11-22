import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScheduleScheduleIdRoute,
  getScheduleRoute,
  getScheduleScheduleIdDownloadResultFileRoute,
  getScheduleScheduleIdRoute,
  getScheduleTemplateRoute,
  getScheduleTemplateScheduleTemplateIdRoute,
  postScheduleRoute,
  putScheduleScheduleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduleHandler = app
  .openapi(getScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScheduleScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduleScheduleIdDownloadResultFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduleTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduleTemplateScheduleTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
