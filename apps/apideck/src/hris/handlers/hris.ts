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
} from '../routes'

const app = new OpenAPIHono()

export const hrisHandler = app
  .openapi(getHrisCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHrisCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHrisCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHrisCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHrisDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHrisDepartmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisDepartmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHrisDepartmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHrisEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHrisEmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisEmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHrisEmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisJobsEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisJobsEmployeesEmployeeIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisPayrollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisPayrollsEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisPayrollsPayrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisSchedulesEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHrisTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHrisTimeOffRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisTimeOffRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHrisTimeOffRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
