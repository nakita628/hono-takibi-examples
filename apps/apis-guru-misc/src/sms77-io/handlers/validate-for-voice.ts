import type { RouteHandler } from '@hono/zod-openapi'
import type { postValidateForVoiceRoute } from '../routes'

export const postValidateForVoiceRouteHandler: RouteHandler<
  typeof postValidateForVoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
