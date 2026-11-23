import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeysIdRoute,
  getApiKeysIdRoute,
  getApiKeysRoute,
  patchApiKeysIdRoute,
  postApiKeysRoute,
} from '../routes'

export const getApiKeysRouteHandler: RouteHandler<typeof getApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysIdRouteHandler: RouteHandler<typeof deleteApiKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysIdRouteHandler: RouteHandler<typeof getApiKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiKeysIdRouteHandler: RouteHandler<typeof patchApiKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
