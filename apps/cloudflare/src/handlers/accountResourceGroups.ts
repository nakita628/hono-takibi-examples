import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdIamResourceGroupsResourceGroupIdRoute,
  getAccountsAccountIdIamResourceGroupsResourceGroupIdRoute,
  getAccountsAccountIdIamResourceGroupsRoute,
  postAccountsAccountIdIamResourceGroupsRoute,
  putAccountsAccountIdIamResourceGroupsResourceGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountResourceGroupsHandler = app
  .openapi(getAccountsAccountIdIamResourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdIamResourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdIamResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIamResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIamResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
