import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnswerCallbackQueryRoute } from '../routes'

export const postAnswerCallbackQueryRouteHandler: RouteHandler<
  typeof postAnswerCallbackQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
