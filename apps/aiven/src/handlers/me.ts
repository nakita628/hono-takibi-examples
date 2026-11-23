import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postMePasswordStrengthRouteHandler: RouteHandler<
  typeof postMePasswordStrengthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMe2faRouteHandler: RouteHandler<typeof putMe2faRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMe2faOtpRouteHandler: RouteHandler<typeof putMe2faOtpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMeAccountInvitesAcceptRouteHandler: RouteHandler<
  typeof postMeAccountInvitesAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMeAccountInvitesRouteHandler: RouteHandler<
  typeof getMeAccountInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMeAccountInvitesRejectRouteHandler: RouteHandler<
  typeof postMeAccountInvitesRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMeAuthenticationMethodsUserAuthenticationMethodIdRouteHandler: RouteHandler<
  typeof deleteMeAuthenticationMethodsUserAuthenticationMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMeAuthenticationMethodsRouteHandler: RouteHandler<
  typeof getMeAuthenticationMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMeExpireTokensRouteHandler: RouteHandler<typeof postMeExpireTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMeRouteHandler: RouteHandler<typeof patchMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMeLogoutRouteHandler: RouteHandler<typeof postMeLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMePasswordRouteHandler: RouteHandler<typeof putMePasswordRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMeReferralValidationReferralCodeRouteHandler: RouteHandler<
  typeof getMeReferralValidationReferralCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
