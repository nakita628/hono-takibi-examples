import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStreamsFollowedRoute,
  getStreamsKeyRoute,
  getStreamsMarkersRoute,
  getStreamsRoute,
  getStreamsTagsRoute,
  postStreamsMarkersRoute,
} from '../routes'

export const getStreamsKeyRouteHandler: RouteHandler<typeof getStreamsKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStreamsRouteHandler: RouteHandler<typeof getStreamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStreamsFollowedRouteHandler: RouteHandler<typeof getStreamsFollowedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStreamsMarkersRouteHandler: RouteHandler<typeof postStreamsMarkersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStreamsMarkersRouteHandler: RouteHandler<typeof getStreamsMarkersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStreamsTagsRouteHandler: RouteHandler<typeof getStreamsTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
