import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdReportsReportIdRoute,
  getUserprofilesProfileIdReportsReportIdFilesFileIdRoute,
  getUserprofilesProfileIdReportsReportIdFilesRoute,
  getUserprofilesProfileIdReportsReportIdRoute,
  getUserprofilesProfileIdReportsRoute,
  patchUserprofilesProfileIdReportsReportIdRoute,
  postUserprofilesProfileIdReportsCompatiblefieldsQueryRoute,
  postUserprofilesProfileIdReportsReportIdRunRoute,
  postUserprofilesProfileIdReportsRoute,
  putUserprofilesProfileIdReportsReportIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getUserprofilesProfileIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdReportsCompatiblefieldsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdReportsReportIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdReportsReportIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdReportsReportIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
