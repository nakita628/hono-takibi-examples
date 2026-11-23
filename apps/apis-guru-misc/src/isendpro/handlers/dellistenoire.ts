import type { RouteHandler } from '@hono/zod-openapi'
import type { postDellistenoireRoute } from '../routes'

export const postDellistenoireRouteHandler: RouteHandler<typeof postDellistenoireRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
