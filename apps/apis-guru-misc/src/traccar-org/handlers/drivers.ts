import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDriversIdRoute,
  getDriversRoute,
  postDriversRoute,
  putDriversIdRoute,
} from '../routes'

export const getDriversRouteHandler: RouteHandler<typeof getDriversRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDriversRouteHandler: RouteHandler<typeof postDriversRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDriversIdRouteHandler: RouteHandler<typeof deleteDriversIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDriversIdRouteHandler: RouteHandler<typeof putDriversIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
