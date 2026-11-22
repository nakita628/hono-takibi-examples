import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicRedundancyGroupsRedundancyGroupIdRoute,
  getAccountsAccountIdMagicRedundancyGroupsRedundancyGroupIdRoute,
  getAccountsAccountIdMagicRedundancyGroupsRoute,
  postAccountsAccountIdMagicRedundancyGroupsRoute,
  putAccountsAccountIdMagicRedundancyGroupsRedundancyGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicRedundancyGroupsHandler = app
  .openapi(getAccountsAccountIdMagicRedundancyGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicRedundancyGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicRedundancyGroupsRedundancyGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicRedundancyGroupsRedundancyGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicRedundancyGroupsRedundancyGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
