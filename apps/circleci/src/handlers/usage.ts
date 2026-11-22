import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrgIdUsageExportJobUsageExportJobIdRoute,
  postOrganizationsOrgIdUsageExportJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app
  .openapi(postOrganizationsOrgIdUsageExportJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdUsageExportJobUsageExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
