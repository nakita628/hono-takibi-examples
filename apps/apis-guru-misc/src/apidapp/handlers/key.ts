import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeyKeyRoute,
  getKeyRoute,
  optionsKeyKeyRoute,
  optionsKeyRoute,
  postKeyRoute,
} from '../routes'

export const getKeyRouteHandler: RouteHandler<typeof getKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsKeyRouteHandler: RouteHandler<typeof optionsKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeyRouteHandler: RouteHandler<typeof postKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeyKeyRouteHandler: RouteHandler<typeof deleteKeyKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsKeyKeyRouteHandler: RouteHandler<typeof optionsKeyKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
