import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSsoConnectorsSsoConnectorIdRoute,
  getAccountsAccountIdSsoConnectorsRoute,
  getAccountsAccountIdSsoConnectorsSsoConnectorIdRoute,
  patchAccountsAccountIdSsoConnectorsSsoConnectorIdRoute,
  postAccountsAccountIdSsoConnectorsRoute,
  postAccountsAccountIdSsoConnectorsSsoConnectorIdBeginVerificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssoHandler = app
  .openapi(getAccountsAccountIdSsoConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSsoConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSsoConnectorsSsoConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSsoConnectorsSsoConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdSsoConnectorsSsoConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSsoConnectorsSsoConnectorIdBeginVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
