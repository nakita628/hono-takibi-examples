import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyManagedPrefixListRoute,
  postActionModifyManagedPrefixListRoute,
} from '../routes'

export const getActionModifyManagedPrefixListRouteHandler: RouteHandler<
  typeof getActionModifyManagedPrefixListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyManagedPrefixListRouteHandler: RouteHandler<
  typeof postActionModifyManagedPrefixListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
