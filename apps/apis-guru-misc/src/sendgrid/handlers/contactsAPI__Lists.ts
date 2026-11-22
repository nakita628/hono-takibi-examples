import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactdbListsListIdRecipientsRecipientIdRoute,
  deleteContactdbListsListIdRoute,
  deleteContactdbListsRoute,
  getContactdbListsListIdRecipientsRoute,
  getContactdbListsListIdRoute,
  getContactdbListsRoute,
  patchContactdbListsListIdRoute,
  postContactdbListsListIdRecipientsRecipientIdRoute,
  postContactdbListsListIdRecipientsRoute,
  postContactdbListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsAPI__ListsHandler = app
  .openapi(deleteContactdbListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactdbListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbListsListIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbListsListIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbListsListIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbListsListIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
