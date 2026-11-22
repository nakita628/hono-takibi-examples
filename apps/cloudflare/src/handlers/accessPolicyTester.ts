import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAccessPolicyTestsPolicyTestIdRoute,
  getAccountsAccountIdAccessPolicyTestsPolicyTestIdUsersRoute,
  postAccountsAccountIdAccessPolicyTestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessPolicyTesterHandler = app
  .openapi(postAccountsAccountIdAccessPolicyTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessPolicyTestsPolicyTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessPolicyTestsPolicyTestIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
