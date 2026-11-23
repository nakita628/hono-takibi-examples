import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteUsersRoute, postUsersUpsertRoute } from '../routes'

export const deleteUsersRouteHandler: RouteHandler<typeof deleteUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUpsertRouteHandler: RouteHandler<typeof postUsersUpsertRoute> = async (c) => {
  throw new Error('Not implemented')
}
