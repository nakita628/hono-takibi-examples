import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdIamUserGroupsUserGroupIdMembersMemberIdRoute,
  getAccountsAccountIdIamUserGroupsUserGroupIdMembersMemberIdRoute,
  getAccountsAccountIdIamUserGroupsUserGroupIdMembersRoute,
  postAccountsAccountIdIamUserGroupsUserGroupIdMembersRoute,
  putAccountsAccountIdIamUserGroupsUserGroupIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountUserGroupMembersHandler = app
  .openapi(getAccountsAccountIdIamUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdIamUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIamUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdIamUserGroupsUserGroupIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIamUserGroupsUserGroupIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
