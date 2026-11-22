import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessGatewayCaCertificateIdRoute,
  getAccountsAccountIdAccessGatewayCaRoute,
  postAccountsAccountIdAccessGatewayCaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gatewayCAHandler = app
  .openapi(getAccountsAccountIdAccessGatewayCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessGatewayCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessGatewayCaCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
