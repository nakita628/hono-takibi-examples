import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1MeRoute,
  getApiV1UsersTotpCodesRemainingRoute,
  postApiV1LoginCodeRedeemRoute,
  postApiV1LoginRoute,
  postApiV1LogoutRoute,
  postApiV1TwoFactorChallengesSendEmailCodeRoute,
  postApiV1TwoFactorChallengesVerifyChallengeRoute,
  postApiV1Users2faDisableEmailRoute,
  postApiV1Users2faEnableEmailRoute,
  postApiV1Users2faSendEmailCodeRoute,
  postApiV1UsersDisableTotpRoute,
  postApiV1UsersEnableTotpRoute,
  postApiV1UsersRegenerateTotpCodesRoute,
  postApiV1UsersValidateTotpRoute,
} from './routes'
import {
  getApiV1MeRouteHandler,
  getApiV1UsersTotpCodesRemainingRouteHandler,
  postApiV1LoginCodeRedeemRouteHandler,
  postApiV1LoginRouteHandler,
  postApiV1LogoutRouteHandler,
  postApiV1TwoFactorChallengesSendEmailCodeRouteHandler,
  postApiV1TwoFactorChallengesVerifyChallengeRouteHandler,
  postApiV1Users2faDisableEmailRouteHandler,
  postApiV1Users2faEnableEmailRouteHandler,
  postApiV1Users2faSendEmailCodeRouteHandler,
  postApiV1UsersDisableTotpRouteHandler,
  postApiV1UsersEnableTotpRouteHandler,
  postApiV1UsersRegenerateTotpCodesRouteHandler,
  postApiV1UsersValidateTotpRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiV1LoginRoute, postApiV1LoginRouteHandler)
  .openapi(postApiV1LogoutRoute, postApiV1LogoutRouteHandler)
  .openapi(postApiV1LoginCodeRedeemRoute, postApiV1LoginCodeRedeemRouteHandler)
  .openapi(getApiV1MeRoute, getApiV1MeRouteHandler)
  .openapi(postApiV1Users2faEnableEmailRoute, postApiV1Users2faEnableEmailRouteHandler)
  .openapi(postApiV1Users2faSendEmailCodeRoute, postApiV1Users2faSendEmailCodeRouteHandler)
  .openapi(postApiV1Users2faDisableEmailRoute, postApiV1Users2faDisableEmailRouteHandler)
  .openapi(postApiV1UsersEnableTotpRoute, postApiV1UsersEnableTotpRouteHandler)
  .openapi(postApiV1UsersValidateTotpRoute, postApiV1UsersValidateTotpRouteHandler)
  .openapi(postApiV1UsersDisableTotpRoute, postApiV1UsersDisableTotpRouteHandler)
  .openapi(postApiV1UsersRegenerateTotpCodesRoute, postApiV1UsersRegenerateTotpCodesRouteHandler)
  .openapi(getApiV1UsersTotpCodesRemainingRoute, getApiV1UsersTotpCodesRemainingRouteHandler)
  .openapi(
    postApiV1TwoFactorChallengesSendEmailCodeRoute,
    postApiV1TwoFactorChallengesSendEmailCodeRouteHandler,
  )
  .openapi(
    postApiV1TwoFactorChallengesVerifyChallengeRoute,
    postApiV1TwoFactorChallengesVerifyChallengeRouteHandler,
  )

export default app
