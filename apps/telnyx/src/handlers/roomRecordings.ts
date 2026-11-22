import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoomRecordingsRoomRecordingIdRoute,
  deleteRoomRecordingsRoute,
  getRoomRecordingsRoomRecordingIdRoute,
  getRoomRecordingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomRecordingsHandler = app
  .openapi(deleteRoomRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoomRecordingsRoomRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomRecordingsRoomRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
