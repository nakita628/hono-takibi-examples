import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsUsersIdRoute,
  getOrganizationsUsersRoute,
  getOrganizationsUsersUsersGroupsReportRoute,
  postOrganizationsUsersIdActionsRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationUsersHandler = app
  .openapi(getOrganizationsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsUsersUsersGroupsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsUsersIdActionsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
