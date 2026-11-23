import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthMeRoute,
  postAuthLocalRoute,
  postAuthLogoutRoute,
  postAuthPlexRoute,
  postAuthResetPasswordGuidRoute,
  postAuthResetPasswordRoute,
} from '../routes'

export const getAuthMeRouteHandler: RouteHandler<typeof getAuthMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthPlexRouteHandler: RouteHandler<typeof postAuthPlexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLocalRouteHandler: RouteHandler<typeof postAuthLocalRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLogoutRouteHandler: RouteHandler<typeof postAuthLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthResetPasswordRouteHandler: RouteHandler<
  typeof postAuthResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthResetPasswordGuidRouteHandler: RouteHandler<
  typeof postAuthResetPasswordGuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
