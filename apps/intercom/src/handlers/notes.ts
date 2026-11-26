import type { RouteHandler } from '@hono/zod-openapi'
import type { getNotesNoteIdRoute, deleteNotesNoteIdRoute } from '../routes'

export const getNotesNoteIdRouteHandler: RouteHandler<typeof getNotesNoteIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotesNoteIdRouteHandler: RouteHandler<typeof deleteNotesNoteIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
