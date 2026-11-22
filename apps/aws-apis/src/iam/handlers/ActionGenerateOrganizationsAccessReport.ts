import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGenerateOrganizationsAccessReportRoute,
  postActionGenerateOrganizationsAccessReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGenerateOrganizationsAccessReportHandler = app
  .openapi(getActionGenerateOrganizationsAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGenerateOrganizationsAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
