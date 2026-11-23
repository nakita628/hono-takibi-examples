import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserUserIdRoute,
  getUserCreditCodeCreditCodeRoute,
  postUserPasswordResetRequestRoute,
  postUserPasswordResetVerificationCodeRoute,
  postUserPasswordStrengthRoute,
  postUserVerifyEmailVerificationCodeRoute,
} from '../routes'

export const postUserPasswordStrengthRouteHandler: RouteHandler<
  typeof postUserPasswordStrengthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserUserIdRouteHandler: RouteHandler<typeof deleteUserUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserPasswordResetVerificationCodeRouteHandler: RouteHandler<
  typeof postUserPasswordResetVerificationCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserPasswordResetRequestRouteHandler: RouteHandler<
  typeof postUserPasswordResetRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserVerifyEmailVerificationCodeRouteHandler: RouteHandler<
  typeof postUserVerifyEmailVerificationCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCreditCodeCreditCodeRouteHandler: RouteHandler<
  typeof getUserCreditCodeCreditCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
