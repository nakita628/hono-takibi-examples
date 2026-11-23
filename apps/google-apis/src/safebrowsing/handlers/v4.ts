import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV4EncodedFullHashesEncodedRequestRoute,
  getV4EncodedUpdatesEncodedRequestRoute,
  getV4ThreatListsRoute,
  postV4FullHashesFindRoute,
  postV4ThreatHitsRoute,
  postV4ThreatListUpdatesFetchRoute,
  postV4ThreatMatchesFindRoute,
} from '../routes'

export const getV4EncodedFullHashesEncodedRequestRouteHandler: RouteHandler<
  typeof getV4EncodedFullHashesEncodedRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4EncodedUpdatesEncodedRequestRouteHandler: RouteHandler<
  typeof getV4EncodedUpdatesEncodedRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4FullHashesFindRouteHandler: RouteHandler<
  typeof postV4FullHashesFindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4ThreatHitsRouteHandler: RouteHandler<typeof postV4ThreatHitsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV4ThreatListUpdatesFetchRouteHandler: RouteHandler<
  typeof postV4ThreatListUpdatesFetchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ThreatListsRouteHandler: RouteHandler<typeof getV4ThreatListsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV4ThreatMatchesFindRouteHandler: RouteHandler<
  typeof postV4ThreatMatchesFindRoute
> = async (c) => {
  throw new Error('Not implemented')
}
