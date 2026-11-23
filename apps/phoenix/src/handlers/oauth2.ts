import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauth2IdpNameLoginRoute,
  getOauth2IdpNameTokensRoute,
  postOauth2IdpNameLoginRoute,
} from '../routes'

export const postOauth2IdpNameLoginRouteHandler: RouteHandler<
  typeof postOauth2IdpNameLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2IdpNameLoginRouteHandler: RouteHandler<
  typeof getOauth2IdpNameLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2IdpNameTokensRouteHandler: RouteHandler<
  typeof getOauth2IdpNameTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}
