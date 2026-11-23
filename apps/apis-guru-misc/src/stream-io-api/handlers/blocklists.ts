import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBlocklistsNameRoute,
  getBlocklistsNameRoute,
  getBlocklistsRoute,
  postBlocklistsRoute,
  putBlocklistsNameRoute,
} from '../routes'

export const getBlocklistsRouteHandler: RouteHandler<typeof getBlocklistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlocklistsRouteHandler: RouteHandler<typeof postBlocklistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBlocklistsNameRouteHandler: RouteHandler<
  typeof deleteBlocklistsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocklistsNameRouteHandler: RouteHandler<typeof getBlocklistsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBlocklistsNameRouteHandler: RouteHandler<typeof putBlocklistsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
