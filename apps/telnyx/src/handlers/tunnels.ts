import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTunnelsIdRoute,
  getTunnelsIdRoute,
  getTunnelsRoute,
  postTunnelsIdActionsRotateTokenRoute,
  postTunnelsRoute,
} from '../routes'

export const getTunnelsRouteHandler: RouteHandler<typeof getTunnelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTunnelsRouteHandler: RouteHandler<typeof postTunnelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTunnelsIdRouteHandler: RouteHandler<typeof deleteTunnelsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTunnelsIdRouteHandler: RouteHandler<typeof getTunnelsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTunnelsIdActionsRotateTokenRouteHandler: RouteHandler<
  typeof postTunnelsIdActionsRotateTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
