import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompanyAttendancesProjectsIdRoute,
  getCompanyAttendancesProjectsRoute,
  patchCompanyAttendancesProjectsIdRoute,
  postCompanyAttendancesProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getCompanyAttendancesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyAttendancesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompanyAttendancesProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompanyAttendancesProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
