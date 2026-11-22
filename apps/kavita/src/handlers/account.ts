import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAccountAuthKeyRoute,
  getApiAccountAuthKeysRoute,
  getApiAccountEmailConfirmedRoute,
  getApiAccountInviteUrlRoute,
  getApiAccountIsEmailValidRoute,
  getApiAccountOidcAuthenticatedRoute,
  getApiAccountOpdsUrlRoute,
  getApiAccountRefreshAccountRoute,
  getApiAccountRolesRoute,
  getApiAccountRoute,
  postApiAccountClearOidcLinkRoute,
  postApiAccountConfirmEmailRoute,
  postApiAccountConfirmEmailUpdateRoute,
  postApiAccountConfirmMigrationEmailRoute,
  postApiAccountConfirmPasswordResetRoute,
  postApiAccountCreateAuthKeyRoute,
  postApiAccountForgotPasswordRoute,
  postApiAccountInviteRoute,
  postApiAccountLoginRoute,
  postApiAccountRefreshTokenRoute,
  postApiAccountRegisterRoute,
  postApiAccountResendConfirmationEmailRoute,
  postApiAccountResetPasswordRoute,
  postApiAccountRotateAuthKeyRoute,
  postApiAccountUpdateAgeRestrictionRoute,
  postApiAccountUpdateEmailRoute,
  postApiAccountUpdateRoute,
  postApiAccountUpdateUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getApiAccountOidcAuthenticatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountClearOidcLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountRefreshAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountRefreshTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountUpdateUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountUpdateEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountUpdateAgeRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountInviteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountConfirmEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountConfirmEmailUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountConfirmPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountEmailConfirmedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountConfirmMigrationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountResendConfirmationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountOpdsUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountIsEmailValidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountRotateAuthKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountCreateAuthKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAccountAuthKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
