import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomFieldsIdOptionsIdCustomFieldOptionRoute,
  deleteCustomFieldsIdRoute,
  getCustomFieldsIdOptionsIdCustomFieldOptionRoute,
  getCustomFieldsIdOptionsRoute,
  getCustomFieldsIdRoute,
  postCustomFieldsIdOptionsRoute,
  postCustomFieldsRoute,
  putCustomFieldsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFieldsHandler = app
  .openapi(postCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomFieldsIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomFieldsIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomFieldsIdOptionsIdCustomFieldOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomFieldsIdOptionsIdCustomFieldOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
