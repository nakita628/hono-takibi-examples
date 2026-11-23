import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAppInstanceUsersAppInstanceUserArnRoute,
  getAppInstanceUsersAppInstanceUserArnRoute,
  postAppInstanceUsersRoute,
  putAppInstanceUsersAppInstanceUserArnRoute,
} from '../routes'

export const postAppInstanceUsersRouteHandler: RouteHandler<
  typeof postAppInstanceUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppInstanceUsersAppInstanceUserArnRouteHandler: RouteHandler<
  typeof deleteAppInstanceUsersAppInstanceUserArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppInstanceUsersAppInstanceUserArnRouteHandler: RouteHandler<
  typeof getAppInstanceUsersAppInstanceUserArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppInstanceUsersAppInstanceUserArnRouteHandler: RouteHandler<
  typeof putAppInstanceUsersAppInstanceUserArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
