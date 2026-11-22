import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SchedulesScheduleIdRoute,
  getV2SchedulesRoute,
  getV2SchedulesScheduleIdLogRoute,
  getV2SchedulesScheduleIdRoute,
  postV2SchedulesRoute,
  postV2SchedulesScheduleIdInvokeRoute,
  putV2SchedulesScheduleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app
  .openapi(getV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesScheduleIdInvokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesScheduleIdLogRoute, (c) => {
    throw new Error('Not implemented')
  })
