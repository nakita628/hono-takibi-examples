import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthorise3dRoute } from '../routes'

export const postAuthorise3dRouteHandler: RouteHandler<typeof postAuthorise3dRoute> = async (c) => {
  throw new Error('Not implemented')
}
