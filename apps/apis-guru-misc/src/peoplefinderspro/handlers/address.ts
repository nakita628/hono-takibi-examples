import type { RouteHandler } from '@hono/zod-openapi'
import type { postAddressAutocompleteRoute } from '../routes'

export const postAddressAutocompleteRouteHandler: RouteHandler<
  typeof postAddressAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
