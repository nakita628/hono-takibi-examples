import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeysIdRoute,
  getKeysIdRoute,
  getKeysRoute,
  postKeysRoute,
  putKeysIdRoute,
} from '../routes'

export const getKeysRouteHandler: RouteHandler<typeof getKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeysRouteHandler: RouteHandler<typeof postKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeysIdRouteHandler: RouteHandler<typeof deleteKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKeysIdRouteHandler: RouteHandler<typeof getKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putKeysIdRouteHandler: RouteHandler<typeof putKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
