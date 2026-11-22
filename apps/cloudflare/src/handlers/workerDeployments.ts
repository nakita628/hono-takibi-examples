import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersScriptsScriptNameDeploymentsDeploymentIdRoute,
  getAccountsAccountIdWorkersScriptsScriptNameDeploymentsDeploymentIdRoute,
  getAccountsAccountIdWorkersScriptsScriptNameDeploymentsRoute,
  postAccountsAccountIdWorkersScriptsScriptNameDeploymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workerDeploymentsHandler = app
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersScriptsScriptNameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersScriptsScriptNameDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
