import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteQueryQueryIdRoute,
  getQueryQueryIdRoute,
  postQueryQueryIdRoute,
  postQueryRoute,
} from '../routes'

export const postQueryRouteHandler: RouteHandler<typeof postQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteQueryQueryIdRouteHandler: RouteHandler<typeof deleteQueryQueryIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getQueryQueryIdRouteHandler: RouteHandler<typeof getQueryQueryIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueryQueryIdRouteHandler: RouteHandler<typeof postQueryQueryIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
