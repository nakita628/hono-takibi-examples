import type { RouteHandler } from '@hono/zod-openapi'
import type { postInputsMessagesRoute } from '../routes'

export const postInputsMessagesRouteHandler: RouteHandler<typeof postInputsMessagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
