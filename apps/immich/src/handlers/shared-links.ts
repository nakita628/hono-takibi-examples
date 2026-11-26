import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSharedLinksRoute,
  postSharedLinksRoute,
  postSharedLinksLoginRoute,
  getSharedLinksMeRoute,
  deleteSharedLinksIdRoute,
  getSharedLinksIdRoute,
  patchSharedLinksIdRoute,
  deleteSharedLinksIdAssetsRoute,
  putSharedLinksIdAssetsRoute,
} from '../routes'

export const getSharedLinksRouteHandler: RouteHandler<typeof getSharedLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharedLinksRouteHandler: RouteHandler<typeof postSharedLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharedLinksLoginRouteHandler: RouteHandler<
  typeof postSharedLinksLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharedLinksMeRouteHandler: RouteHandler<typeof getSharedLinksMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSharedLinksIdRouteHandler: RouteHandler<
  typeof deleteSharedLinksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharedLinksIdRouteHandler: RouteHandler<typeof getSharedLinksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSharedLinksIdRouteHandler: RouteHandler<typeof patchSharedLinksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSharedLinksIdAssetsRouteHandler: RouteHandler<
  typeof deleteSharedLinksIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSharedLinksIdAssetsRouteHandler: RouteHandler<
  typeof putSharedLinksIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
