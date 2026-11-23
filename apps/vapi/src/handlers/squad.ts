import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSquadIdRoute,
  getSquadIdRoute,
  getSquadRoute,
  patchSquadIdRoute,
  postSquadRoute,
} from '../routes'

export const postSquadRouteHandler: RouteHandler<typeof postSquadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSquadRouteHandler: RouteHandler<typeof getSquadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSquadIdRouteHandler: RouteHandler<typeof getSquadIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSquadIdRouteHandler: RouteHandler<typeof patchSquadIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSquadIdRouteHandler: RouteHandler<typeof deleteSquadIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
