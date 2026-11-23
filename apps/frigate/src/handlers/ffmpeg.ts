import type { RouteHandler } from '@hono/zod-openapi'
import type { getFfmpegPresetsRoute } from '../routes'

export const getFfmpegPresetsRouteHandler: RouteHandler<typeof getFfmpegPresetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
