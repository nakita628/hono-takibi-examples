import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckPushRoute } from '../routes'

export const postCheckPushRouteHandler: RouteHandler<typeof postCheckPushRoute> = async (c) => {
  throw new Error('Not implemented')
}
