import type { RouteHandler } from '@hono/zod-openapi'
import type { postListprincipalsRoute } from '../routes'

export const postListprincipalsRouteHandler: RouteHandler<typeof postListprincipalsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
