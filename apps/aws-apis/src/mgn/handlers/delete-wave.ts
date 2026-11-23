import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteWaveRoute } from '../routes'

export const postDeleteWaveRouteHandler: RouteHandler<typeof postDeleteWaveRoute> = async (c) => {
  throw new Error('Not implemented')
}
