import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateProjectsProjectIdReportsPreferencesRoute,
  getV1PrivateProjectsProjectIdReportsRoute,
  postV1PrivateProjectsProjectIdReportsGenerateRoute,
  postV1PrivateProjectsProjectIdReportsReportIdCompleteRoute,
  putV1PrivateProjectsProjectIdReportsPreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(postV1PrivateProjectsProjectIdReportsReportIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsProjectIdReportsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdReportsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateProjectsProjectIdReportsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
