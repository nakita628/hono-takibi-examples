import type { RouteHandler } from '@hono/zod-openapi'
import type { postMoraPitchRoute } from '../routes'

export const postMoraPitchRouteHandler: RouteHandler<typeof postMoraPitchRoute> = async (c) => {
  throw new Error('Not implemented')
}
