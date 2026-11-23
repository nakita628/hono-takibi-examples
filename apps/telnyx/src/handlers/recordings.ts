import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRecordingsRecordingIdRoute,
  getRecordingsRecordingIdRoute,
  getRecordingsRoute,
  postRecordingsActionsDeleteRoute,
} from '../routes'

export const getRecordingsRouteHandler: RouteHandler<typeof getRecordingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRecordingsActionsDeleteRouteHandler: RouteHandler<
  typeof postRecordingsActionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRecordingsRecordingIdRouteHandler: RouteHandler<
  typeof deleteRecordingsRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecordingsRecordingIdRouteHandler: RouteHandler<
  typeof getRecordingsRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
