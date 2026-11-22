import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdGatewayCertificatesCertificateIdRoute,
  getAccountsAccountIdGatewayCertificatesCertificateIdRoute,
  getAccountsAccountIdGatewayCertificatesRoute,
  postAccountsAccountIdGatewayCertificatesCertificateIdActivateRoute,
  postAccountsAccountIdGatewayCertificatesCertificateIdDeactivateRoute,
  postAccountsAccountIdGatewayCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustCertificatesHandler = app
  .openapi(getAccountsAccountIdGatewayCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdGatewayCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayCertificatesCertificateIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayCertificatesCertificateIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
