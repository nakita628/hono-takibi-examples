import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAppsUEmbedTokenByCustomPathCustomPathRoute,
  getAppsUGuestEntryByCustomPathCustomPathRoute,
  getAppsUPublicAppByCustomPathCustomPathRoute,
} from '../routes'

export const getAppsUGuestEntryByCustomPathCustomPathRouteHandler: RouteHandler<
  typeof getAppsUGuestEntryByCustomPathCustomPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsUPublicAppByCustomPathCustomPathRouteHandler: RouteHandler<
  typeof getAppsUPublicAppByCustomPathCustomPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsUEmbedTokenByCustomPathCustomPathRouteHandler: RouteHandler<
  typeof getAppsUEmbedTokenByCustomPathCustomPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
