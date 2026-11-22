import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesPostureRuleIdRoute,
  getAccountsAccountIdDevicesPostureRoute,
  getAccountsAccountIdDevicesPostureRuleIdRoute,
  postAccountsAccountIdDevicesPostureRoute,
  putAccountsAccountIdDevicesPostureRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicePostureRulesHandler = app
  .openapi(getAccountsAccountIdDevicesPostureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesPostureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesPostureRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPostureRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesPostureRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
