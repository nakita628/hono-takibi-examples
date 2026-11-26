import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postChatkitSessionsSessionIdCancelRoute,
  postChatkitSessionsRoute,
  getChatkitThreadsThreadIdItemsRoute,
  getChatkitThreadsThreadIdRoute,
  deleteChatkitThreadsThreadIdRoute,
  getChatkitThreadsRoute,
} from '../routes'

export const postChatkitSessionsSessionIdCancelRouteHandler: RouteHandler<
  typeof postChatkitSessionsSessionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatkitSessionsRouteHandler: RouteHandler<
  typeof postChatkitSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatkitThreadsThreadIdItemsRouteHandler: RouteHandler<
  typeof getChatkitThreadsThreadIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatkitThreadsThreadIdRouteHandler: RouteHandler<
  typeof getChatkitThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatkitThreadsThreadIdRouteHandler: RouteHandler<
  typeof deleteChatkitThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatkitThreadsRouteHandler: RouteHandler<typeof getChatkitThreadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
