import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccessorsAccessorIdRoute,
  getAccessorsAccessorIdRoute,
  getAccessorsRoute,
  postAccessorsRoute,
} from '../routes'

export const postAccessorsRouteHandler: RouteHandler<typeof postAccessorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccessorsRouteHandler: RouteHandler<typeof getAccessorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccessorsAccessorIdRouteHandler: RouteHandler<
  typeof deleteAccessorsAccessorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccessorsAccessorIdRouteHandler: RouteHandler<
  typeof getAccessorsAccessorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
