import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountsHealthResourceCollectionResourceCollectionTypeRoute,
  getAccountsHealthRoute,
  postAccountsOverviewRoute,
} from '../routes'

export const getAccountsHealthRouteHandler: RouteHandler<typeof getAccountsHealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccountsOverviewRouteHandler: RouteHandler<
  typeof postAccountsOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsHealthResourceCollectionResourceCollectionTypeRouteHandler: RouteHandler<
  typeof getAccountsHealthResourceCollectionResourceCollectionTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
