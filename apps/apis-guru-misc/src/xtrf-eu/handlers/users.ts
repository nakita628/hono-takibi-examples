import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersMeRoute,
  getUsersMeTimeZoneRoute,
  getUsersRoute,
  getUsersUserIdCustomFieldsCustomFieldKeyRoute,
  getUsersUserIdCustomFieldsRoute,
  getUsersUserIdRoute,
  putUsersUserIdCustomFieldsCustomFieldKeyRoute,
  putUsersUserIdCustomFieldsRoute,
  putUsersUserIdPasswordRoute,
  putUsersUserIdRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeTimeZoneRouteHandler: RouteHandler<typeof getUsersMeTimeZoneRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIdRouteHandler: RouteHandler<typeof putUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdCustomFieldsRouteHandler: RouteHandler<
  typeof getUsersUserIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIdCustomFieldsRouteHandler: RouteHandler<
  typeof putUsersUserIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdCustomFieldsCustomFieldKeyRouteHandler: RouteHandler<
  typeof getUsersUserIdCustomFieldsCustomFieldKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIdCustomFieldsCustomFieldKeyRouteHandler: RouteHandler<
  typeof putUsersUserIdCustomFieldsCustomFieldKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIdPasswordRouteHandler: RouteHandler<
  typeof putUsersUserIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
