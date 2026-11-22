import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsRegoModulesRegoModuleIdRoute,
  getAccountsAccountIdCwsRegoModulesRegoModuleIdRoute,
  getAccountsAccountIdCwsRegoModulesRoute,
  postAccountsAccountIdCwsRegoModulesRoute,
  putAccountsAccountIdCwsRegoModulesRegoModuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsRegoModulesHandler = app
  .openapi(getAccountsAccountIdCwsRegoModulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsRegoModulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsRegoModulesRegoModuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsRegoModulesRegoModuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsRegoModulesRegoModuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
