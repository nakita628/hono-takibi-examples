import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationGroupsGroupIdUsersUserIdRoute,
  getOrganizationGroupsGroupIdUsersRoute,
  getOrganizationGroupsGroupIdUsersUserIdRoute,
  postOrganizationGroupsGroupIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupUsersHandler = app
  .openapi(getOrganizationGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsGroupIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationGroupsGroupIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
