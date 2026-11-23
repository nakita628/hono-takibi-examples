import type { RouteHandler } from '@hono/zod-openapi'
import type { getNotesNoteIdRoute, getNotesRoute, postNotesRoute } from '../routes'

export const getNotesRouteHandler: RouteHandler<typeof getNotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotesRouteHandler: RouteHandler<typeof postNotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotesNoteIdRouteHandler: RouteHandler<typeof getNotesNoteIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
