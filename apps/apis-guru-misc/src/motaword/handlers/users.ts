import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersRoute,
  getUsersTagsRoute,
  postUsersAvailableVendorsRoute,
  postUsersFilterRoute,
  postUsersRoute,
  postUsersSendPasswordReminderRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersAvailableVendorsRouteHandler: RouteHandler<
  typeof postUsersAvailableVendorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersFilterRouteHandler: RouteHandler<typeof postUsersFilterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersSendPasswordReminderRouteHandler: RouteHandler<
  typeof postUsersSendPasswordReminderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersTagsRouteHandler: RouteHandler<typeof getUsersTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
