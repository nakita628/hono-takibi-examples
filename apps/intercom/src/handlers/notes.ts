import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteNotesNoteIdRoute, getNotesNoteIdRoute } from '../routes'

export const getNotesNoteIdRouteHandler: RouteHandler<typeof getNotesNoteIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotesNoteIdRouteHandler: RouteHandler<typeof deleteNotesNoteIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
