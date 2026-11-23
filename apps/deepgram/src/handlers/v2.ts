import type { RouteHandler } from '@hono/zod-openapi'
import type { postV2SpeakRoute } from '../routes'

export const postV2SpeakRouteHandler: RouteHandler<typeof postV2SpeakRoute> = async (c) => {
  throw new Error('Not implemented')
}
