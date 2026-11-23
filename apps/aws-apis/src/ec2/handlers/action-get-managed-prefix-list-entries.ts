import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetManagedPrefixListEntriesRoute,
  postActionGetManagedPrefixListEntriesRoute,
} from '../routes'

export const getActionGetManagedPrefixListEntriesRouteHandler: RouteHandler<
  typeof getActionGetManagedPrefixListEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetManagedPrefixListEntriesRouteHandler: RouteHandler<
  typeof postActionGetManagedPrefixListEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
