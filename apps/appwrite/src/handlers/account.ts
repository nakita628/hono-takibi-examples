import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountIdentitiesIdentityIdRoute,
  deleteAccountMfaAuthenticatorsTypeRoute,
  deleteAccountSessionsRoute,
  deleteAccountSessionsSessionIdRoute,
  getAccountIdentitiesRoute,
  getAccountLogsRoute,
  getAccountMfaFactorsRoute,
  getAccountMfaRecoveryCodesRoute,
  getAccountPrefsRoute,
  getAccountRoute,
  getAccountSessionsRoute,
  getAccountSessionsSessionIdRoute,
  getAccountTokensOauth2ProviderRoute,
  patchAccountEmailRoute,
  patchAccountMfaRecoveryCodesRoute,
  patchAccountMfaRoute,
  patchAccountNameRoute,
  patchAccountPasswordRoute,
  patchAccountPhoneRoute,
  patchAccountPrefsRoute,
  patchAccountSessionsSessionIdRoute,
  patchAccountStatusRoute,
  postAccountJwtsRoute,
  postAccountMfaAuthenticatorsTypeRoute,
  postAccountMfaChallengeRoute,
  postAccountMfaRecoveryCodesRoute,
  postAccountRecoveryRoute,
  postAccountRoute,
  postAccountSessionsAnonymousRoute,
  postAccountSessionsEmailRoute,
  postAccountSessionsTokenRoute,
  postAccountTokensEmailRoute,
  postAccountTokensMagicUrlRoute,
  postAccountTokensPhoneRoute,
  postAccountVerificationPhoneRoute,
  postAccountVerificationRoute,
  putAccountMfaAuthenticatorsTypeRoute,
  putAccountMfaChallengeRoute,
  putAccountRecoveryRoute,
  putAccountSessionsMagicUrlRoute,
  putAccountSessionsPhoneRoute,
  putAccountVerificationPhoneRoute,
  putAccountVerificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountIdentitiesIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountJwtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountMfaAuthenticatorsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountMfaAuthenticatorsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountMfaAuthenticatorsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountMfaChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountMfaChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountMfaFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountMfaRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountMfaRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountMfaRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSessionsAnonymousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSessionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountSessionsMagicUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountSessionsPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSessionsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTokensEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTokensMagicUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTokensOauth2ProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTokensPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountVerificationPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountVerificationPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
