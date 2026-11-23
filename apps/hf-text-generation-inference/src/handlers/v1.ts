import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1ModelsRoute,
  postV1ChatCompletionsRoute,
  postV1CompletionsRoute,
} from '../routes'

export const postV1ChatCompletionsRouteHandler: RouteHandler<
  typeof postV1ChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CompletionsRouteHandler: RouteHandler<typeof postV1CompletionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ModelsRouteHandler: RouteHandler<typeof getV1ModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
