import type { RouteHandler } from '@hono/zod-openapi'
import type { postOplSyntaxCheckRoute } from '../routes'

export const postOplSyntaxCheckRouteHandler: RouteHandler<typeof postOplSyntaxCheckRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
