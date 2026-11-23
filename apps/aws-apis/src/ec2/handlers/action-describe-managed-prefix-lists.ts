import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeManagedPrefixListsRoute,
  postActionDescribeManagedPrefixListsRoute,
} from '../routes'

export const getActionDescribeManagedPrefixListsRouteHandler: RouteHandler<
  typeof getActionDescribeManagedPrefixListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeManagedPrefixListsRouteHandler: RouteHandler<
  typeof postActionDescribeManagedPrefixListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
