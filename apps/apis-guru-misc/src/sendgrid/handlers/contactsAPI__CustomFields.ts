import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactdbCustomFieldsCustomFieldIdRoute,
  getContactdbCustomFieldsCustomFieldIdRoute,
  getContactdbCustomFieldsRoute,
  getContactdbReservedFieldsRoute,
  postContactdbCustomFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsAPI__CustomFieldsHandler = app
  .openapi(getContactdbCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbCustomFieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbCustomFieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbReservedFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
