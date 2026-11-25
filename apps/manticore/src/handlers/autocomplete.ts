import type { RouteHandler } from '@hono/zod-openapi'
import type { postAutocompleteRoute } from '../routes'

export const postAutocompleteRouteHandler: RouteHandler<typeof postAutocompleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
