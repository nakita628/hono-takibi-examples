import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHrisCompaniesIdRoute,
  deleteHrisDepartmentsIdRoute,
  deleteHrisEmployeesIdRoute,
  deleteHrisTimeOffRequestsIdRoute,
  getHrisCompaniesIdRoute,
  getHrisCompaniesRoute,
  getHrisDepartmentsIdRoute,
  getHrisDepartmentsRoute,
  getHrisEmployeesIdRoute,
  getHrisEmployeesRoute,
  getHrisJobsEmployeesEmployeeIdJobsJobIdRoute,
  getHrisJobsEmployeesEmployeeIdRoute,
  getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdRoute,
  getHrisPayrollsEmployeesEmployeeIdRoute,
  getHrisPayrollsPayrollIdRoute,
  getHrisPayrollsRoute,
  getHrisSchedulesEmployeesEmployeeIdRoute,
  getHrisTimeOffRequestsIdRoute,
  getHrisTimeOffRequestsRoute,
  patchHrisCompaniesIdRoute,
  patchHrisDepartmentsIdRoute,
  patchHrisEmployeesIdRoute,
  patchHrisTimeOffRequestsIdRoute,
  postHrisCompaniesRoute,
  postHrisDepartmentsRoute,
  postHrisEmployeesRoute,
  postHrisTimeOffRequestsRoute,
} from './routes'
import {
  deleteHrisCompaniesIdRouteHandler,
  deleteHrisDepartmentsIdRouteHandler,
  deleteHrisEmployeesIdRouteHandler,
  deleteHrisTimeOffRequestsIdRouteHandler,
  getHrisCompaniesIdRouteHandler,
  getHrisCompaniesRouteHandler,
  getHrisDepartmentsIdRouteHandler,
  getHrisDepartmentsRouteHandler,
  getHrisEmployeesIdRouteHandler,
  getHrisEmployeesRouteHandler,
  getHrisJobsEmployeesEmployeeIdJobsJobIdRouteHandler,
  getHrisJobsEmployeesEmployeeIdRouteHandler,
  getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdRouteHandler,
  getHrisPayrollsEmployeesEmployeeIdRouteHandler,
  getHrisPayrollsPayrollIdRouteHandler,
  getHrisPayrollsRouteHandler,
  getHrisSchedulesEmployeesEmployeeIdRouteHandler,
  getHrisTimeOffRequestsIdRouteHandler,
  getHrisTimeOffRequestsRouteHandler,
  patchHrisCompaniesIdRouteHandler,
  patchHrisDepartmentsIdRouteHandler,
  patchHrisEmployeesIdRouteHandler,
  patchHrisTimeOffRequestsIdRouteHandler,
  postHrisCompaniesRouteHandler,
  postHrisDepartmentsRouteHandler,
  postHrisEmployeesRouteHandler,
  postHrisTimeOffRequestsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHrisCompaniesRoute, getHrisCompaniesRouteHandler)
  .openapi(postHrisCompaniesRoute, postHrisCompaniesRouteHandler)
  .openapi(deleteHrisCompaniesIdRoute, deleteHrisCompaniesIdRouteHandler)
  .openapi(getHrisCompaniesIdRoute, getHrisCompaniesIdRouteHandler)
  .openapi(patchHrisCompaniesIdRoute, patchHrisCompaniesIdRouteHandler)
  .openapi(getHrisDepartmentsRoute, getHrisDepartmentsRouteHandler)
  .openapi(postHrisDepartmentsRoute, postHrisDepartmentsRouteHandler)
  .openapi(deleteHrisDepartmentsIdRoute, deleteHrisDepartmentsIdRouteHandler)
  .openapi(getHrisDepartmentsIdRoute, getHrisDepartmentsIdRouteHandler)
  .openapi(patchHrisDepartmentsIdRoute, patchHrisDepartmentsIdRouteHandler)
  .openapi(getHrisEmployeesRoute, getHrisEmployeesRouteHandler)
  .openapi(postHrisEmployeesRoute, postHrisEmployeesRouteHandler)
  .openapi(deleteHrisEmployeesIdRoute, deleteHrisEmployeesIdRouteHandler)
  .openapi(getHrisEmployeesIdRoute, getHrisEmployeesIdRouteHandler)
  .openapi(patchHrisEmployeesIdRoute, patchHrisEmployeesIdRouteHandler)
  .openapi(getHrisJobsEmployeesEmployeeIdRoute, getHrisJobsEmployeesEmployeeIdRouteHandler)
  .openapi(
    getHrisJobsEmployeesEmployeeIdJobsJobIdRoute,
    getHrisJobsEmployeesEmployeeIdJobsJobIdRouteHandler,
  )
  .openapi(getHrisPayrollsRoute, getHrisPayrollsRouteHandler)
  .openapi(getHrisPayrollsEmployeesEmployeeIdRoute, getHrisPayrollsEmployeesEmployeeIdRouteHandler)
  .openapi(
    getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdRoute,
    getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdRouteHandler,
  )
  .openapi(getHrisPayrollsPayrollIdRoute, getHrisPayrollsPayrollIdRouteHandler)
  .openapi(
    getHrisSchedulesEmployeesEmployeeIdRoute,
    getHrisSchedulesEmployeesEmployeeIdRouteHandler,
  )
  .openapi(getHrisTimeOffRequestsRoute, getHrisTimeOffRequestsRouteHandler)
  .openapi(postHrisTimeOffRequestsRoute, postHrisTimeOffRequestsRouteHandler)
  .openapi(deleteHrisTimeOffRequestsIdRoute, deleteHrisTimeOffRequestsIdRouteHandler)
  .openapi(getHrisTimeOffRequestsIdRoute, getHrisTimeOffRequestsIdRouteHandler)
  .openapi(patchHrisTimeOffRequestsIdRoute, patchHrisTimeOffRequestsIdRouteHandler)

export default app
