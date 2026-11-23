import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsIdRoute,
  getContactsIdRoute,
  getContactsRoute,
  patchContactsIdRoute,
  postContactsRoute,
  putContactsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
