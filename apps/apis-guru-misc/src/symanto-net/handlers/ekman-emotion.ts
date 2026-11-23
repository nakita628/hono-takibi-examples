import type { RouteHandler } from '@hono/zod-openapi'
import type { postEkmanEmotionRoute } from '../routes'

export const postEkmanEmotionRouteHandler: RouteHandler<typeof postEkmanEmotionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
