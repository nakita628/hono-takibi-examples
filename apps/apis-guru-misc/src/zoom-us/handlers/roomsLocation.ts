import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoomsLocationsLocationIdRoute,
  getRoomsLocationsLocationIdSettingsRoute,
  getRoomsLocationsRoute,
  getRoomsLocationsStructureRoute,
  patchRoomsLocationsLocationIdRoute,
  patchRoomsLocationsLocationIdSettingsRoute,
  patchRoomsLocationsStructureRoute,
  postRoomsLocationsRoute,
  putRoomsLocationsLocationIdLocationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomsLocationHandler = app
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
