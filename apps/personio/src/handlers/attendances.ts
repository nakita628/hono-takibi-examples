import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompanyAttendancesIdRoute,
  getCompanyAttendancesRoute,
  patchCompanyAttendancesIdRoute,
  postCompanyAttendancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attendancesHandler = app
  .openapi(getCompanyAttendancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyAttendancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompanyAttendancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompanyAttendancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
