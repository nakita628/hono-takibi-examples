import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoomsRoomIdRoute,
  getRoomsDigitalSignageRoute,
  getRoomsRoomIdDevicesRoute,
  getRoomsRoomIdRoute,
  getRoomsRoomIdSettingsRoute,
  getRoomsRoute,
  patchRoomsEventsRoute,
  patchRoomsIdEventsRoute,
  patchRoomsRoomIdRoute,
  patchRoomsRoomIdSettingsRoute,
  postRoomsRoute,
  putRoomsRoomIdLocationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomsHandler = app
  .openapi(getRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsDigitalSignageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsRoomIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoomsRoomIdLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsRoomIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsRoomIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
