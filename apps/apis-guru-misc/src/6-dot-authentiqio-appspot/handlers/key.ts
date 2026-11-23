import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeyPKRoute,
  deleteKeyRoute,
  getKeyPKRoute,
  headKeyPKRoute,
  postKeyPKRoute,
  postKeyRoute,
  putKeyPKRoute,
} from '../routes'

export const deleteKeyRouteHandler: RouteHandler<typeof deleteKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeyRouteHandler: RouteHandler<typeof postKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeyPKRouteHandler: RouteHandler<typeof deleteKeyPKRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKeyPKRouteHandler: RouteHandler<typeof getKeyPKRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headKeyPKRouteHandler: RouteHandler<typeof headKeyPKRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeyPKRouteHandler: RouteHandler<typeof postKeyPKRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putKeyPKRouteHandler: RouteHandler<typeof putKeyPKRoute> = async (c) => {
  throw new Error('Not implemented')
}
