import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdRoute,
  deleteAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdTailsTailIdRoute,
  getAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdHistoryLogsRoute,
  getAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdRoute,
  getAccountsAccountIdPagesProjectsProjectNameDeploymentsRoute,
  postAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdRetryRoute,
  postAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdRollbackRoute,
  postAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdTailsRoute,
  postAccountsAccountIdPagesProjectsProjectNameDeploymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pagesDeploymentHandler = app
  .openapi(getAccountsAccountIdPagesProjectsProjectNameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPagesProjectsProjectNameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdHistoryLogsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdRollbackRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdTailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdPagesProjectsProjectNameDeploymentsDeploymentIdTailsTailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
