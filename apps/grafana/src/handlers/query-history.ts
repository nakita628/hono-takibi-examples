import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteQueryHistoryQueryHistoryUidRoute,
  deleteQueryHistoryStarQueryHistoryUidRoute,
  getQueryHistoryRoute,
  patchQueryHistoryQueryHistoryUidRoute,
  postQueryHistoryRoute,
  postQueryHistoryStarQueryHistoryUidRoute,
} from '../routes'

export const getQueryHistoryRouteHandler: RouteHandler<typeof getQueryHistoryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueryHistoryRouteHandler: RouteHandler<typeof postQueryHistoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteQueryHistoryStarQueryHistoryUidRouteHandler: RouteHandler<
  typeof deleteQueryHistoryStarQueryHistoryUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueryHistoryStarQueryHistoryUidRouteHandler: RouteHandler<
  typeof postQueryHistoryStarQueryHistoryUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteQueryHistoryQueryHistoryUidRouteHandler: RouteHandler<
  typeof deleteQueryHistoryQueryHistoryUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchQueryHistoryQueryHistoryUidRouteHandler: RouteHandler<
  typeof patchQueryHistoryQueryHistoryUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
