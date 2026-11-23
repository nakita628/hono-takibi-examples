import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetManagedPrefixListAssociationsRoute,
  postActionGetManagedPrefixListAssociationsRoute,
} from '../routes'

export const getActionGetManagedPrefixListAssociationsRouteHandler: RouteHandler<
  typeof getActionGetManagedPrefixListAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetManagedPrefixListAssociationsRouteHandler: RouteHandler<
  typeof postActionGetManagedPrefixListAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
