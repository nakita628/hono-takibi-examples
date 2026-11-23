import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const postApiV1LoginRouteHandler: RouteHandler<typeof postApiV1LoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LogoutRouteHandler: RouteHandler<typeof postApiV1LogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LoginCodeRedeemRouteHandler: RouteHandler<
  typeof postApiV1LoginCodeRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MeRouteHandler: RouteHandler<typeof getApiV1MeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1Users2faEnableEmailRouteHandler: RouteHandler<
  typeof postApiV1Users2faEnableEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1Users2faSendEmailCodeRouteHandler: RouteHandler<
  typeof postApiV1Users2faSendEmailCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1Users2faDisableEmailRouteHandler: RouteHandler<
  typeof postApiV1Users2faDisableEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersEnableTotpRouteHandler: RouteHandler<
  typeof postApiV1UsersEnableTotpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersValidateTotpRouteHandler: RouteHandler<
  typeof postApiV1UsersValidateTotpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersDisableTotpRouteHandler: RouteHandler<
  typeof postApiV1UsersDisableTotpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegenerateTotpCodesRouteHandler: RouteHandler<
  typeof postApiV1UsersRegenerateTotpCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersTotpCodesRemainingRouteHandler: RouteHandler<
  typeof getApiV1UsersTotpCodesRemainingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TwoFactorChallengesSendEmailCodeRouteHandler: RouteHandler<
  typeof postApiV1TwoFactorChallengesSendEmailCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TwoFactorChallengesVerifyChallengeRouteHandler: RouteHandler<
  typeof postApiV1TwoFactorChallengesVerifyChallengeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
