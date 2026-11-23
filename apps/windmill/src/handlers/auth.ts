import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthIsPasswordLoginDisabledRoute,
  getAuthIsSmtpConfiguredRoute,
  getAuthLoginLinkTokenRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthRequestPasswordResetRoute,
  postAuthResetPasswordRoute,
} from '../routes'

export const postAuthLoginRouteHandler: RouteHandler<typeof postAuthLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLogoutRouteHandler: RouteHandler<typeof postAuthLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthIsSmtpConfiguredRouteHandler: RouteHandler<
  typeof getAuthIsSmtpConfiguredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthIsPasswordLoginDisabledRouteHandler: RouteHandler<
  typeof getAuthIsPasswordLoginDisabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRequestPasswordResetRouteHandler: RouteHandler<
  typeof postAuthRequestPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthLoginLinkTokenRouteHandler: RouteHandler<
  typeof getAuthLoginLinkTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthResetPasswordRouteHandler: RouteHandler<
  typeof postAuthResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
