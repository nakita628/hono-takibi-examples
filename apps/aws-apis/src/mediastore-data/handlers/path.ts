import type { RouteHandler } from '@hono/zod-openapi'
import type { deletePathRoute, getPathRoute, headPathRoute, putPathRoute } from '../routes'

export const deletePathRouteHandler: RouteHandler<typeof deletePathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headPathRouteHandler: RouteHandler<typeof headPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPathRouteHandler: RouteHandler<typeof getPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPathRouteHandler: RouteHandler<typeof putPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
