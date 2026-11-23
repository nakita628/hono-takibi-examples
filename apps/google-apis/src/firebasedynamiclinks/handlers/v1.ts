import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1DynamicLinkLinkStatsRoute,
  postV1InstallAttributionRoute,
  postV1ManagedShortLinksCreateRoute,
  postV1ReopenAttributionRoute,
  postV1ShortLinksRoute,
} from '../routes'

export const postV1InstallAttributionRouteHandler: RouteHandler<
  typeof postV1InstallAttributionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ManagedShortLinksCreateRouteHandler: RouteHandler<
  typeof postV1ManagedShortLinksCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReopenAttributionRouteHandler: RouteHandler<
  typeof postV1ReopenAttributionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ShortLinksRouteHandler: RouteHandler<typeof postV1ShortLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DynamicLinkLinkStatsRouteHandler: RouteHandler<
  typeof getV1DynamicLinkLinkStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
