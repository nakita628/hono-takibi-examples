import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertVolumeRoute } from '../routes'

export const postConvertVolumeRouteHandler: RouteHandler<typeof postConvertVolumeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
