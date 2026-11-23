import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompanyAttendancesIdRoute,
  deleteCompanyTimeOffsIdRoute,
  getCompanyAttendancesRoute,
  getCompanyEmployeesEmployeeIdProfilePictureWidthRoute,
  getCompanyEmployeesEmployeeIdRoute,
  getCompanyEmployeesRoute,
  getCompanyTimeOffsIdRoute,
  getCompanyTimeOffsRoute,
  getCompanyTimeOffTypesRoute,
  patchCompanyAttendancesIdRoute,
  postCompanyAttendancesRoute,
  postCompanyEmployeesRoute,
  postCompanyTimeOffsRoute,
} from './routes'
import {
  deleteCompanyAttendancesIdRouteHandler,
  deleteCompanyTimeOffsIdRouteHandler,
  getCompanyAttendancesRouteHandler,
  getCompanyEmployeesEmployeeIdProfilePictureWidthRouteHandler,
  getCompanyEmployeesEmployeeIdRouteHandler,
  getCompanyEmployeesRouteHandler,
  getCompanyTimeOffsIdRouteHandler,
  getCompanyTimeOffsRouteHandler,
  getCompanyTimeOffTypesRouteHandler,
  patchCompanyAttendancesIdRouteHandler,
  postCompanyAttendancesRouteHandler,
  postCompanyEmployeesRouteHandler,
  postCompanyTimeOffsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCompanyAttendancesRoute, getCompanyAttendancesRouteHandler)
  .openapi(postCompanyAttendancesRoute, postCompanyAttendancesRouteHandler)
  .openapi(deleteCompanyAttendancesIdRoute, deleteCompanyAttendancesIdRouteHandler)
  .openapi(patchCompanyAttendancesIdRoute, patchCompanyAttendancesIdRouteHandler)
  .openapi(getCompanyEmployeesRoute, getCompanyEmployeesRouteHandler)
  .openapi(postCompanyEmployeesRoute, postCompanyEmployeesRouteHandler)
  .openapi(getCompanyEmployeesEmployeeIdRoute, getCompanyEmployeesEmployeeIdRouteHandler)
  .openapi(
    getCompanyEmployeesEmployeeIdProfilePictureWidthRoute,
    getCompanyEmployeesEmployeeIdProfilePictureWidthRouteHandler,
  )
  .openapi(getCompanyTimeOffTypesRoute, getCompanyTimeOffTypesRouteHandler)
  .openapi(getCompanyTimeOffsRoute, getCompanyTimeOffsRouteHandler)
  .openapi(postCompanyTimeOffsRoute, postCompanyTimeOffsRouteHandler)
  .openapi(deleteCompanyTimeOffsIdRoute, deleteCompanyTimeOffsIdRouteHandler)
  .openapi(getCompanyTimeOffsIdRoute, getCompanyTimeOffsIdRouteHandler)

export default app
