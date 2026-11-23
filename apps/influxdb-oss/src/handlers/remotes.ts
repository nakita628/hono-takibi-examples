import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRemotesRemoteIDRoute,
  getRemotesRemoteIDRoute,
  getRemotesRoute,
  patchRemotesRemoteIDRoute,
  postRemotesRoute,
} from '../routes'

export const getRemotesRouteHandler: RouteHandler<typeof getRemotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRemotesRouteHandler: RouteHandler<typeof postRemotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRemotesRemoteIDRouteHandler: RouteHandler<typeof getRemotesRemoteIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchRemotesRemoteIDRouteHandler: RouteHandler<
  typeof patchRemotesRemoteIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRemotesRemoteIDRouteHandler: RouteHandler<
  typeof deleteRemotesRemoteIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
