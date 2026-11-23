import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartChangeSetRoute } from '../routes'

export const postStartChangeSetRouteHandler: RouteHandler<typeof postStartChangeSetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
