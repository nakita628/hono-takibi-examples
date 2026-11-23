import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOverlaysIdRoute,
  getOverlaysIdRoute,
  getOverlaysRoute,
  patchOverlaysIdRoute,
  postOverlaysRoute,
} from '../routes'

export const getOverlaysRouteHandler: RouteHandler<typeof getOverlaysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOverlaysRouteHandler: RouteHandler<typeof postOverlaysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOverlaysIdRouteHandler: RouteHandler<typeof getOverlaysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOverlaysIdRouteHandler: RouteHandler<typeof patchOverlaysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOverlaysIdRouteHandler: RouteHandler<typeof deleteOverlaysIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
