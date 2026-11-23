import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTrackersIdIndexRoute,
  getTrackersIdPublicIndexRoute,
  getTrackersIndexRoute,
  patchTrackersIdIndexRoute,
  postTrackersIndexRoute,
  putTrackersIdIndexRoute,
} from '../routes'

export const getTrackersIndexRouteHandler: RouteHandler<typeof getTrackersIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTrackersIndexRouteHandler: RouteHandler<typeof postTrackersIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTrackersIdIndexRouteHandler: RouteHandler<typeof getTrackersIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchTrackersIdIndexRouteHandler: RouteHandler<
  typeof patchTrackersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTrackersIdIndexRouteHandler: RouteHandler<typeof putTrackersIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTrackersIdPublicIndexRouteHandler: RouteHandler<
  typeof getTrackersIdPublicIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
