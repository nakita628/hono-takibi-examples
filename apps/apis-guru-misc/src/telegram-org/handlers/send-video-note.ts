import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendVideoNoteRoute } from '../routes'

export const postSendVideoNoteRouteHandler: RouteHandler<typeof postSendVideoNoteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
