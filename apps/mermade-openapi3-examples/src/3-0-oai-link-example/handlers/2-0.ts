import type { RouteHandler } from '@hono/zod-openapi'
import type {
  get20RepositoriesUsernameRoute,
  get20RepositoriesUsernameSlugPullrequestsPidRoute,
  get20RepositoriesUsernameSlugPullrequestsRoute,
  get20RepositoriesUsernameSlugRoute,
  get20UsersUsernameRoute,
  post20RepositoriesUsernameSlugPullrequestsPidMergeRoute,
} from '../routes'

export const get20UsersUsernameRouteHandler: RouteHandler<typeof get20UsersUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get20RepositoriesUsernameRouteHandler: RouteHandler<
  typeof get20RepositoriesUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20RepositoriesUsernameSlugRouteHandler: RouteHandler<
  typeof get20RepositoriesUsernameSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20RepositoriesUsernameSlugPullrequestsRouteHandler: RouteHandler<
  typeof get20RepositoriesUsernameSlugPullrequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20RepositoriesUsernameSlugPullrequestsPidRouteHandler: RouteHandler<
  typeof get20RepositoriesUsernameSlugPullrequestsPidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20RepositoriesUsernameSlugPullrequestsPidMergeRouteHandler: RouteHandler<
  typeof post20RepositoriesUsernameSlugPullrequestsPidMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
