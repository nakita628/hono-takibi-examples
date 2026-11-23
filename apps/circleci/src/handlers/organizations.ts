import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrgIdGroupsGroupIdRoute,
  getOrganizationsOrgIdGroupsGroupIdRoute,
  getOrganizationsOrgIdGroupsRoute,
  getOrganizationsOrgIdUsageExportJobUsageExportJobIdRoute,
  postOrganizationsOrgIdGroupsRoute,
  postOrganizationsOrgIdUsageExportJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsOrgIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrgIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrgIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrgIdUsageExportJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdUsageExportJobUsageExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
