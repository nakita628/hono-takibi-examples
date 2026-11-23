import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessengerExternalIdRoute,
  getMessengerExternalIdRoute,
  patchMessengerExternalIdRoute,
  postMessengerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messengerHandler = app
  .openapi(postMessengerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessengerExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessengerExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessengerExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
