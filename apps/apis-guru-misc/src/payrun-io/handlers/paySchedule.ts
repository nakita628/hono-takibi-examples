import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdPaySchedulePayScheduleIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdRoute,
  getEmployerEmployerIdPaySchedulesRoute,
  postEmployerEmployerIdPaySchedulesRoute,
  putEmployerEmployerIdPaySchedulePayScheduleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payScheduleHandler = app
  .openapi(deleteEmployerEmployerIdPaySchedulePayScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPaySchedulePayScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdPaySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
