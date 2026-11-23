import type { RouteHandler } from '@hono/zod-openapi'
import type { getBuscaautocompleteRoute } from '../routes'

export const getBuscaautocompleteRouteHandler: RouteHandler<
  typeof getBuscaautocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
