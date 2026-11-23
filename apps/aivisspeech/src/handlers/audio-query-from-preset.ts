import type { RouteHandler } from '@hono/zod-openapi'
import type { postAudioQueryFromPresetRoute } from '../routes'

export const postAudioQueryFromPresetRouteHandler: RouteHandler<
  typeof postAudioQueryFromPresetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
