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
} from '../routes'

const app = new OpenAPIHono()

export const payrollAuHandler = app
  .openapi(getEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaveApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaveApplicationsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaveApplicationsLeaveApplicationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveApplicationsLeaveApplicationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveApplicationsLeaveApplicationIDApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveApplicationsLeaveApplicationIDRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayrollCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayrollCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayrollCalendarsPayrollCalendarIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunsPayRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayRunsPayRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayslipPayslipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayslipPayslipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuperfundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuperfundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuperfundsSuperFundIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuperfundsSuperFundIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuperfundProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimesheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimesheetsTimesheetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsTimesheetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
