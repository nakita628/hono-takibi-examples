import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoomsRoomIdRoute,
  getRoomsAccountProfileRoute,
  getRoomsAccountSettingsRoute,
  getRoomsDigitalSignageRoute,
  getRoomsLocationsLocationIdRoute,
  getRoomsLocationsLocationIdSettingsRoute,
  getRoomsLocationsRoute,
  getRoomsLocationsStructureRoute,
  getRoomsRoomIdDevicesRoute,
  getRoomsRoomIdRoute,
  getRoomsRoomIdSettingsRoute,
  getRoomsRoute,
  patchRoomsAccountProfileRoute,
  patchRoomsAccountSettingsRoute,
  patchRoomsEventsRoute,
  patchRoomsIdEventsRoute,
  patchRoomsLocationsLocationIdRoute,
  patchRoomsLocationsLocationIdSettingsRoute,
  patchRoomsLocationsStructureRoute,
  patchRoomsRoomIdRoute,
  patchRoomsRoomIdSettingsRoute,
  postRoomsLocationsRoute,
  postRoomsRoute,
  putRoomsLocationsLocationIdLocationRoute,
  putRoomsRoomIdDevicesDeviceIdAppVersionRoute,
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
  .openapi(getRoomsAccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsAccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsDigitalSignageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomsLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsLocationsStructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsLocationsStructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoomsLocationsLocationIdLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsLocationsLocationIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoomsLocationsLocationIdSettingsRoute, (c) => {
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
  .openapi(putRoomsRoomIdDevicesDeviceIdAppVersionRoute, (c) => {
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
