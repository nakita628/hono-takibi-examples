import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdHyperdriveConfigsHyperdriveIdRoute,
  getAccountsAccountIdHyperdriveConfigsHyperdriveIdRoute,
  getAccountsAccountIdHyperdriveConfigsRoute,
  patchAccountsAccountIdHyperdriveConfigsHyperdriveIdRoute,
  postAccountsAccountIdHyperdriveConfigsHyperdriveIdRestartRoute,
  postAccountsAccountIdHyperdriveConfigsRoute,
  postAccountsAccountIdHyperdriveIntegrationsOperationsPlanetScaleCreateDatabaseSignatureRoute,
  putAccountsAccountIdHyperdriveConfigsHyperdriveIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hyperdriveHandler = app
  .openapi(getAccountsAccountIdHyperdriveConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdHyperdriveConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdHyperdriveConfigsHyperdriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdHyperdriveConfigsHyperdriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdHyperdriveConfigsHyperdriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdHyperdriveConfigsHyperdriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdHyperdriveConfigsHyperdriveIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdHyperdriveIntegrationsOperationsPlanetScaleCreateDatabaseSignatureRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
