import type { RouteHandler } from '@hono/zod-openapi'
import type { postCaAccountServiceIdSignRoute } from '../routes'

export const postCaAccountServiceIdSignRouteHandler: RouteHandler<
  typeof postCaAccountServiceIdSignRoute
> = async (c) => {
  throw new Error('Not implemented')
}
