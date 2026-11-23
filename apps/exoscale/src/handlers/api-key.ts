import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeyIdRoute,
  getApiKeyIdRoute,
  getApiKeyRoute,
  postApiKeyRoute,
} from '../routes'

export const postApiKeyRouteHandler: RouteHandler<typeof postApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeyRouteHandler: RouteHandler<typeof getApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeyIdRouteHandler: RouteHandler<typeof deleteApiKeyIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeyIdRouteHandler: RouteHandler<typeof getApiKeyIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
