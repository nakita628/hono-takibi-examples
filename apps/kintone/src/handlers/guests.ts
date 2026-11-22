import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKGuestGuestSpaceIdV1GuestsJsonRoute,
  deleteKV1GuestsJsonRoute,
  postKGuestGuestSpaceIdV1GuestsJsonRoute,
  postKV1GuestsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestsHandler = app
  .openapi(deleteKGuestGuestSpaceIdV1GuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1GuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1GuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1GuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
