import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePoolsPoolNameRoute,
  getPoolsPoolNameRoute,
  getPoolsRoute,
  patchPoolsPoolNameRoute,
  postPoolsRoute,
} from '../routes'

export const getPoolsRouteHandler: RouteHandler<typeof getPoolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoolsRouteHandler: RouteHandler<typeof postPoolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoolsPoolNameRouteHandler: RouteHandler<
  typeof deletePoolsPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolNameRouteHandler: RouteHandler<typeof getPoolsPoolNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPoolsPoolNameRouteHandler: RouteHandler<typeof patchPoolsPoolNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
