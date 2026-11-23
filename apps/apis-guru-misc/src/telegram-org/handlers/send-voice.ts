import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendVoiceRoute } from '../routes'

export const postSendVoiceRouteHandler: RouteHandler<typeof postSendVoiceRoute> = async (c) => {
  throw new Error('Not implemented')
}
