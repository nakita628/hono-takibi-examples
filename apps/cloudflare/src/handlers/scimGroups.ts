import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdScimV2GroupsGroupIdRoute,
  getAccountsAccountIdScimV2GroupsGroupIdRoute,
  getAccountsAccountIdScimV2GroupsRoute,
  patchAccountsAccountIdScimV2GroupsGroupIdRoute,
  postAccountsAccountIdScimV2GroupsRoute,
  putAccountsAccountIdScimV2GroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scimGroupsHandler = app
  .openapi(getAccountsAccountIdScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
