import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute,
  deleteAccountsAccountIdAccessCertificatesCertificateIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessCertificatesRoute,
  getAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRoute,
  getAccountsAccountIdAccessCertificatesCertificateIdRoute,
  getAccountsAccountIdAccessCertificatesRoute,
  getAccountsAccountIdAccessCertificatesSettingsRoute,
  postAccountOrZoneAccountOrZoneIdAccessCertificatesRoute,
  postAccountsAccountIdAccessCertificatesRoute,
  putAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute,
  putAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRoute,
  putAccountsAccountIdAccessCertificatesCertificateIdRoute,
  putAccountsAccountIdAccessCertificatesSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessMTLSAuthenticationHandler = app
  .openapi(getAccountsAccountIdAccessCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessCertificatesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessCertificatesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
