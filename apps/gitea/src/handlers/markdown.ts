import type { RouteHandler } from '@hono/zod-openapi'
import type { postMarkdownRawRoute, postMarkdownRoute } from '../routes'

export const postMarkdownRouteHandler: RouteHandler<typeof postMarkdownRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMarkdownRawRouteHandler: RouteHandler<typeof postMarkdownRawRoute> = async (c) => {
  throw new Error('Not implemented')
}
