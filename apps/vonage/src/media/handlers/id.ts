import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteIdRoute, getIdInfoRoute, putIdInfoRoute } from '../routes'

export const deleteIdRouteHandler: RouteHandler<typeof deleteIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdInfoRouteHandler: RouteHandler<typeof getIdInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putIdInfoRouteHandler: RouteHandler<typeof putIdInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
