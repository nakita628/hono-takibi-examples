import type { RouteHandler } from '@hono/zod-openapi'
import type { postPhonePlaybackRoute } from '../routes'

export const postPhonePlaybackRouteHandler: RouteHandler<typeof postPhonePlaybackRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
