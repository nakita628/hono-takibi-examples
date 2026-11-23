import type { RouteHandler } from '@hono/zod-openapi'
import type { postCredentialsRoute } from '../routes'

export const postCredentialsRouteHandler: RouteHandler<typeof postCredentialsRoute> = async (c) => {
  throw new Error('Not implemented')
}
