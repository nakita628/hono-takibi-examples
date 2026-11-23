import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeysKeyIdRoute,
  getKeysKeyIdRoute,
  getKeysRoute,
  postKeysRoute,
} from '../routes'

export const getKeysRouteHandler: RouteHandler<typeof getKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeysRouteHandler: RouteHandler<typeof postKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKeysKeyIdRouteHandler: RouteHandler<typeof getKeysKeyIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeysKeyIdRouteHandler: RouteHandler<typeof deleteKeysKeyIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
