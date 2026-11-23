import type { RouteHandler } from '@hono/zod-openapi'
import type { postAudioQueryRoute } from '../routes'

export const postAudioQueryRouteHandler: RouteHandler<typeof postAudioQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}
