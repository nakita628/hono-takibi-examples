import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAuthenticationMethodsUserAuthenticationMethodIdRoute,
  getMeAccountInvitesRoute,
  getMeAuthenticationMethodsRoute,
  getMeReferralValidationReferralCodeRoute,
  getMeRoute,
  patchMeRoute,
  postMeAccountInvitesAcceptRoute,
  postMeAccountInvitesRejectRoute,
  postMeExpireTokensRoute,
  postMeLogoutRoute,
  postMePasswordStrengthRoute,
  putMe2faOtpRoute,
  putMe2faRoute,
  putMePasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(postMePasswordStrengthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMe2faRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMe2faOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAccountInvitesAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAccountInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAccountInvitesRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationMethodsUserAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeExpireTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeReferralValidationReferralCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
