import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauth2V21TokensKidRoute,
  getOauth2V21VerifyRoute,
  postOauth2V21RevokeRoute,
  postOauth2V21TokenRoute,
  postOauth2V3TokenRoute,
} from '../routes'

export const postOauth2V3TokenRouteHandler: RouteHandler<typeof postOauth2V3TokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauth2V21TokensKidRouteHandler: RouteHandler<
  typeof getOauth2V21TokensKidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2V21TokenRouteHandler: RouteHandler<typeof postOauth2V21TokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauth2V21VerifyRouteHandler: RouteHandler<typeof getOauth2V21VerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauth2V21RevokeRouteHandler: RouteHandler<
  typeof postOauth2V21RevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
