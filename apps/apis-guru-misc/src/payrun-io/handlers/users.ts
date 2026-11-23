import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersRoute,
  getUsersTagsRoute,
  getUsersTagTagIdRoute,
  postUsersRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersTagTagIdRouteHandler: RouteHandler<typeof getUsersTagTagIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersTagsRouteHandler: RouteHandler<typeof getUsersTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
