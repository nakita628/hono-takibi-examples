import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsDeploymentsDeploymentIdRoute,
  getAccountsAccountIdCwsDeploymentsDeploymentIdRoute,
  getAccountsAccountIdCwsDeploymentsRoute,
  postAccountsAccountIdCwsDeploymentsRoute,
  putAccountsAccountIdCwsDeploymentsDeploymentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsDeploymentsHandler = app
  .openapi(getAccountsAccountIdCwsDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
