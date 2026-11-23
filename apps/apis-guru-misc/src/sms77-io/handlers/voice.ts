import type { RouteHandler } from '@hono/zod-openapi'
import type { postVoiceRoute } from '../routes'

export const postVoiceRouteHandler: RouteHandler<typeof postVoiceRoute> = async (c) => {
  throw new Error('Not implemented')
}
