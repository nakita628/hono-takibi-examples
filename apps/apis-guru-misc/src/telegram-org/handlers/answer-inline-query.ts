import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnswerInlineQueryRoute } from '../routes'

export const postAnswerInlineQueryRouteHandler: RouteHandler<
  typeof postAnswerInlineQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
