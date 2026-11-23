import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetlistenoireRoute } from '../routes'

export const postSetlistenoireRouteHandler: RouteHandler<typeof postSetlistenoireRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
