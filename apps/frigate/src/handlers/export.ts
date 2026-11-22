import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCasesCaseIdRoute,
  getCasesCaseIdDownloadRoute,
  getCasesCaseIdRoute,
  getCasesRoute,
  getExportsExportIdRoute,
  getExportsRoute,
  getJobsExportExportIdRoute,
  getJobsExportRoute,
  patchCasesCaseIdRoute,
  patchExportEventIdRenameRoute,
  postCasesRoute,
  postExportCameraNameStartStartTimeEndEndTimeRoute,
  postExportCustomCameraNameStartStartTimeEndEndTimeRoute,
  postExportsBatchRoute,
  postExportsDeleteRoute,
  postExportsReassignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
  .openapi(getExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCasesCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCasesCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCasesCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCasesCaseIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsExportExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportCameraNameStartStartTimeEndEndTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExportEventIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportCustomCameraNameStartStartTimeEndEndTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
