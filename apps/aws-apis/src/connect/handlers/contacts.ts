import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsInstanceIdContactIdRoute,
  postContactsInstanceIdContactIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getContactsInstanceIdContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsInstanceIdContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
