import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersIdCustomdataRoute,
  getUsersIdRoute,
  getUsersRoute,
  postUsersRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersIdRouteHandler: RouteHandler<typeof getUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersIdCustomdataRouteHandler: RouteHandler<
  typeof getUsersIdCustomdataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
