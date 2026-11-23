import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLinksLinkIdRoute,
  getLinksLinkIdRoute,
  getLinksRoute,
  patchLinksLinkIdRoute,
  postLinksRoute,
} from '../routes'

export const getLinksLinkIdRouteHandler: RouteHandler<typeof getLinksLinkIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchLinksLinkIdRouteHandler: RouteHandler<typeof patchLinksLinkIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteLinksLinkIdRouteHandler: RouteHandler<typeof deleteLinksLinkIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLinksRouteHandler: RouteHandler<typeof postLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLinksRouteHandler: RouteHandler<typeof getLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}
