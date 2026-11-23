import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmployeesEmployeeIDRoute,
  getEmployeesRoute,
  getLeaveApplicationsLeaveApplicationIDRoute,
  getLeaveApplicationsRoute,
  getLeaveApplicationsV2Route,
  getPayItemsRoute,
  getPayrollCalendarsPayrollCalendarIDRoute,
  getPayrollCalendarsRoute,
  getPayRunsPayRunIDRoute,
  getPayRunsRoute,
  getPayslipPayslipIDRoute,
  getSettingsRoute,
  getSuperfundProductsRoute,
  getSuperfundsRoute,
  getSuperfundsSuperFundIDRoute,
  getTimesheetsRoute,
  getTimesheetsTimesheetIDRoute,
  postEmployeesEmployeeIDRoute,
  postEmployeesRoute,
  postLeaveApplicationsLeaveApplicationIDApproveRoute,
  postLeaveApplicationsLeaveApplicationIDRejectRoute,
  postLeaveApplicationsLeaveApplicationIDRoute,
  postLeaveApplicationsRoute,
  postPayItemsRoute,
  postPayrollCalendarsRoute,
  postPayRunsPayRunIDRoute,
  postPayRunsRoute,
  postPayslipPayslipIDRoute,
  postSuperfundsRoute,
  postSuperfundsSuperFundIDRoute,
  postTimesheetsRoute,
  postTimesheetsTimesheetIDRoute,
} from './routes'
import {
  getEmployeesEmployeeIDRouteHandler,
  getEmployeesRouteHandler,
  getLeaveApplicationsLeaveApplicationIDRouteHandler,
  getLeaveApplicationsRouteHandler,
  getLeaveApplicationsV2RouteHandler,
  getPayItemsRouteHandler,
  getPayrollCalendarsPayrollCalendarIDRouteHandler,
  getPayrollCalendarsRouteHandler,
  getPayRunsPayRunIDRouteHandler,
  getPayRunsRouteHandler,
  getPayslipPayslipIDRouteHandler,
  getSettingsRouteHandler,
  getSuperfundProductsRouteHandler,
  getSuperfundsRouteHandler,
  getSuperfundsSuperFundIDRouteHandler,
  getTimesheetsRouteHandler,
  getTimesheetsTimesheetIDRouteHandler,
  postEmployeesEmployeeIDRouteHandler,
  postEmployeesRouteHandler,
  postLeaveApplicationsLeaveApplicationIDApproveRouteHandler,
  postLeaveApplicationsLeaveApplicationIDRejectRouteHandler,
  postLeaveApplicationsLeaveApplicationIDRouteHandler,
  postLeaveApplicationsRouteHandler,
  postPayItemsRouteHandler,
  postPayrollCalendarsRouteHandler,
  postPayRunsPayRunIDRouteHandler,
  postPayRunsRouteHandler,
  postPayslipPayslipIDRouteHandler,
  postSuperfundsRouteHandler,
  postSuperfundsSuperFundIDRouteHandler,
  postTimesheetsRouteHandler,
  postTimesheetsTimesheetIDRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEmployeesRoute, getEmployeesRouteHandler)
  .openapi(postEmployeesRoute, postEmployeesRouteHandler)
  .openapi(getEmployeesEmployeeIDRoute, getEmployeesEmployeeIDRouteHandler)
  .openapi(postEmployeesEmployeeIDRoute, postEmployeesEmployeeIDRouteHandler)
  .openapi(getLeaveApplicationsRoute, getLeaveApplicationsRouteHandler)
  .openapi(postLeaveApplicationsRoute, postLeaveApplicationsRouteHandler)
  .openapi(getLeaveApplicationsV2Route, getLeaveApplicationsV2RouteHandler)
  .openapi(
    getLeaveApplicationsLeaveApplicationIDRoute,
    getLeaveApplicationsLeaveApplicationIDRouteHandler,
  )
  .openapi(
    postLeaveApplicationsLeaveApplicationIDRoute,
    postLeaveApplicationsLeaveApplicationIDRouteHandler,
  )
  .openapi(
    postLeaveApplicationsLeaveApplicationIDApproveRoute,
    postLeaveApplicationsLeaveApplicationIDApproveRouteHandler,
  )
  .openapi(
    postLeaveApplicationsLeaveApplicationIDRejectRoute,
    postLeaveApplicationsLeaveApplicationIDRejectRouteHandler,
  )
  .openapi(getPayItemsRoute, getPayItemsRouteHandler)
  .openapi(postPayItemsRoute, postPayItemsRouteHandler)
  .openapi(getPayrollCalendarsRoute, getPayrollCalendarsRouteHandler)
  .openapi(postPayrollCalendarsRoute, postPayrollCalendarsRouteHandler)
  .openapi(
    getPayrollCalendarsPayrollCalendarIDRoute,
    getPayrollCalendarsPayrollCalendarIDRouteHandler,
  )
  .openapi(getPayRunsRoute, getPayRunsRouteHandler)
  .openapi(postPayRunsRoute, postPayRunsRouteHandler)
  .openapi(getPayRunsPayRunIDRoute, getPayRunsPayRunIDRouteHandler)
  .openapi(postPayRunsPayRunIDRoute, postPayRunsPayRunIDRouteHandler)
  .openapi(getPayslipPayslipIDRoute, getPayslipPayslipIDRouteHandler)
  .openapi(postPayslipPayslipIDRoute, postPayslipPayslipIDRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(getSuperfundsRoute, getSuperfundsRouteHandler)
  .openapi(postSuperfundsRoute, postSuperfundsRouteHandler)
  .openapi(getSuperfundsSuperFundIDRoute, getSuperfundsSuperFundIDRouteHandler)
  .openapi(postSuperfundsSuperFundIDRoute, postSuperfundsSuperFundIDRouteHandler)
  .openapi(getSuperfundProductsRoute, getSuperfundProductsRouteHandler)
  .openapi(getTimesheetsRoute, getTimesheetsRouteHandler)
  .openapi(postTimesheetsRoute, postTimesheetsRouteHandler)
  .openapi(getTimesheetsTimesheetIDRoute, getTimesheetsTimesheetIDRouteHandler)
  .openapi(postTimesheetsTimesheetIDRoute, postTimesheetsTimesheetIDRouteHandler)

export default app
