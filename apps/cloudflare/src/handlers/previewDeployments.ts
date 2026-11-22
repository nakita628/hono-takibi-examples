import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsDeploymentIdRoute,
  getAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsDeploymentIdRoute,
  getAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsRoute,
  patchAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsLatestRoute,
  postAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const previewDeploymentsHandler = app
  .openapi(getAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsLatestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsDeploymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdDeploymentsDeploymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
