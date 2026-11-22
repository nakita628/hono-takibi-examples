import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpProfilesCustomProfileIdRoute,
  deleteAccountsAccountIdDlpProfilesIntegrationProfileIdRoute,
  deleteAccountsAccountIdDlpProfilesPredefinedProfileIdRoute,
  getAccountsAccountIdDlpProfilesCustomProfileIdRoute,
  getAccountsAccountIdDlpProfilesCustomRoute,
  getAccountsAccountIdDlpProfilesIntegrationProfileIdReferencesRoute,
  getAccountsAccountIdDlpProfilesPredefinedProfileIdConfigRoute,
  getAccountsAccountIdDlpProfilesPredefinedProfileIdRoute,
  getAccountsAccountIdDlpProfilesProfileIdRoute,
  getAccountsAccountIdDlpProfilesRoute,
  postAccountsAccountIdDlpProfilesCustomRoute,
  postAccountsAccountIdDlpProfilesPredefinedProfileIdConfigRoute,
  postAccountsAccountIdDlpProfilesPredefinedRoute,
  putAccountsAccountIdDlpProfilesCustomProfileIdRoute,
  putAccountsAccountIdDlpProfilesPredefinedProfileIdConfigRoute,
  putAccountsAccountIdDlpProfilesPredefinedProfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpProfilesHandler = app
  .openapi(getAccountsAccountIdDlpProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpProfilesCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpProfilesCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpProfilesCustomProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpProfilesCustomProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpProfilesCustomProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpProfilesIntegrationProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpProfilesIntegrationProfileIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpProfilesPredefinedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpProfilesPredefinedProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpProfilesPredefinedProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpProfilesPredefinedProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpProfilesPredefinedProfileIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpProfilesPredefinedProfileIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpProfilesPredefinedProfileIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
