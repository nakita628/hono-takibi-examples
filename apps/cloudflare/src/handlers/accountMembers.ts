import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMembersMemberIdRoute,
  getAccountsAccountIdMembersMemberIdRoute,
  getAccountsAccountIdMembersRoute,
  postAccountsAccountIdMembersRoute,
  putAccountsAccountIdMembersMemberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountMembersHandler = app
  .openapi(getAccountsAccountIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
