import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMtlsCertificatesMtlsCertificateIdRoute,
  getAccountsAccountIdMtlsCertificatesMtlsCertificateIdAssociationsRoute,
  getAccountsAccountIdMtlsCertificatesMtlsCertificateIdRoute,
  getAccountsAccountIdMtlsCertificatesRoute,
  postAccountsAccountIdMtlsCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mTLSCertificateManagementHandler = app
  .openapi(getAccountsAccountIdMtlsCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMtlsCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMtlsCertificatesMtlsCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMtlsCertificatesMtlsCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMtlsCertificatesMtlsCertificateIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
