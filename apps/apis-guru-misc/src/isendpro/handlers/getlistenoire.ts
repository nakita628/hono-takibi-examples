import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetlistenoireRoute } from '../routes'

export const postGetlistenoireRouteHandler: RouteHandler<typeof postGetlistenoireRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
