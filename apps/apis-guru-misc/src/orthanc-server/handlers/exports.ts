import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteExportsRoute, getExportsRoute } from '../routes'

export const deleteExportsRouteHandler: RouteHandler<typeof deleteExportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportsRouteHandler: RouteHandler<typeof getExportsRoute> = async (c) => {
  throw new Error('Not implemented')
}
