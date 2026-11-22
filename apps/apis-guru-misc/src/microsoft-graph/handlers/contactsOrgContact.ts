import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsOrgContactIdRoute,
  getContactsOrgContactIdRoute,
  getContactsRoute,
  patchContactsOrgContactIdRoute,
  postContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsOrgContactHandler = app
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsOrgContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactsOrgContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
