import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1UsersTotpCodesRemainingRoute,
  postApiV1TwoFactorChallengesSendEmailCodeRoute,
  postApiV1TwoFactorChallengesVerifyChallengeRoute,
  postApiV1Users2faDisableEmailRoute,
  postApiV1Users2faEnableEmailRoute,
  postApiV1Users2faSendEmailCodeRoute,
  postApiV1UsersDisableTotpRoute,
  postApiV1UsersEnableTotpRoute,
  postApiV1UsersRegenerateTotpCodesRoute,
  postApiV1UsersValidateTotpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const twoFactorAuthenticationHandler = app
  .openapi(postApiV1Users2faEnableEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1Users2faSendEmailCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1Users2faDisableEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersEnableTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersValidateTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersDisableTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegenerateTotpCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersTotpCodesRemainingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TwoFactorChallengesSendEmailCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TwoFactorChallengesVerifyChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
