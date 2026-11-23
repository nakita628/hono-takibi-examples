import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthorise3ds2Route } from '../routes'

export const postAuthorise3ds2RouteHandler: RouteHandler<typeof postAuthorise3ds2Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}
