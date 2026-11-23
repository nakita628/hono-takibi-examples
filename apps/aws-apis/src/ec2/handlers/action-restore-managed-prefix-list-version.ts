import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreManagedPrefixListVersionRoute,
  postActionRestoreManagedPrefixListVersionRoute,
} from '../routes'

export const getActionRestoreManagedPrefixListVersionRouteHandler: RouteHandler<
  typeof getActionRestoreManagedPrefixListVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreManagedPrefixListVersionRouteHandler: RouteHandler<
  typeof postActionRestoreManagedPrefixListVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
