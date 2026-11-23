import type { RouteHandler } from '@hono/zod-openapi'
import type { postArchiveWaveRoute } from '../routes'

export const postArchiveWaveRouteHandler: RouteHandler<typeof postArchiveWaveRoute> = async (c) => {
  throw new Error('Not implemented')
}
