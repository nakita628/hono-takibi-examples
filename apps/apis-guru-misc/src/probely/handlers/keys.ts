import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeysIdIndexRoute,
  getKeysIdIndexRoute,
  getKeysIndexRoute,
  postKeysIndexRoute,
} from '../routes'

export const getKeysIndexRouteHandler: RouteHandler<typeof getKeysIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeysIndexRouteHandler: RouteHandler<typeof postKeysIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeysIdIndexRouteHandler: RouteHandler<typeof deleteKeysIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKeysIdIndexRouteHandler: RouteHandler<typeof getKeysIdIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
