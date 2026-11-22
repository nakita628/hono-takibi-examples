import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBuildsWorkersScriptNameDeployHooksDeployHookUuidRoute,
  getAccountsAccountIdBuildsWorkersScriptNameDeployHooksDeployHookUuidRoute,
  getAccountsAccountIdBuildsWorkersScriptNameDeployHooksRoute,
  postAccountsAccountIdBuildsWorkersScriptNameDeployHooksRoute,
  postWorkersBuildsDeployHooksDeployHookUuidRoute,
  putAccountsAccountIdBuildsWorkersScriptNameDeployHooksDeployHookUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deployHooksHandler = app
  .openapi(getAccountsAccountIdBuildsWorkersScriptNameDeployHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsWorkersScriptNameDeployHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBuildsWorkersScriptNameDeployHooksDeployHookUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsWorkersScriptNameDeployHooksDeployHookUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdBuildsWorkersScriptNameDeployHooksDeployHookUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkersBuildsDeployHooksDeployHookUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
