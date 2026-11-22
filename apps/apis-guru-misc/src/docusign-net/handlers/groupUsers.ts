import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdGroupsGroupIdUsersRoute,
  getV21AccountsAccountIdGroupsGroupIdUsersRoute,
  putV21AccountsAccountIdGroupsGroupIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupUsersHandler = app
  .openapi(deleteV21AccountsAccountIdGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
