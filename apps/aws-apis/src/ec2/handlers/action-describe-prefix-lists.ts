import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribePrefixListsRoute,
  postActionDescribePrefixListsRoute,
} from '../routes'

export const getActionDescribePrefixListsRouteHandler: RouteHandler<
  typeof getActionDescribePrefixListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePrefixListsRouteHandler: RouteHandler<
  typeof postActionDescribePrefixListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
