import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SchedulesScheduleIdRoute,
  getV2SchedulesRoute,
  getV2SchedulesScheduleIdRoute,
  postV2SchedulesDestinationRoute,
  postV2SchedulesScheduleIdPauseRoute,
  postV2SchedulesScheduleIdResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app
  .openapi(postV2SchedulesDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesScheduleIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesScheduleIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
