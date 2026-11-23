import type { RouteHandler } from '@hono/zod-openapi'
import type { postInitializeSpeakerRoute } from '../routes'

export const postInitializeSpeakerRouteHandler: RouteHandler<
  typeof postInitializeSpeakerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
