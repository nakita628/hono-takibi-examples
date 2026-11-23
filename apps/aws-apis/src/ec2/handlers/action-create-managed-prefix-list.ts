import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateManagedPrefixListRoute,
  postActionCreateManagedPrefixListRoute,
} from '../routes'

export const getActionCreateManagedPrefixListRouteHandler: RouteHandler<
  typeof getActionCreateManagedPrefixListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateManagedPrefixListRouteHandler: RouteHandler<
  typeof postActionCreateManagedPrefixListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
