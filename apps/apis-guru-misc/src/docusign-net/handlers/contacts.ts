import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdContactsContactIdRoute,
  deleteV21AccountsAccountIdContactsRoute,
  getV21AccountsAccountIdContactsContactIdRoute,
  postV21AccountsAccountIdContactsRoute,
  putV21AccountsAccountIdContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(deleteV21AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
