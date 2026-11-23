import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateWaveRoute } from '../routes'

export const postUpdateWaveRouteHandler: RouteHandler<typeof postUpdateWaveRoute> = async (c) => {
  throw new Error('Not implemented')
}
