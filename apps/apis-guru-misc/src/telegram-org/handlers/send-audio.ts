import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendAudioRoute } from '../routes'

export const postSendAudioRouteHandler: RouteHandler<typeof postSendAudioRoute> = async (c) => {
  throw new Error('Not implemented')
}
