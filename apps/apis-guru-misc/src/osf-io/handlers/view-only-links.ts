import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getViewOnlyLinksLinkIdIndexRoute,
  getViewOnlyLinksLinkIdNodesIndexRoute,
} from '../routes'

export const getViewOnlyLinksLinkIdIndexRouteHandler: RouteHandler<
  typeof getViewOnlyLinksLinkIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getViewOnlyLinksLinkIdNodesIndexRouteHandler: RouteHandler<
  typeof getViewOnlyLinksLinkIdNodesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
