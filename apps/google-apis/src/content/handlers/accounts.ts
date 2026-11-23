import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdLabelsLabelIdRoute,
  deleteAccountsAccountIdReturncarrierCarrierAccountIdRoute,
  getAccountsAccountIdLabelsRoute,
  getAccountsAccountIdReturncarrierRoute,
  getAccountsAuthinfoRoute,
  patchAccountsAccountIdLabelsLabelIdRoute,
  patchAccountsAccountIdReturncarrierCarrierAccountIdRoute,
  postAccountsAccountIdCredentialsRoute,
  postAccountsAccountIdLabelsRoute,
  postAccountsAccountIdReturncarrierRoute,
  postAccountsBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsAuthinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReturncarrierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdReturncarrierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdReturncarrierCarrierAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdReturncarrierCarrierAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
