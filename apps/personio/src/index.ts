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
} from './routes'
import {
  deleteCompanyAbsencePeriodsIdRouteHandler,
  deleteCompanyAttendancesIdRouteHandler,
  deleteCompanyAttendancesProjectsIdRouteHandler,
  deleteCompanyTimeOffsIdRouteHandler,
  getCompanyAbsencePeriodsRouteHandler,
  getCompanyAttendancesProjectsRouteHandler,
  getCompanyAttendancesRouteHandler,
  getCompanyCustomReportsColumnsRouteHandler,
  getCompanyCustomReportsReportsReportIdRouteHandler,
  getCompanyCustomReportsReportsRouteHandler,
  getCompanyDocumentCategoriesRouteHandler,
  getCompanyEmployeesAttributesRouteHandler,
  getCompanyEmployeesCustomAttributesRouteHandler,
  getCompanyEmployeesEmployeeIdAbsencesBalanceRouteHandler,
  getCompanyEmployeesEmployeeIdProfilePictureWidthRouteHandler,
  getCompanyEmployeesEmployeeIdRouteHandler,
  getCompanyEmployeesRouteHandler,
  getCompanyTimeOffsIdRouteHandler,
  getCompanyTimeOffsRouteHandler,
  getCompanyTimeOffTypesRouteHandler,
  patchCompanyAttendancesIdRouteHandler,
  patchCompanyAttendancesProjectsIdRouteHandler,
  patchCompanyEmployeesEmployeeIdRouteHandler,
  postCompanyAbsencePeriodsRouteHandler,
  postCompanyAttendancesProjectsRouteHandler,
  postCompanyAttendancesRouteHandler,
  postCompanyDocumentsRouteHandler,
  postCompanyEmployeesRouteHandler,
  postCompanyTimeOffsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCompanyEmployeesRoute, getCompanyEmployeesRouteHandler)
  .openapi(postCompanyEmployeesRoute, postCompanyEmployeesRouteHandler)
  .openapi(patchCompanyEmployeesEmployeeIdRoute, patchCompanyEmployeesEmployeeIdRouteHandler)
  .openapi(getCompanyEmployeesEmployeeIdRoute, getCompanyEmployeesEmployeeIdRouteHandler)
  .openapi(
    getCompanyEmployeesEmployeeIdAbsencesBalanceRoute,
    getCompanyEmployeesEmployeeIdAbsencesBalanceRouteHandler,
  )
  .openapi(
    getCompanyEmployeesCustomAttributesRoute,
    getCompanyEmployeesCustomAttributesRouteHandler,
  )
  .openapi(getCompanyEmployeesAttributesRoute, getCompanyEmployeesAttributesRouteHandler)
  .openapi(
    getCompanyEmployeesEmployeeIdProfilePictureWidthRoute,
    getCompanyEmployeesEmployeeIdProfilePictureWidthRouteHandler,
  )
  .openapi(getCompanyAttendancesRoute, getCompanyAttendancesRouteHandler)
  .openapi(postCompanyAttendancesRoute, postCompanyAttendancesRouteHandler)
  .openapi(deleteCompanyAttendancesIdRoute, deleteCompanyAttendancesIdRouteHandler)
  .openapi(patchCompanyAttendancesIdRoute, patchCompanyAttendancesIdRouteHandler)
  .openapi(getCompanyAttendancesProjectsRoute, getCompanyAttendancesProjectsRouteHandler)
  .openapi(postCompanyAttendancesProjectsRoute, postCompanyAttendancesProjectsRouteHandler)
  .openapi(deleteCompanyAttendancesProjectsIdRoute, deleteCompanyAttendancesProjectsIdRouteHandler)
  .openapi(patchCompanyAttendancesProjectsIdRoute, patchCompanyAttendancesProjectsIdRouteHandler)
  .openapi(getCompanyTimeOffTypesRoute, getCompanyTimeOffTypesRouteHandler)
  .openapi(getCompanyTimeOffsRoute, getCompanyTimeOffsRouteHandler)
  .openapi(postCompanyTimeOffsRoute, postCompanyTimeOffsRouteHandler)
  .openapi(deleteCompanyTimeOffsIdRoute, deleteCompanyTimeOffsIdRouteHandler)
  .openapi(getCompanyTimeOffsIdRoute, getCompanyTimeOffsIdRouteHandler)
  .openapi(getCompanyAbsencePeriodsRoute, getCompanyAbsencePeriodsRouteHandler)
  .openapi(postCompanyAbsencePeriodsRoute, postCompanyAbsencePeriodsRouteHandler)
  .openapi(deleteCompanyAbsencePeriodsIdRoute, deleteCompanyAbsencePeriodsIdRouteHandler)
  .openapi(getCompanyDocumentCategoriesRoute, getCompanyDocumentCategoriesRouteHandler)
  .openapi(postCompanyDocumentsRoute, postCompanyDocumentsRouteHandler)
  .openapi(getCompanyCustomReportsReportsRoute, getCompanyCustomReportsReportsRouteHandler)
  .openapi(
    getCompanyCustomReportsReportsReportIdRoute,
    getCompanyCustomReportsReportsReportIdRouteHandler,
  )
  .openapi(getCompanyCustomReportsColumnsRoute, getCompanyCustomReportsColumnsRouteHandler)

export default app
