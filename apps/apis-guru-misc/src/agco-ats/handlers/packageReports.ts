import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ClientsClientIDPackageReportsRoute,
  putApiV2ClientsClientIDPackageReportsBatchRoute,
  putApiV2ClientsClientIDPackageReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packageReportsHandler = app
  .openapi(getApiV2ClientsClientIDPackageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ClientsClientIDPackageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ClientsClientIDPackageReportsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
