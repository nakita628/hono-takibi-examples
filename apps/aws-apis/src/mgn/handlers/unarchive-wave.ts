import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnarchiveWaveRoute } from '../routes'

export const postUnarchiveWaveRouteHandler: RouteHandler<typeof postUnarchiveWaveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
