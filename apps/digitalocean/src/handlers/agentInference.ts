import type { RouteHandler } from '@hono/zod-openapi'
import type { postApiV1ChatCompletionsRoute } from '../routes'

export const postApiV1ChatCompletionsRouteHandler: RouteHandler<
  typeof postApiV1ChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
