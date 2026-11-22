import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListsListIdContactsContactIdRoute,
  getListsListIdContactsContactIdRoute,
  getListsListIdContactsRoute,
  postListsListIdContactsRoute,
  putListsFromListIdContactsContactIdToListIdRoute,
  putListsListIdContactsContactIdRoute,
  putListsListIdRemoveOptedOutContactsOptOutListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(putListsFromListIdContactsContactIdToListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsListIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListsListIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListIdRemoveOptedOutContactsOptOutListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
