import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChatUsersMeContactsContactIdRoute,
  getChatUsersMeContactsRoute,
  getContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getChatUsersMeContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatUsersMeContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
