import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsIdDistrictRoute,
  getContactsIdRoute,
  getContactsIdStudentRoute,
  getContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdDistrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdStudentRoute, (c) => {
    throw new Error('Not implemented')
  })
