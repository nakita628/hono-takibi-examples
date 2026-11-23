import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserUserIdPermissionGroupsMaxResultsRoute,
  getUserUserIdRoute,
  postUserRoute,
  postUserUserIdDisableRoute,
  postUserUserIdEnableRoute,
  postUserUserIdPasswordRoute,
  putUserUserIdRoute,
} from '../routes'

export const postUserRouteHandler: RouteHandler<typeof postUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserUserIdDisableRouteHandler: RouteHandler<
  typeof postUserUserIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserUserIdEnableRouteHandler: RouteHandler<
  typeof postUserUserIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdRouteHandler: RouteHandler<typeof getUserUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserUserIdRouteHandler: RouteHandler<typeof putUserUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdPermissionGroupsMaxResultsRouteHandler: RouteHandler<
  typeof getUserUserIdPermissionGroupsMaxResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserUserIdPasswordRouteHandler: RouteHandler<
  typeof postUserUserIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
