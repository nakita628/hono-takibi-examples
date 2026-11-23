import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRoomRecordingsRoomRecordingIdRoute,
  deleteRoomRecordingsRoute,
  getRoomRecordingsRoomRecordingIdRoute,
  getRoomRecordingsRoute,
} from '../routes'

export const deleteRoomRecordingsRouteHandler: RouteHandler<
  typeof deleteRoomRecordingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomRecordingsRouteHandler: RouteHandler<typeof getRoomRecordingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRoomRecordingsRoomRecordingIdRouteHandler: RouteHandler<
  typeof deleteRoomRecordingsRoomRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomRecordingsRoomRecordingIdRouteHandler: RouteHandler<
  typeof getRoomRecordingsRoomRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
