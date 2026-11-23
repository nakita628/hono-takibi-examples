import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetOrganizationsAccessReportRoute,
  postActionGetOrganizationsAccessReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetOrganizationsAccessReportHandler = app
  .openapi(getActionGetOrganizationsAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetOrganizationsAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
