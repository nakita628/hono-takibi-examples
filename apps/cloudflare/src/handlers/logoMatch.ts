import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBrandProtectionLogosLogoIdRoute,
  getAccountsAccountIdBrandProtectionLogoMatchesDownloadRoute,
  getAccountsAccountIdBrandProtectionLogoMatchesRoute,
  getAccountsAccountIdBrandProtectionLogosLogoIdRoute,
  getAccountsAccountIdBrandProtectionLogosRoute,
  getSignedUrlRoute,
  postAccountsAccountIdBrandProtectionLogosRoute,
  postAccountsAccountIdBrandProtectionScanLogoRoute,
  postAccountsAccountIdBrandProtectionScanPageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logoMatchHandler = app
  .openapi(getAccountsAccountIdBrandProtectionLogoMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionLogoMatchesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBrandProtectionLogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionLogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionScanLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionScanPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
