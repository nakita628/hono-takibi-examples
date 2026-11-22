import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAccessSamlCertificatesRoute,
  getAccountsAccountIdAccessSamlCertificatesSamlCertSetIdPemRoute,
  getAccountsAccountIdAccessSamlCertificatesSamlCertSetIdRoute,
  postAccountsAccountIdAccessSamlCertificatesSamlCertSetIdRotateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessSAMLEncryptionCertificatesHandler = app
  .openapi(getAccountsAccountIdAccessSamlCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessSamlCertificatesSamlCertSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessSamlCertificatesSamlCertSetIdPemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessSamlCertificatesSamlCertSetIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
