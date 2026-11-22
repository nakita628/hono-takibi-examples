import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersWorkersWorkerIdVersionsVersionIdRoute,
  getAccountsAccountIdWorkersWorkersWorkerIdVersionsLatestRoute,
  getAccountsAccountIdWorkersWorkersWorkerIdVersionsRoute,
  getAccountsAccountIdWorkersWorkersWorkerIdVersionsVersionIdRoute,
  patchAccountsAccountIdWorkersWorkersWorkerIdVersionsLatestRoute,
  postAccountsAccountIdWorkersWorkersWorkerIdVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const versionsHandler = app
  .openapi(getAccountsAccountIdWorkersWorkersWorkerIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersWorkersWorkerIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersWorkersWorkerIdVersionsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersWorkersWorkerIdVersionsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersWorkersWorkerIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersWorkersWorkerIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
