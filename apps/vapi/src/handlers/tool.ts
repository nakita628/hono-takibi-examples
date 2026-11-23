import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteToolIdRoute,
  getToolIdRoute,
  getToolRoute,
  patchToolIdRoute,
  postToolRoute,
} from '../routes'

export const postToolRouteHandler: RouteHandler<typeof postToolRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getToolRouteHandler: RouteHandler<typeof getToolRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getToolIdRouteHandler: RouteHandler<typeof getToolIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchToolIdRouteHandler: RouteHandler<typeof patchToolIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteToolIdRouteHandler: RouteHandler<typeof deleteToolIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
