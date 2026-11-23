import type { RouteHandler } from '@hono/zod-openapi'
import type { getMarkdownEmoticonsRoute, postMarkdownRoute } from '../routes'

export const postMarkdownRouteHandler: RouteHandler<typeof postMarkdownRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMarkdownEmoticonsRouteHandler: RouteHandler<
  typeof getMarkdownEmoticonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
