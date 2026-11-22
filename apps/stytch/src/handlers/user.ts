import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRoute,
  deleteV1UsersCryptoWalletsCryptoWalletIdRoute,
  deleteV1UsersEmailsEmailIdRoute,
  deleteV1UsersOauthOauthUserRegistrationIdRoute,
  deleteV1UsersPasswordsPasswordIdRoute,
  deleteV1UsersPhoneNumbersPhoneIdRoute,
  deleteV1UsersTotpsTotpIdRoute,
  deleteV1UsersUserIdExternalIdRoute,
  deleteV1UsersUserIdRoute,
  deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRoute,
  getV1UsersUserIdConnectedAppsRoute,
  getV1UsersUserIdRoute,
  postV1UsersRoute,
  postV1UsersSearchRoute,
  postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRoute,
  putV1UsersUserIdExchangePrimaryFactorRoute,
  putV1UsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdExchangePrimaryFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersEmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersPhoneNumbersPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersTotpsTotpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersCryptoWalletsCryptoWalletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersPasswordsPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersOauthOauthUserRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdConnectedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
