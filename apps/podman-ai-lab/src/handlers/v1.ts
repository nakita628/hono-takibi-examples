import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1ModelsRoute, postV1ChatCompletionsRoute } from '../routes'

export const getV1ModelsRouteHandler: RouteHandler<typeof getV1ModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChatCompletionsRouteHandler: RouteHandler<
  typeof postV1ChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
