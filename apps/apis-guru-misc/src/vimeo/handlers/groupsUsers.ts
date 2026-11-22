import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsGroupIdUsersRoute,
  getMeGroupsGroupIdRoute,
  getMeGroupsRoute,
  getUsersUserIdGroupsGroupIdRoute,
  getUsersUserIdGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsUsersHandler = app
  .openapi(getGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
