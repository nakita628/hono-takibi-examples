import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlayersPlayerIdLogoRoute,
  deletePlayersPlayerIdRoute,
  getPlayersPlayerIdRoute,
  getPlayersRoute,
  patchPlayersPlayerIdRoute,
  postPlayersPlayerIdLogoRoute,
  postPlayersRoute,
} from '../routes'

export const getPlayersRouteHandler: RouteHandler<typeof getPlayersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlayersRouteHandler: RouteHandler<typeof postPlayersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlayersPlayerIdRouteHandler: RouteHandler<
  typeof deletePlayersPlayerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlayersPlayerIdRouteHandler: RouteHandler<typeof getPlayersPlayerIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPlayersPlayerIdRouteHandler: RouteHandler<
  typeof patchPlayersPlayerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlayersPlayerIdLogoRouteHandler: RouteHandler<
  typeof deletePlayersPlayerIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlayersPlayerIdLogoRouteHandler: RouteHandler<
  typeof postPlayersPlayerIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
