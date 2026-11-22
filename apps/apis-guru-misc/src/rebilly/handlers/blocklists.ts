import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBlocklistsIdRoute,
  getBlocklistsIdRoute,
  getBlocklistsRoute,
  postBlocklistsRoute,
  putBlocklistsIdRoute,
} from '../routes'

export const getBlocklistsRouteHandler: RouteHandler<typeof getBlocklistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlocklistsRouteHandler: RouteHandler<typeof postBlocklistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBlocklistsIdRouteHandler: RouteHandler<typeof deleteBlocklistsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBlocklistsIdRouteHandler: RouteHandler<typeof getBlocklistsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBlocklistsIdRouteHandler: RouteHandler<typeof putBlocklistsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
