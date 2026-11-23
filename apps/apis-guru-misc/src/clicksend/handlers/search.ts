import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchContactsListsQQRoute } from '../routes'

export const getSearchContactsListsQQRouteHandler: RouteHandler<
  typeof getSearchContactsListsQQRoute
> = async (c) => {
  throw new Error('Not implemented')
}
