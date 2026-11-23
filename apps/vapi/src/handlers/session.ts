import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSessionIdRoute,
  getSessionIdRoute,
  getSessionRoute,
  patchSessionIdRoute,
  postSessionRoute,
} from '../routes'

export const postSessionRouteHandler: RouteHandler<typeof postSessionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionRouteHandler: RouteHandler<typeof getSessionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionIdRouteHandler: RouteHandler<typeof getSessionIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSessionIdRouteHandler: RouteHandler<typeof patchSessionIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSessionIdRouteHandler: RouteHandler<typeof deleteSessionIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
