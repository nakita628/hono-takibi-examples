import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatutoryLeavesSickStatutorySickLeaveIDRoute,
  getStatutoryLeavesSummaryEmployeeIDRoute,
  postStatutoryLeavesSickRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statutoryLeavesHandler = app
  .openapi(getStatutoryLeavesSummaryEmployeeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatutoryLeavesSickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatutoryLeavesSickStatutorySickLeaveIDRoute, (c) => {
    throw new Error('Not implemented')
  })
