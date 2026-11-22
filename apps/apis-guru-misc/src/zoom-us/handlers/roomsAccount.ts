import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoomsAccountProfileRoute,
  getRoomsAccountSettingsRoute,
  patchRoomsAccountProfileRoute,
  patchRoomsAccountSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomsAccountHandler = app
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
