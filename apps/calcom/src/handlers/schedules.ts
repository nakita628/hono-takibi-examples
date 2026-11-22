import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SchedulesScheduleIdRoute,
  getV2SchedulesDefaultRoute,
  getV2SchedulesRoute,
  getV2SchedulesScheduleIdRoute,
  patchV2SchedulesScheduleIdRoute,
  postV2SchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app
  .openapi(postV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
