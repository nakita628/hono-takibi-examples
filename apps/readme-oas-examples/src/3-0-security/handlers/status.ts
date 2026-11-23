import type { RouteHandler } from '@hono/zod-openapi'
import type { postStatus401Route } from '../routes'

export const postStatus401RouteHandler: RouteHandler<typeof postStatus401Route> = async (c) => {
  throw new Error('Not implemented')
}
