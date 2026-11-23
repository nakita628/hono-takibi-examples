import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthkeyRoute,
  patchAuthkeyRoute,
  postAuthkeyRoute,
  putAuthkeyRoute,
} from '../routes'

export const getAuthkeyRouteHandler: RouteHandler<typeof getAuthkeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAuthkeyRouteHandler: RouteHandler<typeof patchAuthkeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthkeyRouteHandler: RouteHandler<typeof postAuthkeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAuthkeyRouteHandler: RouteHandler<typeof putAuthkeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
