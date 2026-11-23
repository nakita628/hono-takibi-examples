import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmotionRoute } from '../routes'

export const postEmotionRouteHandler: RouteHandler<typeof postEmotionRoute> = async (c) => {
  throw new Error('Not implemented')
}
