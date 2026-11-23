import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postItemAccessTokenInvalidateRoute,
  postItemActivityListRoute,
  postItemApplicationListRoute,
  postItemApplicationScopesUpdateRoute,
  postItemApplicationUnlinkRoute,
  postItemGetRoute,
  postItemImportRoute,
  postItemProductsTerminateRoute,
  postItemPublicTokenCreateRoute,
  postItemPublicTokenExchangeRoute,
  postItemRemoveRoute,
  postItemWebhookUpdateRoute,
} from '../routes'

export const postItemActivityListRouteHandler: RouteHandler<
  typeof postItemActivityListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemApplicationListRouteHandler: RouteHandler<
  typeof postItemApplicationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemApplicationUnlinkRouteHandler: RouteHandler<
  typeof postItemApplicationUnlinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemApplicationScopesUpdateRouteHandler: RouteHandler<
  typeof postItemApplicationScopesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemGetRouteHandler: RouteHandler<typeof postItemGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemRemoveRouteHandler: RouteHandler<typeof postItemRemoveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemProductsTerminateRouteHandler: RouteHandler<
  typeof postItemProductsTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemWebhookUpdateRouteHandler: RouteHandler<
  typeof postItemWebhookUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemAccessTokenInvalidateRouteHandler: RouteHandler<
  typeof postItemAccessTokenInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemPublicTokenExchangeRouteHandler: RouteHandler<
  typeof postItemPublicTokenExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemPublicTokenCreateRouteHandler: RouteHandler<
  typeof postItemPublicTokenCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemImportRouteHandler: RouteHandler<typeof postItemImportRoute> = async (c) => {
  throw new Error('Not implemented')
}
