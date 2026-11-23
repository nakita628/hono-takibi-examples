import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupUsersIdRoute,
  getGroupUsersRoute,
  patchGroupUsersIdRoute,
  postGroupUsersRoute,
} from '../routes'

export const getGroupUsersRouteHandler: RouteHandler<typeof getGroupUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupUsersRouteHandler: RouteHandler<typeof postGroupUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupUsersIdRouteHandler: RouteHandler<typeof deleteGroupUsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchGroupUsersIdRouteHandler: RouteHandler<typeof patchGroupUsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
