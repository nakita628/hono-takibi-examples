import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiKeysRoute,
  postApiKeysRoute,
  getApiKeysMeRoute,
  deleteApiKeysIdRoute,
  getApiKeysIdRoute,
  putApiKeysIdRoute,
  postApiKeysIdRotateRoute,
} from '../routes'

export const getApiKeysRouteHandler: RouteHandler<typeof getApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysMeRouteHandler: RouteHandler<typeof getApiKeysMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysIdRouteHandler: RouteHandler<typeof deleteApiKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysIdRouteHandler: RouteHandler<typeof getApiKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiKeysIdRouteHandler: RouteHandler<typeof putApiKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysIdRotateRouteHandler: RouteHandler<
  typeof postApiKeysIdRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
