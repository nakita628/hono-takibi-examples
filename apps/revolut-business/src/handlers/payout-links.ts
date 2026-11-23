import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPayoutLinksPayoutLinkIdRoute,
  getPayoutLinksRoute,
  postPayoutLinksPayoutLinkIdCancelRoute,
  postPayoutLinksRoute,
} from '../routes'

export const postPayoutLinksRouteHandler: RouteHandler<typeof postPayoutLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPayoutLinksRouteHandler: RouteHandler<typeof getPayoutLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPayoutLinksPayoutLinkIdRouteHandler: RouteHandler<
  typeof getPayoutLinksPayoutLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayoutLinksPayoutLinkIdCancelRouteHandler: RouteHandler<
  typeof postPayoutLinksPayoutLinkIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
