import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserIdForUsernameRoute,
  getUserUserIdArticlesRoute,
  getUserUserIdFollowersRoute,
  getUserUserIdFollowingRoute,
  getUserUserIdInterestsRoute,
  getUserUserIdListsRoute,
  getUserUserIdPublicationsRoute,
  getUserUserIdRoute,
  getUserUserIdTopArticlesRoute,
} from '../routes'

export const getUserIdForUsernameRouteHandler: RouteHandler<
  typeof getUserIdForUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdRouteHandler: RouteHandler<typeof getUserUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdArticlesRouteHandler: RouteHandler<
  typeof getUserUserIdArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdFollowersRouteHandler: RouteHandler<
  typeof getUserUserIdFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdFollowingRouteHandler: RouteHandler<
  typeof getUserUserIdFollowingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdInterestsRouteHandler: RouteHandler<
  typeof getUserUserIdInterestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdListsRouteHandler: RouteHandler<typeof getUserUserIdListsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserUserIdPublicationsRouteHandler: RouteHandler<
  typeof getUserUserIdPublicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdTopArticlesRouteHandler: RouteHandler<
  typeof getUserUserIdTopArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
