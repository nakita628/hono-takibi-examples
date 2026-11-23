import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBookletsBookletIdRoute,
  getBookletsBookletIdRoute,
  getBookletsRoute,
  postBookletsRoute,
} from '../routes'

export const getBookletsBookletIdRouteHandler: RouteHandler<
  typeof getBookletsBookletIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBookletsBookletIdRouteHandler: RouteHandler<
  typeof deleteBookletsBookletIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookletsRouteHandler: RouteHandler<typeof getBookletsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookletsRouteHandler: RouteHandler<typeof postBookletsRoute> = async (c) => {
  throw new Error('Not implemented')
}
