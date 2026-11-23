import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthResetValidateRoute,
  postAuthResetPasswordEmailRoute,
  postAuthResetPasswordRoute,
  postAuthResetValidatePasswordRoute,
  postAuthSimpleLoginRoute,
} from '../routes'

export const postAuthSimpleLoginRouteHandler: RouteHandler<
  typeof postAuthSimpleLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthResetValidateRouteHandler: RouteHandler<
  typeof getAuthResetValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthResetPasswordRouteHandler: RouteHandler<
  typeof postAuthResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthResetValidatePasswordRouteHandler: RouteHandler<
  typeof postAuthResetValidatePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthResetPasswordEmailRouteHandler: RouteHandler<
  typeof postAuthResetPasswordEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
