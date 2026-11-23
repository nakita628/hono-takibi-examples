import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomFieldsCustomFieldGidRoute,
  getCustomFieldsCustomFieldGidRoute,
  postCustomFieldsCustomFieldGidEnumOptionsInsertRoute,
  postCustomFieldsCustomFieldGidEnumOptionsRoute,
  postCustomFieldsRoute,
  putCustomFieldsCustomFieldGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFieldsHandler = app
  .openapi(postCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomFieldsCustomFieldGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomFieldsCustomFieldGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomFieldsCustomFieldGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomFieldsCustomFieldGidEnumOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomFieldsCustomFieldGidEnumOptionsInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
