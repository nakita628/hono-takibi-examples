import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStreamIdentifierCaptionsLanguageRoute,
  getAccountsAccountIdStreamIdentifierCaptionsLanguageRoute,
  getAccountsAccountIdStreamIdentifierCaptionsLanguageVttRoute,
  getAccountsAccountIdStreamIdentifierCaptionsRoute,
  postAccountsAccountIdStreamIdentifierCaptionsLanguageGenerateRoute,
  putAccountsAccountIdStreamIdentifierCaptionsLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamSubtitlesCaptionsHandler = app
  .openapi(getAccountsAccountIdStreamIdentifierCaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStreamIdentifierCaptionsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamIdentifierCaptionsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdStreamIdentifierCaptionsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamIdentifierCaptionsLanguageGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamIdentifierCaptionsLanguageVttRoute, (c) => {
    throw new Error('Not implemented')
  })
