import type { RouteHandler } from '@hono/zod-openapi'
import type { postConnectWavesRoute } from '../routes'

export const postConnectWavesRouteHandler: RouteHandler<typeof postConnectWavesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
