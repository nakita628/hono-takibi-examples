import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompanyAbsencePeriodsIdRoute,
  deleteCompanyAttendancesIdRoute,
  deleteCompanyAttendancesProjectsIdRoute,
  deleteCompanyTimeOffsIdRoute,
  getCompanyAbsencePeriodsRoute,
  getCompanyAttendancesProjectsRoute,
  getCompanyAttendancesRoute,
  getCompanyCustomReportsColumnsRoute,
  getCompanyCustomReportsReportsReportIdRoute,
  getCompanyCustomReportsReportsRoute,
  getCompanyDocumentCategoriesRoute,
  getCompanyEmployeesAttributesRoute,
  getCompanyEmployeesCustomAttributesRoute,
  getCompanyEmployeesEmployeeIdAbsencesBalanceRoute,
  getCompanyEmployeesEmployeeIdProfilePictureWidthRoute,
  getCompanyEmployeesEmployeeIdRoute,
  getCompanyEmployeesRoute,
  getCompanyTimeOffsIdRoute,
  getCompanyTimeOffsRoute,
  getCompanyTimeOffTypesRoute,
  patchCompanyAttendancesIdRoute,
  patchCompanyAttendancesProjectsIdRoute,
  patchCompanyEmployeesEmployeeIdRoute,
  postCompanyAbsencePeriodsRoute,
  postCompanyAttendancesProjectsRoute,
  postCompanyAttendancesRoute,
  postCompanyDocumentsRoute,
  postCompanyEmployeesRoute,
  postCompanyTimeOffsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companyHandler = app
  .openapi(getCompanyEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompanyEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesEmployeeIdAbsencesBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesEmployeeIdProfilePictureWidthRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getCompanyTimeOffTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyTimeOffsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyTimeOffsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompanyTimeOffsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyTimeOffsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyAbsencePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyAbsencePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompanyAbsencePeriodsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyDocumentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyCustomReportsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyCustomReportsReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyCustomReportsColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
