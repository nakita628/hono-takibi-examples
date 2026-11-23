import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecretNameRoute,
  getSecretIndexRoute,
  getSecretNameRoute,
  postSecretIndexRoute,
  putSecretIndexRoute,
} from '../routes'

export const getSecretIndexRouteHandler: RouteHandler<typeof getSecretIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecretIndexRouteHandler: RouteHandler<typeof postSecretIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSecretIndexRouteHandler: RouteHandler<typeof putSecretIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecretNameRouteHandler: RouteHandler<typeof deleteSecretNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSecretNameRouteHandler: RouteHandler<typeof getSecretNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
