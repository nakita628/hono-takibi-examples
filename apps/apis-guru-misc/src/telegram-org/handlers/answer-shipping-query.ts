import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnswerShippingQueryRoute } from '../routes'

export const postAnswerShippingQueryRouteHandler: RouteHandler<
  typeof postAnswerShippingQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
