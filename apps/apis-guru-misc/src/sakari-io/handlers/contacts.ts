import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountsAccountIdContactsContactIdRoute,
  getV1AccountsAccountIdContactsContactIdRoute,
  getV1AccountsAccountIdContactsRoute,
  postV1AccountsAccountIdContactsRoute,
  putV1AccountsAccountIdContactsContactIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getV1AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
