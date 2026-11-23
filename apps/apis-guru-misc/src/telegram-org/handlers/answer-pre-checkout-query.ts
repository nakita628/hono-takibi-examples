import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnswerPreCheckoutQueryRoute } from '../routes'

export const postAnswerPreCheckoutQueryRouteHandler: RouteHandler<
  typeof postAnswerPreCheckoutQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
