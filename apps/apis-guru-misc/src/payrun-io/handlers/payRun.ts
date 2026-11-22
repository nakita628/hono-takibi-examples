import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdRoute,
  deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayRunsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payRunHandler = app
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
