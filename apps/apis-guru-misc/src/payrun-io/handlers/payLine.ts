import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payLineHandler = app
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
