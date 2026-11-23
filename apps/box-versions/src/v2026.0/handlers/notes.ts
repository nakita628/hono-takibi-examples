import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotesConvertRoute } from '../routes'

export const postNotesConvertRouteHandler: RouteHandler<typeof postNotesConvertRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
