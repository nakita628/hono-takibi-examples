import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBouncesIdRoute,
  deleteBouncesRoute,
  getBouncesIdRoute,
  getBouncesRoute,
} from '../routes'

export const getBouncesRouteHandler: RouteHandler<typeof getBouncesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBouncesRouteHandler: RouteHandler<typeof deleteBouncesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBouncesIdRouteHandler: RouteHandler<typeof getBouncesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBouncesIdRouteHandler: RouteHandler<typeof deleteBouncesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
