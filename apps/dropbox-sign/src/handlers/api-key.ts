import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeyApiKeyIdRoute,
  getApiKeyApiKeyIdRoute,
  getApiKeyRoute,
  postApiKeyRoute,
  putApiKeyApiKeyIdRoute,
} from '../routes'

export const getApiKeyRouteHandler: RouteHandler<typeof getApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeyRouteHandler: RouteHandler<typeof postApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeyApiKeyIdRouteHandler: RouteHandler<typeof getApiKeyApiKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiKeyApiKeyIdRouteHandler: RouteHandler<typeof putApiKeyApiKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiKeyApiKeyIdRouteHandler: RouteHandler<
  typeof deleteApiKeyApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
