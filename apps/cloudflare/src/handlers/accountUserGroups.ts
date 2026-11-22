import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdIamUserGroupsUserGroupIdRoute,
  getAccountsAccountIdIamUserGroupsRoute,
  getAccountsAccountIdIamUserGroupsUserGroupIdRoute,
  postAccountsAccountIdIamUserGroupsRoute,
  putAccountsAccountIdIamUserGroupsUserGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountUserGroupsHandler = app
  .openapi(getAccountsAccountIdIamUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdIamUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdIamUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIamUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIamUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
