import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateWaveRoute } from '../routes'

export const postCreateWaveRouteHandler: RouteHandler<typeof postCreateWaveRoute> = async (c) => {
  throw new Error('Not implemented')
}
