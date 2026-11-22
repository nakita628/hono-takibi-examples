import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdOneIntegrationsIdRoute,
  getAccountsAccountIdOneIntegrationsIdRoute,
  getAccountsAccountIdOneIntegrationsRoute,
  patchAccountsAccountIdOneIntegrationsIdRoute,
  postAccountsAccountIdOneIntegrationsIdPauseRoute,
  postAccountsAccountIdOneIntegrationsIdResumeRoute,
  postAccountsAccountIdOneIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getAccountsAccountIdOneIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdOneIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdOneIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdOneIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdOneIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdOneIntegrationsIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdOneIntegrationsIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
