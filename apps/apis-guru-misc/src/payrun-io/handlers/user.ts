import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserUserIdRoute,
  deleteUserUserIdTagTagIdRoute,
  getUserUserIdPermissionsRoute,
  getUserUserIdRoute,
  getUserUserIdTagsRoute,
  getUserUserIdTagTagIdRoute,
  patchUserUserIdRoute,
  putUserUserIdRoute,
  putUserUserIdTagTagIdRoute,
} from '../routes'

export const deleteUserUserIdRouteHandler: RouteHandler<typeof deleteUserUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserUserIdRouteHandler: RouteHandler<typeof getUserUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserUserIdRouteHandler: RouteHandler<typeof patchUserUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserUserIdRouteHandler: RouteHandler<typeof putUserUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdPermissionsRouteHandler: RouteHandler<
  typeof getUserUserIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserUserIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteUserUserIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdTagTagIdRouteHandler: RouteHandler<
  typeof getUserUserIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserUserIdTagTagIdRouteHandler: RouteHandler<
  typeof putUserUserIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdTagsRouteHandler: RouteHandler<typeof getUserUserIdTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
