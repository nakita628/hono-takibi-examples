import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrgIdGroupsGroupIdRoute,
  getOrganizationsOrgIdGroupsGroupIdRoute,
  getOrganizationsOrgIdGroupsRoute,
  postOrganizationsOrgIdGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
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
