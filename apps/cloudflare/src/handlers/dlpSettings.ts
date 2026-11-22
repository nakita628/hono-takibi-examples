import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpSettingsRoute,
  getAccountsAccountIdDlpLimitsRoute,
  getAccountsAccountIdDlpPayloadLogRoute,
  getAccountsAccountIdDlpSettingsRoute,
  patchAccountsAccountIdDlpSettingsRoute,
  postAccountsAccountIdDlpPatternsValidateRoute,
  putAccountsAccountIdDlpPayloadLogRoute,
  putAccountsAccountIdDlpSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpSettingsHandler = app
  .openapi(getAccountsAccountIdDlpLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpPatternsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpPayloadLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpPayloadLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDlpSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
