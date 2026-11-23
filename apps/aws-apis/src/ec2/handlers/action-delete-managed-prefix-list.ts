import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteManagedPrefixListRoute,
  postActionDeleteManagedPrefixListRoute,
} from '../routes'

export const getActionDeleteManagedPrefixListRouteHandler: RouteHandler<
  typeof getActionDeleteManagedPrefixListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteManagedPrefixListRouteHandler: RouteHandler<
  typeof postActionDeleteManagedPrefixListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
